"use client"

import { fetchUsersApi } from "@/rtk/slice/usersSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RegisteredUsers = () => {
    const dispatch = useDispatch();
    const { loading, users } = useSelector(state => state.usersReducer)
    useEffect(() => {
        dispatch(fetchUsersApi())
    }, [dispatch])
    return (
        <div>
            {
                loading ? <div>
                    <h3>Loading...</h3>
                </div> : <div className="container mt-3">
                    {
                        users.length !=0 ? <table className="table table-striped table-bordered animate__animated animate__jello">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>SURENAME</th>
                                <th>EMAIL</th>
                                <th>PROFESSION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            {<td><Link href={`/users/${user.id}`}>{user.id}</Link></td>}
                                            <td className="fw-bold">{user.name}</td>
                                            <td>{user.surename}</td>
                                            <td>{user.email}</td>
                                            <td>{user.profession}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table> :
                    <div className="container animate__animated animate__jackInTheBox">
                        <h1 className="text-center fw-bold text-danger ">.....There are no users.....</h1>
                    </div>
                    }
                </div>
            }
        </div>
    );
}
export default RegisteredUsers;