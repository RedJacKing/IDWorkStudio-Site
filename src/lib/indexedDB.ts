import { Project } from '../types';

export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch('/gallery.json');
    if (!response.ok) {
      console.warn('Failed to fetch gallery.json, returning empty list');
      return [];
    }
    return response.json();
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
};

// No-op for update/delete/add as we are now using GitHub
export const updateProject = async () => {
  throw new Error('Please update projects via GitHub');
};

export const deleteProject = async () => {
  throw new Error('Please delete projects via GitHub');
};

export const addProject = async () => {
  throw new Error('Please add projects via GitHub');
};
