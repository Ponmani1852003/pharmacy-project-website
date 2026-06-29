import Breadcrumb from "./Breadcrumb";
import CategorySlider from "./CategorySlider";
import SearchBar from "./SearchBar";

const BlogHeader = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 lg:px-6 py-8">

            <Breadcrumb />

            <h1 className="text-[30px] font-bold text-[#27314D] leading-[30px] mt-5">
                Health Blog
            </h1>

            <CategorySlider />

            <SearchBar />

        </section>
    );
};

export default BlogHeader;