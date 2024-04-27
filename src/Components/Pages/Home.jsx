import { Link, useLoaderData } from "react-router-dom";
import Craft from "./Craft";


const Home = () => {
    const loadedCrafts = useLoaderData();
    const crafts = loadedCrafts.slice(0, 6);
    return (
        <div className="py-20">
            <div className="my-10 mx-5 md:mx-10 lg:mx-20">
                <h2 className="font-bold text-2xl text-center">
                    Craft Items
                </h2>
                <p className="text-center mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque magnam asperiores facere iure mollitia enim unde ipsam architecto nihil? Eveniet!</p>
                <div className="my-5 mx-auto gap-7 grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        crafts.map((craft) => <Craft
                            key={craft._id}
                            craft={craft}></Craft>)
                    }
                </div>
                <div className="flex w-full justify-center my-10">
                    <Link className="" to="/all">
                        <button className="btn text-lg px-10">View All Items</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;