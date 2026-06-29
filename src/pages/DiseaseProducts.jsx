import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AlphabetSearch from "../components/AlphabetSearch/AlphabetSearch";
import Categories from "../components/Categories/Categories";
import Blog from "../components/Blog/Blog";

export default function DiseaseProducts() {
    return (
        <>
            <AlphabetSearch />
            <Categories />
            <Blog/>
        </>
    )
}
