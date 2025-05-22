export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "4abf1337e63aac267030e138f8757ca130baf7fa7bcc0b4930205ac804cd5d5f652c8ee0aa71a5f2cb473209402356115a1371145a7fc5187891de9e83162621ed0b384705e9b65c174912ffd2cd7572023fb0c46385b621d009d6dde6d42313e454bdd04b47826d01b715b34ce7d9be8bf54e6cc5baf16258b20deae8b45945"
  : "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";
