import { useEffect, useState } from "react";
import CategoryItemAll from "./CategoryItemAll";

const CategoryItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-ruby-nu.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    const categoriesItems = items.slice(0, 6);

    return (
        <div className="my-20 mx-5 md:mx-10 lg:mx-20">
            <h2 className="text-center font-bold text-3xl">Craft Category</h2>
            <div className="my-5 mx-auto gap-7 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    categoriesItems.map(item => <CategoryItemAll key={item._id}
                        items={item}></CategoryItemAll>)
                }
            </div>
        </div>
    );
};

export default CategoryItem;