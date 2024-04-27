import { Link, useLoaderData } from "react-router-dom";


const AllItem = () => {
    const crafts = useLoaderData();
    return (
        <div className="mx-5 md:mx-10 lg:mx-20 py-24">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Artist</th>
                            <th>Ratings</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            crafts.map((craft) => <tr key={craft._id} className="hover:bg-base-200 cursor-pointer">
                                <td>{craft.name}</td>
                                <td>{craft.category}</td>
                                <td>{craft.artist}</td>
                                <td>{craft.rating}</td>
                                <td className="hover:underline"><Link to={`/card.json/${craft._id}`}>View Details</Link></td>
                            </tr>

                            )
                        }

                        {/* row 2
                        <tr className="hover:bg-base-200 cursor-pointer">
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr> */}
                        {/* row 3 
                        <tr className="hover:bg-base-200 cursor-pointer">
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllItem;