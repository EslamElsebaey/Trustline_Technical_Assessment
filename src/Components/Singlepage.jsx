import React from 'react'
import {useParams} from "react-router-dom"
import  axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery"

export default function Singlepage() {
  
  let {itemId} = useParams();
  let [itemDetails , setitemDetails] = useState([])

  
  async function getPostDetails(itemId){
    if(localStorage.getItem("myData")){
      let myData = JSON.parse(localStorage.getItem("myData")) ;
      let item =   myData.filter( (x)=>{
        return Number(x.id) === Number(itemId) 
      } )
     setitemDetails(item)
    }else{
      let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/"+itemId);
      setitemDetails(data)
    }
  }

  function updatePost(){
    if($(".title").val() !== "" && $(".body").val() !== ""){
      $(".title-text").html($(".title").val())
      $(".body-text").html($(".body").val())
       let myData =  JSON.parse(localStorage.getItem("myData"))  ;
       let item =   myData.filter( (x)=>{
        return Number(x.id) === Number(itemId) 
      } )
      if(item.title === undefined || item.title === ""){
        item[0].title = $(".title").val();
        item[0].body = $(".body").val();
        console.log(item);
        localStorage.setItem("myData" , JSON.stringify(myData));
        $(".title").val("");
        $(".body").val("");
      }else{
        item.title = $(".title").val();
        item.body = $(".body").val();
        console.log(item);
        localStorage.setItem("myData" , JSON.stringify(myData));
        $(".title").val("");
        $(".body").val("");
      }
    }else{
      alert("You Shoild fill the Inputs")
    }
   
    
  }

  useEffect(() => {
    document.body.style.direction = "ltr";
    getPostDetails( Number(itemId))
  }, [itemId]);
  


  
    return (
    <>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Update Post</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <input name="title"  placeholder='Add Title' className='form-control mb-4 title  ' type="text" />
          <input name="body"  placeholder='Add description' className='form-control body  ' type="text" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={updatePost} data-bs-dismiss="modal" className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>
  


{/* ***************************************************************************************************************** */}
    <div className="itemDetails">
    <Link to={"/data"} className='task btn' >back to posts</Link>
        <div className="container">
            <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="item text-center bg-white shadow p-3">
                          {itemDetails.length > 0 ? <> <h4 className='text-capitalize title-text'>{itemDetails[0].title}</h4>
                          <p className='body-text'>{itemDetails[0].body}</p>
                          <div className='buttons'>
                          <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='btn   btn-info'>Update</button>
                           </div></> 
                           : <><h4 className='text-capitalize title-text'>{itemDetails.title}</h4>
                               <p className='body-text'>{itemDetails.body}</p>
                               <div className='buttons'>
                                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop"  className='btn   btn-info'>Update</button>
                               </div></> }
                        </div>
                    </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
