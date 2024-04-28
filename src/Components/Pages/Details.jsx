import { FaStarHalfAlt } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const crafts = useLoaderData();
    console.log(crafts)
    const { id } = useParams();
    const craft = crafts.find((item) => item._id === id);
    const { name, artist, stock, price, image, rating, category, time, description } = craft;
    console.log(craft)
    return (
        <div className="mx-5 md:mx-10 lg:mx-20 py-24">
            <h2 className="text-center font-bold text-3xl mb-5">
                Craft Details
            </h2>
            <div className="flex gap-10 justify-between">
                <div>
                    <img className="w-full" src={image} alt="" />
                </div>
                <div className="bg-base-200 w-1/3 py-5 px-10">
                    <h3 className="text-lg border-b-2 pb-2">{category}</h3>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <div className="flex gap-5 items-center py-3">
                        <h4 className="font-semibold">Price: <span className="text-num">{price}</span> BDT</h4>
                        <h4 className="font-semibold">{stock}</h4>
                        <div className='flex gap-1 items-center text-lg'>
                            <FaStarHalfAlt />
                            <h3 className='text-num'>{rating}</h3>
                        </div>
                    </div>
                    <div className="flex gap-2 font-semibold pb-3">
                        <h3>Artist:</h3>
                        <span> {artist}</span>
                    </div>
                    <div className="flex gap-2 font-semibold pb-3">
                        <h3>Duration:</h3>
                        <span> {time} hours</span>
                    </div>
                    <p>{description}</p>
                    <div className="my-5 flex justify-center">
                        <button className="bg-base-content text-white btn px-10">Add To Cart</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Details;