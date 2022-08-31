import React from 'react';
import news1 from "../images/news1.png"
import news2 from "../images/news2.png"
import news3 from "../images/news3.png"

const News = () => {
    return (
       <>
       <div className="news">
        <div className="container">
            <div className="row gy-4">
                <div className="col-md-12">
                    <h2>الأخبار</h2>
                </div>
                <div className="col-md-12">
                    <div className="news-item">
                        <div className="news-items-img">
                            <img src={news1} alt="" />
                            <div className="blue-layer"></div>
                        </div>
                        <div className="news-item-text">
                            <h4>الأمن السيبراني في عام 2022 - نظرة جديدة على بعض الإحصائيات المقلقة للغاية</h4>
                            <p>شهد العامان الماضيان تحولًا سريعًا في العمل إلى المكاتب البعيدة والمختلطة. تظهر الإحصاءات</p>
                            <span> اقرأ المقال ←</span>
                    </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="news-item">
                        <div className="news-items-img">
                            <img src={news2} alt="" />
                            <div className="blue-layer"></div>
                        </div>
                        <div className="news-item-text">
                            <h4>لماذا يعتبر أمان التطبيق مهمًا للأعمال؟</h4>
                            <p>تطبيقات البرمجيات هي مكونات أساسية لنجاح المنظمة. لسوء الحظ ، بينما التطبيق</p>
                            <span> اقرأ المقال ←</span>
                    </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="news-item">
                        <div className="news-items-img">
                            <img src={news3} alt="" />
                            <div className="blue-layer"></div>
                        </div>
                        <div className="news-item-text">
                            <h4>حشد الأمن - هل هو بديل للاختراق؟</h4>
                            <p>نمت شعبية برامج الأمن الجماعي إلى الحد الذي وصلت إليه بعض الشركات</p>
                            <span> اقرأ المقال ←</span>
                    </div>
                    </div>
                </div>
            </div>
       </div>
       </div>
       </>
    );
}

export default News;
