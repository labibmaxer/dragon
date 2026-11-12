
import Leftsidebar from "@/components/homepage/news/Leftsidebar";
import Image from "next/image";
import Rightsidebar from "@/components/homepage/Rightsidebar";
 async function getCategories() {
const res = await fetch ('https://openapi.programming-hero.com/api/news/categories')
const data = await res.json()
return data;
 }
 async function getNewsByCategoriesId(category_id) {
const res = await fetch (`https://openapi.programming-hero.com/api/news/category/${category_id}`)
const json = await res.json()
return json;
 }
export default async function Home() {
  const categoriesData = await getCategories();
const categories = categoriesData.data.news_category;
 const newsjson = await getNewsByCategoriesId("01");
const news = newsjson.data;
// return json.data
  // console.log(categories.news_category , 'categories');
  
  return (
  <div className="grid grid-cols-12 gap-4 mt-10 container mx-auto">
  <div className="col-span-3">
    <Leftsidebar categories={categories} activeid={null} />
  </div>

  <div className="col-span-6">
    All news
    {news.map((n) => (
      <div key={n._id} className="bg-slate-200 p-3 rounded-md mt-3">
        <h1 className="font-bold text-lg">{n.title}</h1>
        <p>{n.details}</p>
      </div>
    ))}
  </div>

  <div className="col-span-3">
    <Rightsidebar />
  </div>
</div>
  );
}
