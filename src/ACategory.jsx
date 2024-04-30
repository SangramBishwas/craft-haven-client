import { FaStarHalfAlt } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const ACategory = () => {
    const allCategories = useLoaderData();
    console.log(allCategories)
    const { category } = useParams();
    const categoryItems = allCategories.filter((item) => item.category === category);
    return (
        <div className="mx-5 md:mx-10 lg:mx-20 py-24">
            <h2 className="text-center font-bold text-3xl my-5">{categoryItems[0].category}</h2>
            <div className="my-20 mx-auto gap-7 grid lg:grid-cols-2 items-center">
                {
                    categoryItems.map(item => (<div key={item._id}>
                        <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl">
                            <figure className='lg:w-1/2'><img className='lg:h-full ' src={item.image} alt="Movie" /></figure>
                            <div className="lg:w-1/2 space-y-4 px-5 lg:px-10">
                                <h2 className="card-title">{item.name}</h2>
                                <div className="flex justify-between lg:gap-3 lg:flex-col ">
                                    <div>customization: <span className="font-semibold">{item.customization}</span></div>
                                    <div>status: <span className="font-semibold">{item.stock}</span></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>price: <span className="font-semibold text-num">{item.price}Tk</span></div>
                                    <div className='flex gap-1 items-center text-lg'>
                                        <FaStarHalfAlt />
                                        <h3 className='text-num'>{item.rating}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>))
                }
            </div>

        </div>
    );
};

export default ACategory;