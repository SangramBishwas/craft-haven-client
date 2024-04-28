import { useEffect, useState } from "react";
import useAuth from "../../Custom Hook/useAuth";
import MyCraftDetails from "./MyCraftDetails";

const MyCrafts = () => {
    const { user } = useAuth();
    const [items, setitems] = useState([])
    useEffect(()=> {
        fetch(`http://localhost:5000/myCraft/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setitems(data)
        })
    }, [user])

    return (
        <div className="mx-5 md:mx-10 lg:mx-20 py-24">
                    <div className="my-5 mx-auto gap-7 grid lg:grid-cols-2">
                        {
                            items.map((item) => <MyCraftDetails
                                key={item._id}
                                craft={item}></MyCraftDetails>)
                        }
                    </div>
        </div>
    );
};

export default MyCrafts;