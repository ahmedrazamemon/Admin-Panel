// import React, { useState,useEffect } from 'react';
// import {storage} from '../Config/firebase'
// import './Drawer.css'; 
// // import { ref, list, listAll, getDownloadURL } from "firebase/storage"
// import {list,listAll, uploadBytes,ref as sRef,getDownloadURL,getStorage, ref} from 'firebase/storage';
// // import { getStorage, ref, list } from "firebase/storage";
// const Drawer = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [data, setdata] = useState([])
//   const [input, setinput] = useState("")
//   const [files,setFiles] = useState([])
//     // const db_ref = ref(db, "maincategory")
//     useEffect(() => {
//       const fetchImages = async () => {
    
//         const storageRef = ref(storage, 'files/');
//     const result = await listAll(storageRef);
  
//     const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
//   console.log(urlPromises)
//     return Promise.all(urlPromises);
    
//       }
      
//       const loadImages = async () => {
//           const urls = await fetchImages();
//           setFiles(urls);
//           // alert(urls)
//       }
//       loadImages();
//       }, []);
    
//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

  
//   const handleupload = (e) => {
//     console.log(e.target.files[0]);
//     const storageref = sRef(storage,`files/${e.target.files[0].name}`)

//     uploadBytes(storageref,e.target.files[0]).then((snapshot)=>{
//       getDownloadURL(snapshot.ref).then((url)=>{
//         console.log(url)
//       })
//       .catch((e)=>{
//         console.log(e)

//       })
//     }).catch((e)=>{
//       console.log(e)

//     })
//   }

//   return (
//     <div className={`app ${isDrawerOpen ? 'drawer-open' : ''}`}>
//       <div className="header">
//         <div className="hamburger-icon" onClick={toggleDrawer}>
//           ☰
//         </div>
//         <h1>Your App Title</h1>
//       </div>
//       <div className="drawer">
//         {/* Drawer content goes here */}
//         <ul>
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
//         </ul>
//       </div>
// {/* <img src={urls} alt="" /> */}
//       {/* <button onClic
//       k={}>Fetch</button> */}
//       <div className="main-content">
//         {/* Main content goes here */}
//         <p>Your main content goes here.</p>
//       </div>
//       <input type="file" accept='image/*' onChange={(e)=>handleupload(e)}/>

//       {

//         files.length==0?<><h5>Loading...</h5></>
// :        files.map((v,i)=>{
//           return(
//             <>
//             <b>{i+1}</b>
//             <img style={{width:200,height:200}} src={v} alt="" />
//             </>
//           )
//         })
//       }
//      </div>
//   );
// };

// export default Drawer;


