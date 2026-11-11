import Leftsidebar from "@/components/homepage/news/Leftsidebar";
import Image from "next/image";
 async function getCategories() {
const res = await fetch ('https://openapi.programming-hero.com/api/news/categories')
const data = await res.json()
return data;
 }
export default async function Home() {
  const categoriesData = await getCategories();
const categories = categoriesData.data.news_category;
  // console.log(categories.news_category , 'categories');
  
  return (
  <div className="grid grid-cols-12 mt-10 container mx-auto ">
    <div className="font-bold text-3xl col-span-3"> 
    <Leftsidebar categories={categories} activeid={null}></Leftsidebar>
    </div>
    <div className="font-bold text-3xl bg-red-400 col-span-6"> 
      All news
      </div>
       <div className="font-bold text-3xl bg-blue-400 col-span-3"> 
     social icons 
      </div>
  </div>
  );
}
