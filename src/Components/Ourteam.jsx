import React from 'react';
import codeScreen from "../images/codeScreen.png"
import laptop from "../images/laptop.png"

const Ourteam = () => {
    return (
        <>
        <div className="ourteam">
            <div className="container">
                <div className="row gx-2 justify-content-center align-items-center">
                    <div className="col-lg-3 col-md-6 order-third ">
                        <div className="codeScreen">
                        <img className='w-100' src={codeScreen} alt="" />
                        <div className="purple-layer">
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 order-second " >
                    <div className="laptop">
                    <img className='w-100' src={laptop} alt="" />
                    <div className="blue-layer"></div>
                    </div>
                    </div>
                    <div className="col-lg-5 order-one">
                    <div className="team-desc">
                        <h2>فريـقـنا</h2>
                        <p>في ترست لاين، نقدم للعملاء الحلول التي تجعلهم ينمون بثقة لسنوات قادمة.</p>
                        <p>يعمل موظفونا بشغف واستقلالية وإتقان لخلق عمل نفخر به جميعًا.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Ourteam;
