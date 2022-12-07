import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    const singleReview = useLoaderData();

    console.log(singleReview); // {}

    const [myreview, setMyReview] = useState(singleReview)

    const navigate = useNavigate();



    const handleUpdate=(event)=>{
        const review = event.target.value;
        const reviewField = event.target.name;

        // console.log(review, reviewField);

        const newMyReview = {...myreview };

        newMyReview[reviewField]=review;

        setMyReview(newMyReview);
        console.log(newMyReview);
    }




    // update review
    const handleUpdateReview=(event)=>{
        event.preventDefault();

        fetch(`https://ass-10-server-plum.vercel.app/myreviews/${singleReview._id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(myreview)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount > 0) {
                console.log(data);
                toast.success('successfully updated');
                navigate('/myreviews')

            }
        })

    }

    useTitle('updateReview');



    const {user} = useContext(AuthContext);
    return (
        <section className="p-6 bg-slate-200dark:text-gray-50">
            <h3 className='text-xl font-bold text-slate-900 text-center'>Update review</h3>
            <form onSubmit={handleUpdateReview} className="container flex flex-col mx-auto space-y-12 ">

                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-slate-300">
                    <div className="space-y-2 col-span-full lg:col-span-1 border-2 rounded-full h-14 w-14 ">
                        <img className='h-14 w-14  rounded-full' src={user && user.photoURL} alt="" />
                        <p className="text-xs"></p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm text-black">Username</label>
                            <input name='name' id="username" defaultValue={user && user.displayName} type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 text-xs" readOnly />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm text-black" >Email</label>
                            <input name='email' id="website" defaultValue={user && user.email} type="text" placeholder="abc@gmail.com" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 text-xs" readOnly />
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm text-black">Post a review</label>
                            <textarea onChange={handleUpdate} defaultValue={singleReview.reviewPost} name='reviewPost' id="bio" placeholder="" className="pl-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 text-lg"></textarea>
                        </div>

                        {
                            user?.uid ?
                                <button className='text-sm bg-slate-900 w-20 h-6 border-2 border-slate-600 rounded-lg hover:bg-gray-800 focus:shadow-outline text-white' type='submit' >Update</button> :
                                <p className='text-xs text-orange-600 font-bold w-44'>Please login to add a review.</p>
                        }

                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdateReview;