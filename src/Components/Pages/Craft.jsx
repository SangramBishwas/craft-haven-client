import PropTypes from 'prop-types';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Craft = ({ craft }) => {
    const { _id, name, image, description, category, rating } = craft
    return (
        <div className="mt-10 card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex justify-between items-center'>
                    <h3 className="text-lg font-semibold">{category}</h3>
                    <div className='flex gap-1 items-center text-lg'>
                        <FaStarHalfAlt />
                        <h3 className='text-num'>{rating}</h3>
                    </div>
                </div>
                <p>{description.slice(0, 120)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/card.json/${_id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Craft.propTypes = {
    craft: PropTypes.object
};

export default Craft;