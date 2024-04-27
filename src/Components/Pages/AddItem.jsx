import useAuth from "../../Custom Hook/useAuth";

const AddItem = () => {
    const { user } = useAuth()
    console.log(user)
    return (
        <div className="mx-5 md:mx-10 lg:mx-20 py-24">
            <h2 className="text-center font-bold text-3xl py-5">Add Your Craft</h2>
            <form className="px-5 md:px-10 my-5">
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-semibold">Artist/Provider</span>
                        </label>
                        <input type="text" name="artist" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-bold">Email</span>
                        </label>
                        <input type="text" name="email" className="input input-bordered" defaultValue={user?.email} disabled />
                    </div>

                </div>
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-semibold">Craft Name</span>
                        </label>
                        <input type="text" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-bold">Category</span>
                        </label>
                        <input type="text" name="category" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-semibold">Photo Url</span>
                        </label>
                        <input type="text" name="image" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="font-bold">Description</span>
                        </label>
                        <input type="text" name="description" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-semibold">Price</span>
                        </label>
                        <input type="number" name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold">Duration</span>
                        </label>
                        <input type="number" name="time" className="input input-bordered" required />
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold">Rating</span>
                        </label>
                        <input type="number" name="rating" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row w-full py-5">
                    <div className="flex gap-5 items-center md:justify-center md:w-1/2">
                        <label className="label mr-5">
                            <span className="font-bold">Customization</span>
                        </label>
                        <div className="flex gap-2">
                            <input type="radio" value="Yes" name="customization" className="radio" />
                            <label>Yes</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" value="No" name="customization" className="radio" />
                            <label>No</label>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center md:justify-center md:w-1/2">
                        <label className="label mr-5">
                            <span className="font-bold">Status</span>
                        </label>
                        <div className="flex gap-2">
                            <input type="radio" value="In Stock" name="status" className="radio" />
                            <label>In Stock</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" value="Made To Order" name="status" className="radio" />
                            <label>Made To Order</label>
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Craft</button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;