 
  
 export async function getCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data;
  }

 export async function getNewsByCategoriesId(category_id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const json = await res.json();
    return json;
  }