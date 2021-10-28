import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './RegisterVolunteer.css';

const RegisterVolunteer = () => {
   const [singleEvent, setSingleEvent] = useState({})
   const { id } = useParams();
   const { user } = useAuth();
   const { register, handleSubmit, reset } = useForm();

   useEffect(() => {
      const url = `http://localhost:7000/events/${id}`
      fetch(url)
         .then(res => res.json())
         .then(data => {
            setSingleEvent(data);
         })
   }, [id]);

   const onSubmit = data => {
      fetch('http://localhost:7000/userBook', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(data)
      })
         .then(res => res.json())
         .then(data => {
            // console.log(data);
            if(singleEvent){
               if (data.acknowledged) {
                  alert('Submitted successfully')
                  reset();
               }
            }
         })
      console.log(data)
   };

   return (
      <>
         <div className="logo text-center">
            <img src={logo} alt="" />
         </div>
         <div className="volunteerRegister_section">
            <div className="container">
               <div className="registerVolunteer_form">
                  <h4 className="mb-4">Register as a Volunteer</h4>
                  {
                     singleEvent && <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />
                        <input defaultValue={user.email} {...register("email")} placeholder="Email" />
                        <input type="date" {...register("date")} placeholder="Date" />
                        <input defaultValue={singleEvent?.imgUrl} {...register("description")} placeholder="Description" />
                        <input defaultValue={singleEvent?.title} {...register("booksLibrary")}
                           placeholder="Organize books at the library." />
                        <input type="submit" />
                     </form>
                  }
               </div>
            </div>
         </div>
         <div className="text-center">
            <Link to="/home"><button className="btn btn-success">Back To Home</button></Link>
         </div>
      </>
   );
};

export default RegisterVolunteer;