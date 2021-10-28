import { faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import React from 'react';
import logo from '../../images/logo.png';
import './AddEvent.css';

const AddEvent = () => {
   const { register, handleSubmit,reset } = useForm();
   const onSubmit = data => {
      console.log(data)
      fetch('http://localhost:7000/events',{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
         if(data.acknowledged){
            alert('Event added successfully');
            reset();
         }
         // console.log(data);
      })
   };
   return (
      <>
         <div className="add_event_section">
            <div className="container">
               <div className="add_event_wrapper">
                  <div className="row">
                     <div className="col-lg-4 add_event_left_side_wrapper">
                        <div className="add_event_left_side">
                           <div className="logo">
                              <img src={logo} alt="" />
                           </div>
                           <div className="addEvent_left_side_text">
                              <h5> <FontAwesomeIcon className="icon" icon={faUsers} /> Volunteer register list</h5>
                              <p><FontAwesomeIcon className="icon" icon={faPlus} /> Add event</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-8 add_event_right_side_wrapper">
                        <div className="add_event_right_side">
                           <h4>Add Event</h4>
                           <div className="react_hook_form">
                              <form onSubmit={handleSubmit(onSubmit)}>
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <label className="mb-3" htmlFor="">Event Title</label>
                                       <input placeholder="Event title" {...register("title")} />
                                    </div>
                                    <div className="col-lg-6">
                                       <label className="mb-3" htmlFor="">Event Date</label>
                                       <input type="date" {...register("date")} />
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <label className="mb-3" htmlFor="">Description</label>
                                       <textarea placeholder="Enter designation" {...register("description")} />
                                    </div>
                                    <div className="col-lg-6">
                                       <label className="mb-3" htmlFor="">Image url</label>
                                       <input placeholder="Enter image url" type="text" {...register("imgUrl")} />
                                    </div>
                                 </div>
                                 <div><input type="submit" /></div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AddEvent;