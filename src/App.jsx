import { useEffect, useState } from "react"
import axios from 'axios'
import Home from './pages/Home.jsx'

function App() {

  // const [data,setData] = useState([]); 
  // const [color,setColor] = useState("Red");
  // const [hasDataAdded, setHasDataAdded] = useState(false);

  // //get data
  // useEffect(()=>{
  //   const featchData = async () =>{
  //     try{
  //       const response = await axios.get(`http://localhost:3000/`);
  //       setData(response.data); 
  //       console.log('data retrive succesfully :',response);
  //     }catch(error){
  //       console.log('Error while retriving the data ',error);
  //     }
  //   }
  //   featchData()
  //   },[]);
  
  //post data
  // useEffect(() => {
  //   if (!hasDataAdded) {
  //     let query = {
  //       "Name" :"Amila",
  //       "Age" :22,
  //       "Password":"12345678"
  //     };
  
  //     const addData = async () => {
  //       try {
  //         const result = await axios.post('http://localhost:3000/insert', query);
  //         console.log(result);
  //       } catch (error) {
  //         console.log('Error when posting:', error);
  //       }
  //     };
  
  //     addData();
  //     setHasDataAdded(true);
  //   }
  // }, [hasDataAdded]);

  // function colorChanger(){
  //   if(color == "Red"){
  //     setColor("Blue");
  //   }else{
  //     setColor("Red");
  //   }
  // }


  return (
    <>
      <Home/>
      {/* <div>Hello world colour with {color}!</div>
      <button onClick={() => colorChanger()}>Click me ! </button>
      <div>
      {data.map((item) => (
        <p key={item._id}>{item.Name}</p>
      ))}
      </div> */}
    </>
  )
}

export default App
