import React from 'react';
import people from "../images/people.png"
import trending from "../images/trending-up.png"
import shield from "../images/shield.png"
import code from "../images/code.png"
import website from "../images/keyboard-open.png"

const ServicesSolutions = () => {
    return (
       <>
       <div className="servicesSolutions">
        <div className="container shadow">
            <div className="row">
                <div className="col-md-6">
                    <div className="text">
                    <h2>الخدمات والحلول</h2>
                    <p>نقدم خدمات وحلول احترافية في مجال الأمن السيبراني</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="redteam d-flex justify-content-center align-items-center">
                        <div className=" redteam-content text-center">
                        <img src={people} alt="" />
                        <h4>الفريق الأحمر</h4>
                        </div>
                        <div className='redteam-text'>
                        مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="redteam d-flex justify-content-center align-items-center">
                        <div className=" redteam-content text-center">
                        <img src={trending} alt="" />
                        <h4>تقييم الضعف</h4>
                        </div>
                        <div className='redteam-text'>
                        مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="redteam d-flex justify-content-center align-items-center">
                        <div className=" redteam-content text-center">
                        <img src={shield} alt="" />
                        <h4>المصادر الأمنيه</h4>
                        </div>
                        <div className='redteam-text'>
                        مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="redteam d-flex justify-content-center align-items-center">
                        <div className=" redteam-content text-center">
                        <img src={code} alt="" />
                        <h4>مراجعة كود المصدر</h4>
                        </div>
                        <div className='redteam-text'>
                        مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.
                        </div>
                       
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="redteam d-flex justify-content-center align-items-center">
                        <div className=" redteam-content text-center">
                        <img src={website} alt="" />
                        <h4>فحص الموقع و الجوال</h4>
                        </div>
                        <div className='redteam-text'>
                        مراجعة الكود المصدري للتطبيق في محاولة لتحديد وإزالة نقاط الضعف المتعلقة بالأمان.
                        </div>
                       
                    </div>
                </div>
            </div>
            
           
        </div>
       </div>
       <div className='empty'>
       </div>
       </>
    );
}

export default ServicesSolutions;
