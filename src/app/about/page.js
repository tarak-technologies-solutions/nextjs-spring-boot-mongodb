import Image from "next/image";
import Logo from "./../../../public/Tharak_Bengalure.jpg"

const About = () => {
    return (
        <div>
            <div className="container">
           {/* // mt-3 animate__animated animate__jello */}
                <div className="row mt-3 mb-3 d-flex align-items-center justify-content-center animate__animated animate__jello">
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <Image
                                    src={Logo}
                                    width={500}
                                    height={500}
                                    className="img-fluid"
                                    alt="Tharak Image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                    <h1 className="fw-bold text-danger fst-italic text-shadow"><p>Battula Venkata Tharaka Nadh</p></h1>
                    <p className="fw-bold text-danger fst-italic">Mobile : +91 9160925178</p>
                    <p className="fw-bold text-danger fst-italic">Contact me for any query</p>
                </div>
                </div>
                
            </div>
        </div>
    );
}
export default About;