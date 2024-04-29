import PropTypes from 'prop-types';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCraftDetails = ({ craft }) => {
    const { _id, name, image, price, rating, stock, customization } = craft;
    const handleDelete = (id) => {
        console.log('delete this craft', id);
        fetch(`http://localhost:5000/craft/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((data) => {
            console.log(data)
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl">
            <figure className='lg:w-1/2'><img className='lg:h-full ' src={image} alt="Movie" /></figure>
            <div className="lg:w-1/2 space-y-4 px-5 lg:px-10">
                <h2 className="card-title">{name}</h2>
                <div className="flex justify-between lg:gap-3 lg:flex-col ">
                    <div>customization: <span className="font-semibold">{customization}</span></div>
                    <div>status: <span className="font-semibold">{stock}</span></div>
                </div>
                <div className="flex items-center justify-between">
                    <div>price: <span className="font-semibold text-num">{price}Tk</span></div>
                    <div className='flex gap-1 items-center text-lg'>
                        <FaStarHalfAlt />
                        <h3 className='text-num'>{rating}</h3>
                    </div>
                </div>
                <div className="flex pb-2 justify-between">
                    <button className="btn btn-sm btn-primary">
                        <Link to={`/update/${_id}`}>Update</Link>
                    </button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-600 hover:bg-red-700 text-white">Delete</button>

                </div>
            </div>
        </div>
    );
};

MyCraftDetails.propTypes = {
    craft: PropTypes.object
};

export default MyCraftDetails;