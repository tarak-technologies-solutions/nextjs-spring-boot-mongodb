"use client"

import { deleteUserById, fetchUserByIdApi, updateUserById } from "@/rtk/slice/usersSlice";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserDetails() {
    const params = useParams();
    const router = useRouter()
    const [isEdit, setIsEdit] = useState(false)
    const [updateUser, setUpdateUser] = useState({
        name: "",
        surename: "",
        email: "",
        profession: ""
    })
    const userId = params.userId;
    const dispatch = useDispatch()
    const { loading, user } = useSelector(state => state.usersReducer)
    

    const handleDeleteUserById = () => {
        dispatch(deleteUserById(user.id))
        router.push("/users")
    }
    const handleIsEditFunction = () => {
        setIsEdit(true)
    }

    const handleUpdateUser = (e) => {
        setUpdateUser({
            ...updateUser,
            [e.target.name]: e.target.value
        })
    }
    const handleUpdateFormSubmit = (e) => {
        e.preventDefault();
        //console.log(userId, updateUser);
        dispatch(updateUserById(userId,updateUser))
        router.push("/users")
    }

    // const updateObject = () => {
    //     setUpdateUser({
    //         ...updateUser,
    //         name: user.name,
    //         surename : user.surename,
    //         email : user.email,
    //         profession : user.profession
    //     })
    // }

    useEffect(() => {
        dispatch(fetchUserByIdApi(userId))
        //updateObject()
    }, [])

    return (
        <div className="container mt-3">
            {/* {JSON.stringify(updateUser)} */}
            {
                !isEdit ? <div>
                    {
                        !loading ? <div>
                            {
                                user != null && <div className="row text-center">
                                    <div className="col animate__animated animate__zoomInDown">
                                        <div className="card">
                                            <div className="card-header bg-dark">
                                                <h1 className="text-white fw-bold">User's Details</h1>
                                            </div>
                                            <div className="card-body">
                                                <h1><p className="fw-bold">{user.id}</p></h1>
                                                <h1><p className="fw-bold">{user.name}</p></h1>
                                                <h1><p className="fw-bold">{user.surename}</p></h1>
                                                <h1><p className="fw-bold">{user.email}</p></h1>
                                                <h1><p className="fw-bold">{user.profession}</p></h1>
                                                <h1><p className="fw-bold ">
                                                    {/* <button className="btn btn-dark mx-2" onClick={handleIsEditFunction}>Edit</button> */}
                                                    <Link href= {`/users/update/${userId}`} className="btn btn-dark mx-2">Edit</Link>
                                                    <button className="btn btn-dark" onClick={handleDeleteUserById}>Delete</button>
                                                </p></h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div> : <div>
                            <h1 className="fw-bold">Loading...</h1>
                        </div>
                    }
                </div> : <div>
                    <div className="row">
                        <div className="col animate__animated animate__zoomInDown">
                            <div className="card">
                                <div className="card-header bg-dark">
                                    <h3 className="text-white fw-bold text-center">Update The User</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleUpdateFormSubmit}>
                                        <div className="mb-3">
                                            <label>User Name</label>
                                            <input className="form-control" type="text" required
                                                name="name"
                                                onChange={handleUpdateUser}
                                                
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>User Surename</label>
                                            <input className="form-control" type="text" required
                                                name="surename"
                                                onChange={handleUpdateUser}
                                                
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>User Email</label>
                                            <input className="form-control" type="text" required
                                                name="email"
                                                onChange={handleUpdateUser}
                                               
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label>User Profession</label>
                                            <input className="form-control" type="text" required
                                                name="profession"
                                                onChange={handleUpdateUser}
                                               
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <button className="btn btn-dark form-control" type="submit" >Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}