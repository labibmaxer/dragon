import { Span } from 'next/dist/trace';
import React from 'react';
import Marquee from "react-fast-marquee";
const news = [
  {
    _id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    _id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    _id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];
const BreakinNews = () => {
    return (
        <div className='flex items-center justify-between bg-gray-200 px-4 py-2 container mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}> 
                {news.map((n )=> 
                <span key={n._id}>{n.title}</span>)}
 </Marquee>
        </div>
    );
};

export default BreakinNews;