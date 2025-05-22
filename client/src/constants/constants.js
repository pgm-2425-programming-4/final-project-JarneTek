export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "812ad28c4a0c90bc9a49e5149bfa91b2c400666915dc8d86656451040aa50afda730463745fb81db5303bad2cba5ac883c8351393b8973181d4368868616fde7ef18f03c33bee2630dd2e37b9abc1f24d436d5018a9ebb1540c4ea09a6d58815274d8b562a96b56b37b17dcff94789a0157bfcd45d9cac236c18c31f9503f652"
  : "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";
