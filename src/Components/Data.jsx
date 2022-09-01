import React , {useEffect , useState } from 'react'
import axios from "axios";
import { Link} from 'react-router-dom';
import $ from "jquery"


export default function Data() {


    let [posts, setPosts] = useState([]);
    let [newPost, setNewPost] = useState({});


    async function getPosts (){
      if(localStorage.getItem("myData")){
        let myData = JSON.parse(localStorage.getItem("myData")) ;
        setPosts(myData)
      }else{
        let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(data)
        localStorage.setItem("myData" , JSON.stringify(data))
      }
    }


    
    function addPost(e){
      let myPost = {...newPost} ; 
      myPost[e.target.name] = e.target.value;
      myPost.id = posts.length + 1 ; 
      setNewPost(myPost)
    }


    function addPostAtPage(){
      if(Object.keys(newPost).length > 1){
        let myArray = [...posts] ; 
        myArray.push(newPost);
        localStorage.setItem("myData" , JSON.stringify(myArray));
        setPosts(myArray);
        $(".title").val("");
        $(".body").val("")
      }else{
        alert("You Should fill the Inputs")
      }
    }

    
    function deletePost(e){
       let myData = JSON.parse(localStorage.getItem("myData")) ;
       let newData = myData.filter((item)=>{
        return  Number(item.id)   !==  Number( e.target.attributes.postid.value)
       })
       localStorage.setItem("myData" , JSON.stringify(newData));
       setPosts(newData)
    }


    
    function updatePost(){
      if( $(".title").val() !== "" && $(".body").val() !== "" ){
         let itemId = JSON.parse(localStorage.getItem("itemId")) 
       let myData =  JSON.parse(localStorage.getItem("myData"))  ;
       let item =   myData.filter( (x)=>{
        return Number(x.id) === Number(itemId) 
      } )
         item[0].title = $(".title").val();
         item[0].body = $(".body").val();
        localStorage.setItem("myData" , JSON.stringify(myData))
        setPosts(myData)
        $(".title").val("");
        $(".body").val("");
      }else{
        alert("You Should fill the Inputs")
      }
    }

    

    function getId(e){
      let itemId = e.target.attributes.postid.value;
      localStorage.setItem("itemId" , JSON.stringify(itemId));
    }


      useEffect(() => {
        document.body.style.direction = "ltr";
        getPosts();
      }, []);



      
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
        <button type="button" onClick={updatePost}   data-bs-dismiss="modal" className="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>
    {/* ************************************************************************** */}
    <div className="posts py-3">
    <Link to={"/parentcomponent"} className='task btn' >back to home</Link>
        <div className="container">
            <div className="row g-4">
              <div className=" col-md-6 form-order">
                <div className="myForm shadow p-3">
                  <input name="title" onInput={ (event)=>{ addPost(event)}} placeholder='Add Title' className='form-control title ' type="text" />
                  <input name="body" onInput={ (event)=>{addPost(event)}} placeholder='Add description' className='form-control body ' type="text" />
                  <button onClick={addPostAtPage} id="addPostBtn"  className='btn btn-primary '>Add Post</button>
                </div>
              </div>
              <div className="   col-md-6 number-order  shadow align-self-start ">
                <div className='text-center text-black fs-4 p-4'>
                  Number Of Posts (<span className='postsNum'>{posts.length}</span>)
                </div>
              </div>
                {posts.map((post , index)=>{
                    return <React.Fragment key={index}>
                    <div className="col-lg-4 col-md-6 text-center">
                    <div className="post-item shadow p-3">
                    <Link to={`/singlepage/${post.id}`}>
                        <div  className="clicked-item" name="eslam" postid= {post.id} >
                            <h4 className='text-capitalize title-text'>{ post.title}</h4>
                            <p className='body-text'>{post.body}</p>
                        </div>
                    </Link>
                    <div  className='buttons'>
                    <button onClick={deletePost} postid={post.id} className='btn me-4 btn-danger'>Delete</button>
                    <button data-bs-toggle="modal" postid={post.id} onClick={getId}   data-bs-target="#staticBackdrop"  className='btn updateBtn btn-info'>Update</button>
                    </div>
                    </div>
                    </div>
                    </React.Fragment>
                })}
            </div>
        </div>
    </div>
    </>
  )
}
