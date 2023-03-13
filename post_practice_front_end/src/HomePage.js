import React from 'react'
import { useState, useEffect } from 'react';

function HomePage() {
    const [details, setDetails] = useState();

    const fetchData = () => {
        fetch("http://localhost:4500/details/all")
        .then(res => res.json())
        .then(res => setDetails(res.data))
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile No.</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        details && details.length && details.map(item =>{
                            return (
                                <tr key={item._id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                            </tr>
                            )
                        })
                    }


                </tbody>


            </table>
        </div>
    )
}

export default HomePage;

