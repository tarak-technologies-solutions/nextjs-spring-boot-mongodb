const Login = () => {
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 animate__animated animate__jello m-auto mt-2">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div>
                                <label htmlFor="username" className="text-dark">Username</label>
                                <input type="text" className="form-control"/>
                                </div>
                                <div>
                                <label htmlFor="password" className="text-dark">Password</label>
                                <input type="password" className="form-control"/>
                                </div>
                                <div>
                                    <button className="btn btn-dark mt-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;