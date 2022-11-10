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
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">

                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">Service Name</th>
                            <th className="p-3">Client</th>
                            <th className="p-3">Issued</th>
                            <th className="p-3">Due</th>
                            <th className="p-3 text-right">Amount</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                            <td className="p-3">
                                <p>97412378923</p>
                            </td>
                            <td className="p-3">
                                <p>Microsoft Corporation</p>
                            </td>
                            <td className="p-3">
                                <p>14 Jan 2022</p>
                                <p className="dark:text-gray-400">Friday</p>
                            </td>
                            <td className="p-3">
                                <p>01 Feb 2022</p>
                                <p className="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td className="p-3 text-right">
                                <p>$15,792</p>
                            </td>
                            <td className="p-3 text-right">
                                <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    )
                                
};
export default MyReviews;