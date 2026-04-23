// scripts/prerender.mjs

import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'fs'
import { join, extname, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const PORT = 7654

const routes = [
  '/',
  '/residential',
  '/commercial',
  '/commercial/reinstatement',
  '/commercial/office-renovation',
  '/commercial/retail-mall-renovation',
  '/commercial/shophouse-renovation',
  '/commercial/permits-compliance',
  '/insights',
  '/insights/renovation-cost-singapore-2026',
  '/insights/hdb-renovation-timeline-singapore',
  '/insights/renovation-mistakes-singapore',
  
]

const mime = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.webp': 'image/webp',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
}

const server = createServer((req, res) => {
  if (res.headersSent || res.writableEnded) return

  const urlPath = req.url.split('?')[0]
  let filePath = join(distDir, urlPath)

  try {
    const stat = statSync(filePath)
    if (stat.isDirectory()) filePath = join(filePath, 'index.html')
    const contentType = mime[extname(filePath)] || 'application/octet-stream'
    if (res.headersSent || res.writableEnded) return
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(readFileSync(filePath))
  } catch {
    if (res.headersSent || res.writableEnded) return
    try {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(readFileSync(join(distDir, 'index.html')))
    } catch {
      // ignore
    }
  }
})

server.listen(PORT, async () => {
  console.log(`\n[prerender] Local server running on port ${PORT}`)

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: true,
  })

  let success = 0
  let failed = 0

  for (const route of routes) {
    const page = await browser.newPage()

    // Block images and fonts — we only need HTML structure for prerendering.
    // This dramatically speeds up image-heavy pages like /gallery.
    await page.setRequestInterception(true)
    page.on('request', (req) => {
      const type = req.resourceType()
      if (type === 'image' || type === 'media') {
        req.abort()
      } else {
        req.continue()
      }
    })

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      })

      // Wait for React + i18n to finish rendering
      await new Promise(r => setTimeout(r, 2000))

      const html = await page.content()

      const outputDir = route === '/' ? distDir : join(distDir, route)
      if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true })
      writeFileSync(join(outputDir, 'index.html'), html)

      console.log(`[prerender] ✓  ${route}`)
      success++
    } catch (err) {
      console.error(`[prerender] ✗  ${route} — ${err.message}`)
      failed++
    } finally {
      await page.close()
    }
  }

  await browser.close()
  server.close()

  console.log(`\n[prerender] Done — ${success} succeeded, ${failed} failed.\n`)
  if (failed > 0) process.exit(1)
})
