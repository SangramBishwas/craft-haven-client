import PropTypes from 'prop-types';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyCraftDetails = ({ craft }) => {
    const { _id, name, image, price, rating, stock, customization } = craft
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
                    <button className="btn btn-sm btn-primary">Delete</button>
                    
                </div>
            </div>
        </div>
    );
};

MyCraftDetails.propTypes = {
    craft: PropTypes.object
};

export default MyCraftDetails;