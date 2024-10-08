import { useState } from "react";
import useAuth from "../../Custom Hook/useAuth";
import Swal from 'sweetalert2'

const AddItem = () => {
    const { user } = useAuth()
    const [custom, setCustom] = useState('');
    const [status, setStatus] = useState('');

    console.log(custom, status)

    const handleCustomization = (e) => {
        setCustom(e.target.value)
    }
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }

    const handleAddCraft = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        const artist = form.get('artist');
        const email = user?.email;
        const name = form.get('name');
        const category = form.get('category');
        const image = form.get('image');
        const description = form.get('description');
        const price = form.get('price');
        const time = form.get('time');
        const rating = form.get('rating');
        const customization = custom;
        const stock = status;

        const newCraft = { artist, email, name, category, image, description, price, time, rating, customization, stock };
        console.log(newCraft);

        fetch('https://assignment-10-server-ruby-nu.vercel.app/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })

    }

    return (
        <div className="mx-5 md:mx-10 lg:mx-20 py-24">
            <h2 className="text-center font-bold text-3xl py-5">Add Your Craft</h2>
            <form onSubmit={handleAddCraft} className="px-5 md:px-10 my-5">
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
                        <input type="text" name="rating" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-5 flex-col md:flex-row w-full py-5">
                    <div className="flex gap-5 items-center md:justify-center md:w-1/2">
                        <label className="label mr-5">
                            <span className="font-bold text-lg">Customization</span>
                        </label>
                        <div className="flex gap-2">
                            <input type="radio" value="Yes" onChange={handleCustomization} name="customization" className="radio" />
                            <label>Yes</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" value="No" onChange={handleCustomization} name="customization" className="radio" />
                            <label>No</label>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center md:justify-center md:w-1/2">
                        <label className="label mr-5">
                            <span className="font-bold text-lg">Status</span>
                        </label>
                        <div className="flex gap-2">
                            <input type="radio" value="In Stock" onChange={handleStatus} name="status" className="radio" />
                            <label>In Stock</label>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" value="Made To Order" onChange={handleStatus} name="status" className="radio" />
                            <label>Made To Order</label>
                        </div>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-secondary text-lg">Add Craft</button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;