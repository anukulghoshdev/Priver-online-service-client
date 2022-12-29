import React from 'react';
import useTitle from '../../hooks/useTitle';
import bg2 from '../../assests/banner/bg2.jpg'

const Blogs = () => {
    useTitle('Blogs');
    return (
        <div className='bg-[#F6F4F2]'>
            <div className='bg-gradient-to-r from-slate-700 to-slate-800 h-96 w-full  relative'>
                <img src={bg2} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />

                <div className='p-24'>
                    <h2 className='text-7xl text-slate-50 font-bold absolute md:left-40'> Blogs</h2>
                </div>
            </div>


            <div className='w-4/5 mx-auto bg-orange-100 p-14 m-10'>
                <h2 className='text-2xl font-bold mb-4'>Difference between SQL and NoSQL? </h2>
                <div className='text-justify text-black font-serif'>
                    SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go.
                </div>
            </div>

            <div className='w-4/5 mx-auto bg-orange-100 p-14 m-10'>
                <h2 className='text-2xl font-bold mb-4'>What is JWT, and how does it work? </h2>
                <div className='text-justify text-black font-serif'>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it. Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.
                    Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
                </div>
            </div>

            <div className='w-4/5 mx-auto bg-orange-100 p-14 m-10'>
                <h2 className='text-2xl font-bold mb-4'>What is the difference between javascript and NodeJS? </h2>
                <div className='text-justify text-black font-serif'>
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                </div>
            </div>
            
            <div className='w-4/5 mx-auto bg-orange-100 p-14 m-10'>
                <h2 className='text-2xl font-bold mb-4'>How does NodeJS handle multiple requests at the same time? </h2>
                <div className='text-justify text-black font-serif'>
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </div>
            </div>




        </div>

    );
};

export default Blogs;