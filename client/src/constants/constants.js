export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

// API Token is only needed for production environment
// For local development, authentication is disabled
export const API_TOKEN = import.meta.env.PROD
  ? "2e9ca1a5cb00c2c125a6c8fb341fd643fa2467cb3e91515b1f8a5daeba061a00518c743e6b8011bc102d78b6aebbbb7e34a0dc46ee973b4503c10c751e06f429748aeb4d2cac330a6eea629fd44a8fe75044b9001e26571afda42f1c1fae822257ae5552ef807739b7eb1aadfdbec55d67b10e598452355bb499c081d1302919"
  : null; // No token needed for local development
