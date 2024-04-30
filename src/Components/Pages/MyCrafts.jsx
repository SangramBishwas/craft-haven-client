import { useEffect, useState } from "react";
import useAuth from "../../Custom Hook/useAuth";
import MyCraftDetails from "./MyCraftDetails";

const MyCrafts = () => {
    const { user } = useAuth();
    const [items, setitems] = useState([])
    const [custom, setCustom] = useState([])
    console.log(items)
    const handleCustomFilter = (filter) => {
        if (filter === 'All') {
            setCustom(items);
        } else if (filter === 'Yes') {
            const yes = items.filter(item => item.customization === 'Yes');
            setCustom(yes);
        } else if (filter === 'No') {
            const no = items.filter(item => item.customization === 'No');
            setCustom(no);
        }
    }
    useEffect(() => {
        fetch(`https://assignment-10-server-ruby-nu.vercel.app/myCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setitems(data);
                setCustom(data)
            })
    }, [user])

    return (
        <div className="mx-5 md:mx-10 lg:mx-20 py-24">
            <h2 className="text-center font-bold text-3xl">My Crafts</h2>
            <div className=" mt-6 w-full flex justify-end">
                <details className="mx-auto dropdown dropdown-right">
                    <summary className="m-1 btn">Customization</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleCustomFilter('Yes')}><a>Yes</a></li>
                        <li onClick={() => handleCustomFilter('No')}><a>No</a></li>
                        <li onClick={() => handleCustomFilter('All')}><a>All</a></li>
                    </ul>
                </details>
            </div>
            <div className="my-20 mx-auto gap-7 grid lg:grid-cols-2">
                {
                    custom.map((item) => <MyCraftDetails
                        key={item._id}
                        custom={custom}
                        setCustom={setCustom}
                        craft={item}></MyCraftDetails>)
                }
            </div>
        </div>
    );
};

export default MyCrafts;