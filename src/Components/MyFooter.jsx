import React from 'react'
import logo from "../images/logo.png"

export default function MyFooter() {
  return (
   <>
   <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="logo">
            <img src={logo} alt="" />
            <p className='address'>واجهة الرياض -منطقة الأعمال, طريق المطار, الرياض 11564</p>
            <p>Trustline - جميع الحقوق محفوظة 2022</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="links">
           <ul>
            <li>للشركات</li>
            <li>للباحثين</li>
            <li>بيانات التواصل</li>
            <li>تواصل معنا</li>
           </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="social">
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
   </footer>
   
   
   </>
  )
}
