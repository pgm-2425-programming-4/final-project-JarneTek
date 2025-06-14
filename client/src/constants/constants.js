export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

// API Token is only needed for production environment
// For local development, authentication is disabled
export const API_TOKEN = import.meta.env.PROD
  ? "6e65ff5fe99015f00cb2f37d6219072eaa3f4a7463860f6da99c179d265514d0a7a7ba33d90f98212f2b68f2fb56df297468523079b5bbfa351fa80d5bae790f84148af8c9d247bd7653d8ea12e76b65ab118292b8b8f51d8ed4c040a71958f318fde539f62b1266930bb7b55c4bd9bb44ccf1cb3a2c1473106a122682619cf4"
  : "dea593255798ee8c715701c1318da8e8105058320fc53cba43dd98adc3ba33a7abfa1eacc6603d0e570eef6cb4462d3b6d366662d5069da781c9fe3b67b4d319828734fb357989b56ea546e913602287d5e18777cba98c145d0ff38aeb5706c0e2faf06ec9deb13cca22f1cd9b2be1b68d656f443493da52fb8835dc807135cf"; // No token needed for local development
