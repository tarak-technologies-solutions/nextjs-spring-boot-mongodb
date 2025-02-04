"use client"
import {updateUser} from "@/rtk/slice/usersSlice";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UpdateUser = () => {
    const params = useParams();
    const userId = params.userId;
    const dispatch = useDispatch()
    const router = useRouter()
    const { loading, users } = useSelector(state => state.usersReducer)
    const [updatedUser, setUpdatedUser] = useState({
        name: "",
        surename: "",
        email: "",
        profession: ""
    })

    const handleUserChange = (e) => {
        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value
        })
    }

  

    const handleUpdateOperation = async (id,user) => {
        try {
            const response = await axios.put(`http://localhost:8080/users/update/${userId}`,user);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const handleUserSubmit = (e) => {
        e.preventDefault();
        console.log({ userId, updatedUser })
        //dispatch(updateUserApiCall({userId,updatedUser}))
        //dispatch(updateUser({ userId, updatedUser }));
        handleUpdateOperation(userId,updatedUser);
        router.push("/users");
    }

    useEffect(() => {
        if (userId) {
            const toUpdateId = users.find(user => user.id === userId)
            if (toUpdateId) {
                setUpdatedUser({
                    name: toUpdateId.name,
                    surename: toUpdateId.surename,
                    email: toUpdateId.email,
                    profession: toUpdateId.profession
                })
            }
        }
    }, [userId, users])

    return (
        <div className="container mt-3">
            {/* {JSON.stringify(updatedUser)} */}
            <div className="row">
                <div className="col animate__animated animate__zoomInDown">
                    <div className="card">
                        <div className="card-header bg-dark text-center text-white justify-content-center">
                            <h3>Update User</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleUserSubmit}>
                                <div className="justify-content-center mb-4">
                                    <p className="fw-bold">User Name</p>
                                    <input type="text" className="form-control" name="name" required
                                        onChange={handleUserChange}
                                        value={updatedUser.name || ''}
                                    />
                                </div>
                                <div className="justify-content-center mb-4">
                                    <p className="fw-bold">User Surename</p>
                                    <input type="text" className="form-control" name="surename" required
                                        onChange={handleUserChange}
                                        value={updatedUser.surename || ''}
                                    />
                                </div>
                                <div className="justify-content-center mb-4">
                                    <p className="fw-bold">User Email</p>
                                    <input type="text" className="form-control" name="email" required
                                        onChange={handleUserChange}
                                        value={updatedUser.email || ''}
                                    />
                                </div>
                                <div className="justify-content-center mb-4">
                                    <p className="fw-bold">User profession</p>
                                    <input type="text" className="form-control" name="profession" required
                                        onChange={handleUserChange}
                                        value={updatedUser.profession || ''}
                                    />
                                </div>
                                <div className="">
                                    <button className="btn btn-dark" type="submit">Sumbit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UpdateUser;