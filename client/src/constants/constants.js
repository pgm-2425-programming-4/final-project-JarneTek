export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

// API Token is only needed for production environment
// For local development, authentication is disabled
export const API_TOKEN = import.meta.env.PROD
  ? "2e9ca1a5cb00c2c125a6c8fb341fd643fa2467cb3e91515b1f8a5daeba061a00518c743e6b8011bc102d78b6aebbbb7e34a0dc46ee973b4503c10c751e06f429748aeb4d2cac330a6eea629fd44a8fe75044b9001e26571afda42f1c1fae822257ae5552ef807739b7eb1aadfdbec55d67b10e598452355bb499c081d1302919"
  : "dea593255798ee8c715701c1318da8e8105058320fc53cba43dd98adc3ba33a7abfa1eacc6603d0e570eef6cb4462d3b6d366662d5069da781c9fe3b67b4d319828734fb357989b56ea546e913602287d5e18777cba98c145d0ff38aeb5706c0e2faf06ec9deb13cca22f1cd9b2be1b68d656f443493da52fb8835dc807135cf"; // No token needed for local development
