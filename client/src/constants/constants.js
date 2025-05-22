export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "c1f267d3bacd20b7e982685a092e14b4773706407c69fdcad68ae0fc3929c323a6b04ee0f79089506e7fcc5738d42a54e0fa7c3dd493dbf0cd7a84adff790a6051d0660602ccafdb7a1e057550f05e3500c6454fd4c0aaf64643055b2298db1bffcfc42c49dae01872cfee5ee05fd63f07fc099523e420de20fbd428c5853e43"
  : "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";
