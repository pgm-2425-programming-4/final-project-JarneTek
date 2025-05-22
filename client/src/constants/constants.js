export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "e582f7ec7f31d95ac03d5e421c17ad2a2bd67266d87d44f35ad97145775fb368d05b055fd1d3d7f8e2e2e4709dc8db8f167bf733d7dae15b32fdbe9b51f6170407e1120c309186ecfb8dee3d5d30d7c9e5aad493e3515527e6ddbe6fffd802c3f4d4afe4c638c551643dec8e09dfd72b42b9f50c41037b192ae191fa4fd3d382"
  : "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";
