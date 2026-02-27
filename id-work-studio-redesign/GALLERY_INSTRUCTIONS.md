# Gallery Management Guide

This website now uses a static file system for managing the gallery. You no longer need to use the Admin panel or database.

## How to Add Photos

1.  Navigate to the `public/gallery` folder in your project.
2.  Open either the `residential` or `commercial` folder.
3.  Create a new folder for your project (e.g., `Modern Loft`).
    *   The folder name will be used as the project title.
4.  Add your photos (JPG, PNG, WebP) inside that folder.
    *   You can add multiple photos. They will all be displayed under that project.
5.  Alternatively, you can just drop image files directly into `residential` or `commercial` if they don't belong to a specific project group. The filename will be used as the title.

## How to Update the Site

1.  After adding your photos, run the build command:
    ```bash
    npm run build
    ```
    This will automatically generate the gallery index and prepare your site for deployment.

2.  Deploy the `dist` folder to Netlify (drag and drop).
