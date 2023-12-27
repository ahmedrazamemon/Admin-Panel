import React, { useState,useEffect } from "react"
import { ref,set,push,get } from "firebase/database"
import { db } from "../Config/firebase"
import { Link } from "react-router-dom"
function Form(){

  const [input, setinput] = useState("")
  const [data,setdata] = useState([])
  const db_ref = ref(db, "data")  
  const addcategory = async () => {
    console.log(input)
    try {
        let subcat = {
            categoryname: input
        }
        const key = push(db_ref)
   await  set((db_ref,key),subcat)
//    .then(() => {
//             alert("sub category has been added..")
//         }).catch((error) => {
//             alert(error)
//         })
    }
 catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        const db_ref = ref(db, "data")
        get(db_ref).then((snap) => {
            console.log(snap.val())
            setdata(Object.values(snap.val()))
        })


    }, [])

 
return(
  <>

<h1>
Add Data
</h1>
<input type="text" onChange={(e)=>setinput(e.target.value)} placeholder="Enter Name..." />
<button onClick={addcategory}>Set Data</button>
{/* <h2 va></h2> */}
{
  data.length==0?<><h5>Loading...</h5></>:
  data.map((v,i)=>{

    return(
      <>
      <div>
        <Link to={"/drawer"}>
        <h5>
          Post
        </h5>
        </Link>
        <b>{i+1}){v.categoryname}</b>
        {/* <h2></h2> */}
      </div>
      </>
    )
  })
}
  </>
)
}export default Form;
