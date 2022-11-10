import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyReviews = () => {
    const [myreviews, setmyreviews] = useState([]);
    const { user, userlogOut } = useContext(AuthContext);



    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setmyreviews(data))
    }, [user?.email])


    //reviewPost
    // service_id
    // 


    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 my-16">
            <h2 className="mb-4 text-2xl leading-tight text-black font-bold text-center">My Reviews</h2>
            <div className="overflow-x-auto">
                
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
                            myreviews.map(myreview =>
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
                                        <button className='mr-2 bg-orange-400 text-black px-3 py-1 font-semibold rounded-xl'>Edit</button>
                                        <button className='bg-red-400 text-black px-3 py-1 font-semibold rounded-xl'>Delete</button>
                                    </td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )

};
export default MyReviews;