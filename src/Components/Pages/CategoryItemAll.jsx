import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryItemAll = ({ items }) => {
    const {image, category} = items;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category}</h2>
                <Link to={`/category/${category}`} className="card-actions">
                    <button className="btn btn-primary">Go To</button>
                </Link>
            </div>
        </div>
    );
};

CategoryItemAll.propTypes = {
    items: PropTypes.object
};

export default CategoryItemAll;