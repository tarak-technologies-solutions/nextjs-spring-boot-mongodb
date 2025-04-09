"use client"
import { deleteAllUsersApi, deleteUserById, fetchUsersApi } from "@/rtk/slice/usersSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DeleteAllUsers = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { loading, users } = useSelector(state => state.usersReducer)
    const deleteAllUsers = () => {
        dispatch(deleteAllUsersApi())
        router.push("/")
    }

    const handleSingleUserDeleteById = (userId) => {
        dispatch(deleteUserById(userId))
        router.push("/")
    }

    useEffect(() => {
        dispatch(fetchUsersApi())
    }, [dispatch])
    return (
        <div>
            <div className="container mt-3">

                {
                    !loading ? <div>
                        {
                            users.length != 0 ? <div>
                                <button className="btn btn-dark btn-lg animate__animated animate__jello" onClick={deleteAllUsers}>Delete All</button>
                                <div className="row mt-3">
                                    {
                                        users.map((user) => {
                                            return (
                                                <div key={user.id} className="col-md-4 justify-content-between d-flex mb-3 animate__animated animate__jello">
                                                    <div className="card w-100">
                                                        <div className="card-header ">
                                                            <img src={user.avatar}
                                                                className="card-img-top img-fluid"
                                                                alt="Card image cap"
                                                                style={{ height: '200px', objectFit: 'cover' }}
                                                            />
                                                        </div>
                                                        <div className="card-body">
                                                            <p className="fw-bold">User Id : {user.id}</p>
                                                            <p className="fw-bold">User Name : {user.name}</p>
                                                            <p className="fw-bold">User Surename : {user.surename}</p>
                                                            <p className="fw-bold">User Email : {user.email}</p>
                                                            <p className="fw-bold">User Profession : {user.profession}</p>
                                                            <p><button className="btn btn-dark" onClick={() => handleSingleUserDeleteById(user.id)}>Delete</button></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div> : <div className="text-center animate__animated animate__jello">
                                <h1 className="fw-bold text-danger">.....There are no users.....</h1>
                            </div>
                        }
                    </div> : <div>
                        <h1 className="fw-bold">Loading...</h1>
                    </div>
                }
            </div>
        </div>
    );
}
export default DeleteAllUsers;