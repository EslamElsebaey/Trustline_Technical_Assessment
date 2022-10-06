
import React , {useEffect  } from 'react'
import marsad_logo from "../images/marsad-logo.png"
import monshat_logo from "../images/monshat-logo.png"
import zid_logo from "../images/zid-logo.png";
import axios from "axios";







const Clients = () => {

    async function getPosts (){
          let data = await axios.get("https://dummyjson.com/posts");
          console.log(data.data.posts)
        }

        useEffect(() => {

          getPosts();
        }, []);
     
    return (
       <>
       <div className="clients">
        <div className="container">
            <div className="row gy-4 position-relative">
                <div className="col-md-12">
                    <div className="clients-text">
                    <h2>عمـلاؤنـا</h2>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 justify-content-center align-items-center d-flex">
                    <div className="client-item">
                        <img src={monshat_logo} alt="image1" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 justify-content-center align-items-center d-flex">
                    <div className="client-item">
                        <img src={zid_logo} alt="image2" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 justify-content-center align-items-center d-flex">
                    <div className="client-item">
                        <img className='marsad' src={marsad_logo} alt="image3" />
                    </div>
                </div>
            </div>
        </div>
       </div>
       </>
    );
}

export default Clients;
