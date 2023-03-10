import React from 'react'
import { useState, useEffect } from 'react';

function HomePage() {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4500/details/all', { method: 'GET' }).then((result) => {
            result.json().then((resp) => {
                setDetails(resp)
            })
        })
    }, [])

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile No.</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map(item =>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                            </tr>
                        )
                    }

                </tbody>


            </table>
        </div>
    )
}

export default HomePage;

