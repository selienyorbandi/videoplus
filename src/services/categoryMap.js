/* Translate for non translated categories in TMDB */

export const categoryMap = category => {
  const CATEGORY = {
    "Action & Adventure": "Acción y aventura",
    "Kids": "Infantil",
    "News": "Noticiario",
    "Sci-Fi & Fantasy": "Ficción | Fantasía",
    "Soap": "Telenovela",
    "Talk": "Las contraseñas no coinciden",
    "War & Politics": "Bélica | Política",
    "Western": "Viejo Oeste",
    "Suspense": "Suspenso"
  };
  
  return CATEGORY[category] || category;
};