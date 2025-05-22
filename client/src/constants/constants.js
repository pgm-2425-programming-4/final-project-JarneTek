export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "aa96f1d5afdfe6086241cb939f45699b2f6835f62a04e777448664614d9190255899d3b8ae17e345608b0b99afba38a752df746b384fde5ad522920f5331eb6570c6026d4e975fb976f794700c88da5189014cc0b83191af82e370addd6dc829bbb0996269a7aac10c50aa61bfd71752902aa351c11694df569aca3d6dc69002"
  : "3137eff2d3cf6b7ddbb90275e0e66d931435c4af1d7fd9c128883cb50f60c239bc691ec8618ad3834d6a30b2ddfefec67d8f92ea1b5e202dda576658c9d7ef0dac831665d39af8cac2f37ddd75cd32f5104892c0360ce606af4e6891f262ad35d94e8eae0e0a795ba810dfb6f51ae3acdf3a1c2a93390120b4e96d4760b280b9";
