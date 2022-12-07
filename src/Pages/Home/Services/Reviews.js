import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Reviews = ({ service_id, serviceName, serviceImage_url }) => {
    const { user } = useContext(AuthContext)
    console.log(service_id, serviceName, serviceImage_url);
    const [reviews, setReviews] = useState([]);


    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


    const handlePostReview = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const reviewPost = form.review.value;



        const review = {
            reviewPost,
            service_id,
            username: name,
            serviceName,
            serviceImage_url,
            user_Email: email,
            userProfilePic: user?.photoURL,
            review_time: time
        }

        fetch('https://ass-10-server-plum.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your review posted successfully')
                    form.reset();
                }
            })
            .catch(error => console.log(error))
    }


    useEffect(() => {
        fetch(`https://ass-10-server-plum.vercel.app/reviews?service_id=${service_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews, service_id])


    return (
        <div className='flex flex-col'>
            {
                (!reviews) ? <h2 className='text-3xl'>No reviews yet</h2> :
                    <div className='py-5'>
                        <h2 className='text-xl text-center'>{reviews.length === 0 ? <p className='text-xl' >no reviews yet</p> : <p>Total reviews: {reviews.length}</p>}</h2>
                        {
                            reviews.map(review =>
                                <div className="flex flex-col max-w-full m-6 gap-2 p-6 rounded-md shadow-md bg-slate-300 dark:text-gray-100">
                                    <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide ">
                                        <img className='h-10 w-10  rounded-full ' src={review.userProfilePic} alt="" />
                                        <h2 className='text-lg font-bold text-black ml-2'>{review.username}</h2>
                                    </h2>
                                    <p className=" text-base text-slate-900 font-semibold ml-16">{review.reviewPost}</p>

                                </div>

                            )
                        }
                    </div>


            }




            <section className="p-6 bg-slate-200dark:text-gray-50">
                <h3 className='text-xl font-bold text-slate-900'>Post a review</h3>
                <form onSubmit={handlePostReview} className="container flex flex-col mx-auto space-y-12 ">

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
                                <textarea name='review' id="bio" placeholder="" className="pl-1 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 text-lg"></textarea>
                            </div>

                            {
                                user?.uid ?
                                    <button className='text-sm bg-slate-900 w-20 h-6 border-2 border-slate-600 rounded-lg hover:bg-gray-800 focus:shadow-outline' type='submit' >Post</button> :
                                    <p className='text-xs text-orange-600 font-bold w-44'>Please login to add a review.
                                        <Link to='/login'>
                                            <button className='text-yellow-50 bg-blue-600 px-2 py-1 rounded-xl'>login now</button>
                                        </Link>
                                    </p>
                            }

                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Reviews;