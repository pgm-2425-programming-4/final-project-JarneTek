export const PAGE_SIZE_OPTIONS = [5, 10, 25, 50];

export const API_URL = import.meta.env.PROD
  ? "https://final-project-jarnetek.onrender.com/api"
  : "http://localhost:1337/api";

export const API_TOKEN = import.meta.env.PROD
  ? "700e0a6db7394a5fca8217badd54ced5ee339f63533950e59734832ff520ce57e15d24b9c59d951e0f7da735644df8ca034d7f7ba60725320efeb41bc2004b04cdd2dd9c889e086ac210bb6ae252b5483cfa2165cfca879449f956c09e2b06af6ad573a94881e8e255f6b72c9bb94b68c28ad263e6bbe2d98dc7ea6a69087b2a"
  : "82b66a0016b084771315baceae97bec11e8b221a3ad417b6dc90b14580715c98282c7b937d250f8e9987f64fd16fcf536670ffd0444ee5fc6479621f7ed7429cab409acc7acfd452f79d198a9c5f8623059858ec85dae8900dc29fc7ba90ba75895052e2012beb3e70da5443efc09d1fff8e262b4f243824429452b7f23ab865";
