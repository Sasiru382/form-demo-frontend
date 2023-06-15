import React from 'react'
import { useState } from 'react';
import axios  from 'axios';

function Form() {

    // console.log(import.meta.env);

    const [formData, setFormData] = useState({
        Name: '',
        Age: '',
        Password: '',
      });

    const [hasDataAdded, setHasDataAdded] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const jsonData = formData;
        if (!hasDataAdded) {
          let query = jsonData;
          console.log(query);
          const addData = async () => {
            try {
              const result = await axios.post(`${import.meta.env.VITE_API_URL_POST}`, query);
              console.log("request : ",result.status);
            } catch (error) {
              console.log('Error when posting:', error);
            }
          };
        addData();
        setHasDataAdded(true);
        }
        alert("Thank you for your response!")
      };

  return (
    <div className="flex h-screen bg-slate-400" >
      <div className="m-auto ">
        <form onSubmit={handleSubmit} className="w-full max-w-xs " >
            <div className="mb-4">
            <label htmlFor="Name" className="block mb-2 text-sm font-bold text-gray-700">Name:</label>
            <input
                selected
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="Name"
                value={formData.name}
                onChange={handleChange}
                placeholder='User name'
            />
            </div>
            <div className="mb-6">
            <label htmlFor="Age" className="block mb-2 text-sm font-bold text-gray-700">Age:</label>
            <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="number"
                name="Age"
                value={formData.age}
                onChange={handleChange}
            />
            </div>
            <div className="mb-6">
            <label htmlFor="Password" className="block mb-2 text-sm font-bold text-gray-700">Password:</label>
            <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password"
                name="Password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
            />
            </div>
            <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" type="submit">Submit</button>&nbsp;
            <button  className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" type="reset">Clear</button>
        </form>
        </div>
    </div>
  )
}

export default Form

