export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "c5ba29c953aa8f97d580124b37b9266d1ce57fa8e2ff6ec382a11f44e3b67c923479308a3f57b546196e5d2b9ada83c0fc6fac4dc075da5a91a25de4b388a252e2162185c0692194d33946f8ea78fba23c3e8c861d1ab0736e1cf03e0618e332d1fe55b7e15f0a9b81c499f9fe4995489dd9328f2850eddf15d88aade0b8b469"
  : "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";
