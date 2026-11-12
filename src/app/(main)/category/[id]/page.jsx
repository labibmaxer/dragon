import Leftsidebar from '@/components/homepage/news/Leftsidebar';
// import Rightsidebar from '@/components/homepage/Rightsidebar';
// import Rightsidebar from '@/components/homepage/news/Rightsidebar';
import Rightsidebar from '@/components/homepage/news/Rightsidebar';
import React from 'react';
import { GiH2O } from 'react-icons/gi';
 import { getCategories, getNewsByCategoriesId } from '@/lib/data';
const NewsCategoryPage = async ({params}) => {
  const {id} = await params;
  

  const categoriesData = await getCategories();
  const categories = categoriesData.data.news_category;
  
  const newsjson = await getNewsByCategoriesId(id);
  const news = newsjson.data;
    return (
        <div className="grid grid-cols-12 gap-4 mt-10 container mx-auto">
  <div className="col-span-3">
    <Leftsidebar categories={categories} activeid={id} />
  </div>

  <div className="col-span-6">
    All news
    { news.length > 0 ? news.map((n) => (
      <div key={n._id} className="bg-slate-200 p-3 rounded-md mt-3">
        <h1 className="font-bold text-lg">{n.title}</h1>
        <p>{n.details}</p>
      </div>
    )): <h2>no news found </h2>}
  </div>

  <div className="col-span-3">
    <Rightsidebar />
  </div>
</div>
    );
};

export default NewsCategoryPage;