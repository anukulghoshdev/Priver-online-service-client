import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyReviews = () => {
    const [myreviews, setmyreviews] = useState([]);
    const { user, userlogOut } = useContext(AuthContext);



    useEffect(() => {
        fetch(`https://ass-10-server-plum.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('priverToken')}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    return userlogOut()
                }
                return res.json()
            })
            .then(data => setmyreviews(data))
    }, [user?.email, userlogOut])



    const handleDelete = (id) => {
        const confirm = window.confirm('do you want to delete this review?')
        if (confirm) {
            fetch(`https://ass-10-server-plum.vercel.app/myreviews/${id}`, {
                method: 'DELETE'


            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Review Deleted Successfully')
                        const remainningMyReview = myreviews.filter(myreview => myreview._id !== id)
                        setmyreviews(remainningMyReview)
                    }
                    console.log(data)
                })
        }
    }






    return (
        <div className='border'>


            {
                (myreviews.length===0) ? <h3 className='text-3xl font-bold text-center py-52'>No Reviews added</h3> :
                <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 my-16 ">
                <h2 className="mb-4 text-2xl leading-tight text-black font-bold text-center">My Reviews {myreviews.length}</h2>

                <div className="overflow-x-auto ">

                    <table className="min-w-full text-xs ">

                        <thead className="bg-slate-500">
                            <tr className="text-left">
                                <th className="p-3 text-xl">Service Name</th>
                                <th className="p-3 text-xl">Your Review</th>
                                <th className="p-3 text-xl">Issued</th>
                                <th className="p-3 text-xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>



                            {
                                myreviews?.map(myreview =>
                                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-300">
                                        <td className="p-3">
                                            <p className='text-black font-medium text-base'>{myreview.serviceName}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className='text-black font-medium text-base'>{myreview.reviewPost}</p>
                                        </td>



                                        <td className="p-3 ">
                                            <p className='text-black font-medium text-base'>{myreview.review_time}</p>
                                        </td>

                                        <td className="p-3 ">
                                            <Link to={`/updateReview/${myreview._id}`}>
                                                <button className='mr-2 bg-orange-400 text-black px-3 py-1 font-semibold rounded-xl'>Edit</button>
                                            </Link>

                                            <button onClick={() => { handleDelete(myreview._id) }} className='bg-red-400 text-black px-3 py-1 font-semibold rounded-xl'>Delete</button>



                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            }


        </div>


    )

};
export default MyReviews;