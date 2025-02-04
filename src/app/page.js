import Image from "next/image";
import logo from './../../public/Goa2.jpg'
export default function Home() {
  return (
    <div className="container">
      <div className="row mt-3 mb-3 d-flex align-items-center justify-content-center animate__animated animate__jello">
        <div className="col">
          <Image
            src={logo}
            alt="Tharak Image"
            width={400}
            height={300}
            className="img-fluid"
          />
        </div>
        <div className="col ">
          <h1 className="fw-bold fst-italic text-shadow">The Tarak Nadh Battula</h1>
          <h4 className=" text-danger text-end fw-bold fst-italic text-shadow">Java Full Stack and DevOps Engineer</h4>
        </div>
      </div>
    </div>
  );
}
