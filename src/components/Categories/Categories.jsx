import categories from "./CategoriesData";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-16 ">

      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-4 gap-8 items-start">

        {/* Column 1 */}
        <CategoryCard
          data={categories[0]}
          large={true}
        />

        {/* Column 2 */}
        <div className="flex flex-col gap-8">
          <CategoryCard data={categories[1]} />
          <CategoryCard data={categories[6]} />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-8">
          <CategoryCard data={categories[2]} />
          <CategoryCard data={categories[4]} />
          <CategoryCard data={categories[7]} />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-8">
          <CategoryCard data={categories[3]} />
          <CategoryCard data={categories[5]} />
          <CategoryCard data={categories[8]} />
        </div>

      </div>

      {/* Tablet */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
        {categories.map((item, index) => (
          <CategoryCard
            key={index}
            data={item}
            large={false}
          />
        ))}
      </div>

      {/* Mobile */}
      <div className="grid md:hidden gap-6">
        {categories.map((item, index) => (
          <CategoryCard
            key={index}
            data={item}
            large={false}
          />
        ))}
      </div>

    </section>
  );
}

export default Categories;