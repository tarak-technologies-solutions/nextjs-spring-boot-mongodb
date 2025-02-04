"use client"
import { createUser } from "@/rtk/slice/usersSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CreateUser = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [user,setUser] = useState({
        name : "",
        surename: "",
        email: "",
        profession: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(user));
        router.push("/users")
    }
    return (
        <div>
            {/* <h1 className="bg-dark bg-gradient p-2 text-white">This is create user component</h1> */}
            {/* {JSON.stringify(user)} */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 animate__animated animate__jello m-auto mt-2">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                <h2>User Registration Form</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="mb-1">Name</label>
                                        <input name="name" className="form-control" type="text" required onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <label className="mb-1">Surename</label>
                                        <input name="surename" className="form-control" type="text" required onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <label className="mb-1">Email</label>
                                        <input name="email" className="form-control" type="text"  required onChange={handleChange}/>
                                    </div>
                                    <div>
                                        <label className="mb-1">Profession</label>
                                        <input name="profession" className="form-control" type="text" required onChange={handleChange}/>
                                    </div>
                                    <div className="mt-2">
                                        <button type ="submit" className="btn btn-dark btn-sm">Subimt</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CreateUser;