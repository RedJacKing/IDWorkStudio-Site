export interface Project {
  id: number | string;
  title: string;
  description: string;
  imageUrl: string;
  originalUrl?: string;
  category: string;
  createdAt: string;
  order?: number;
}
