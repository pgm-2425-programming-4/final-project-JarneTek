export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "559c921b6049e83e0c839fb705e2ae4324d3050c8cdb766e6054b5177c9f27bb9491268fbeb31524c1104ca688790c8e0a07b2070f08b0243dd7ba02d5247cf010385a20a7f9861813a605e93f816eaba740a1268474f483503693371b6c7ba18e71adf9a9b8165f0f0459b47a2a890d39bc71c48caa7c03e4f1f5a04e8b4e9f"
  : "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";
