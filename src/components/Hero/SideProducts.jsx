import hairImg from "../../assets/images/product1.png";
import tabletImg from "../../assets/images/product2.png";
import coughImg from "../../assets/images/product3.png";
import { FaStar } from "react-icons/fa";

function SideProducts() {
    const products = [
        {
            image: hairImg,
            name: "Nature's Bounty Skin, hair, nails, capsules 60 pcs.",
            price: "244 rubles",
        },
        {
            image: tabletImg,
            name: "Arbidol® - a drug for acute respiratory viral infections and influenza, 10 tablets",
            price: "145 rubles",
        },
        {
            image: coughImg,
            name: "Desmoxan - treatment for smoking cessation, 100 tablets",
            price: "444 rubles",
        },
    ];

    return (
        <div className="lg:col-span-2 flex flex-col gap-4">
            {products.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm flex gap-3 items-center"
                >
                    {/* Product Image */}
                    <div className="relative">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-contain"
                        />

                        <span className="absolute -top-2 left-0 bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full">
                            HIT
                        </span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                        <h3 className="text-[10px] text-black leading-4">
                            {item.name}
                        </h3>

                        <div className="flex items-center justify-between mt-3">
                            <p className="font-bold text-[10px] text-blak">
                                {item.price}
                            </p>

                            <div className="flex text-yellow-400 text-[10px]">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SideProducts;