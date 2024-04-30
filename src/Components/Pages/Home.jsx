import { Link, useLoaderData } from "react-router-dom";
import Craft from "./Craft";
import Slider from "../Slider";
import { Slide } from "react-awesome-reveal";
import Faq from "./Faq";
import CategoryItem from "./CategoryItem";

const Home = () => {
    const loadedCrafts = useLoaderData();
    const crafts = loadedCrafts.slice(0, 6);
    return (
        <div className="py-20">
            <Slider />
            <div className="my-20 mx-5 md:mx-10 lg:mx-20">
                <Slide duration={2000}>
                    <h2 className="font-bold text-2xl md:text-3xl text-center">
                        Craft Items
                    </h2>
                </Slide>
                <Slide direction="right" duration={2000}>
                    <div className="my-5 mx-auto gap-7 grid md:grid-cols-2 lg:grid-cols-3">
                        {
                            crafts.map((craft) => <Craft
                                key={craft._id}
                                craft={craft}></Craft>)
                        }
                    </div>
                </Slide>

                <div className="flex w-full justify-center my-10">
                    <Link className="" to="/all">
                        <button className="btn text-lg px-10">View All Items</button>
                    </Link>
                </div>
            </div>
            <Faq />
            <CategoryItem />

        </div>
    );
};

export default Home;