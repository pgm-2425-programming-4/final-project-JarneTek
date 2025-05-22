export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "0cbe44be634c67bc49c98a01f58ed765939561e33ca4e38386e315a86db36b0535ddd7372baecff831a5a20ecee4874786a8d8f6b7fbc2cb06cca332ec393166aed07eeda22f606250f724a074caf496851aa830574b540d4cba5ff401c7eddaf000c703dbc43365548cb6e63da92954916e2df0a92e18b810ceda9e7392751f"
  : "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";
