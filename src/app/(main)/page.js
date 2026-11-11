import Image from "next/image";

export default function Home() {
  return (
  <div className="grid grid-cols-3 mt-10">
    <div className="font-bold text-3xl bg-green-400"> 
      All categories
      </div>
       <div className="font-bold text-3xl bg-red-400"> 
      All news
      </div>
       <div className="font-bold text-3xl bg-blue-400"> 
     social icons 
      </div>
  </div>
  );
}
