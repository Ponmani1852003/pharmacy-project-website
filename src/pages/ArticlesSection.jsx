import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ArticlesSection from "../components/Articles/ArticlesSection";
import Blog from "../components/Blog/Blog";

export default function Articles() {
    return (
        <>
            <ArticlesSection />
            <Blog repeat={4} showHeader={false} />
            {/* <Blog/> */}
            <div className="max-w-7xl mx-auto px-6 pb-15">
        <div className="bg-[#F7FAFC] rounded-2xl h-[58px] flex items-center px-6">
          <div className="flex items-center gap-3">

            <button className="w-8 h-8 rounded-xl bg-white text-[#28C8A4] font-semibold shadow-sm">
              1
            </button>

            <button className="w-8 h-8 rounded-xl bg-white text-[#4B5563] shadow-sm hover:text-[#28C8A4]">
              2
            </button>

            <button className="w-8 h-8 rounded-xl bg-white text-[#4B5563] shadow-sm hover:text-[#28C8A4]">
              3
            </button>

            <button className="w-8 h-8 rounded-xl bg-white text-[#4B5563] shadow-sm hover:text-[#28C8A4]">
              4
            </button>

            <button className="w-8 h-8 rounded-xl bg-white text-[#4B5563] shadow-sm">
              ...
            </button>

            <button className="w-8 h-8 rounded-xl bg-white text-[#4B5563] shadow-sm hover:text-[#28C8A4]">
              32
            </button>

          </div>
        </div>
      </div>
          
        </>
    );
}