import React from 'react';
import shield from "../images/Vector.png"
import shield_outline from "../images/shield-off-outline.png"
import code from "../images/code-outline.png"
import icon from "../images/Icon.png"
import greenCode from "../images/code-outline-green.png"
import yellowCode from "../images/code-outline-yellow.png"

const WhyTrustLine = () => {
    return (
     <>
     <div className="whytrustline">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="desc">
                <h2>لماذا ترست لاين؟</h2>
                <p>نقدم خدمات احترافية في مجال الأمن السيبراني بأذرع وطنية تسعى لرفع مستوى الأمن في جميع الكيانات والمؤسسات</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="high-level-service">
                    <div className="text ">
                    <h3>نوفر مستوى عالي من الحماية.</h3>
                    <p>تعرف أكثر على دورنا في توفير الحماية.</p>
                    </div>
                        <img src={shield} alt="" />
                    </div>
                <div className="all-programs">
                    <div className="text">
                    <img src={yellowCode} alt="" />البرامج المعلـقة 
                    </div>
                    <div className="text">
                    <img src={greenCode} alt="" />البرامـج المفعلـه 
                    </div>
                        <h3>نكون الشريك الموثوق لعملائنا.</h3>
                        <p>نقدم خدمات وحلول احترافية في مجال الأمن السيبراني. </p>
                    <div className=' all-programs-btn '>
                    <img src={code} alt="" /> جمـيع البرامـج 
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="effective-service">
                    <div className="text">
                    <h3>نقدم خدمات فعالة.</h3>
                    <p>نسعى لتقليل المخاطر على مستوى المؤسسات</p>
                    </div>
                    <div className="activated-programs">
                        <h5><img src={code} alt="" />البرامج المفعله </h5>
                        <div className='details d-flex justify-content-around align-items-center'>
                            <p>اسم البرنامج</p>
                            <p>المنصه</p>
                        </div>
                        <div className="websites">
                            <p><img src={icon} alt="" /> <span>Trustline bugbounty platform </span>  <span className='pipe'>|</span> <span>Trustline bugbounty platform </span> </p>  
                        </div>
                    </div>
                        
                </div>
                <div className="step-forward">
                    <div className="text">
                    <h3>نتقدم بخطوة على التهديدات السيبرانية ونقاط الضعف.</h3>
                    </div>
                    <img src={shield_outline} alt="" />
                </div>
            </div>
          
        </div>
    </div>
     </div>
     
     </>
    );
}

export default WhyTrustLine;
