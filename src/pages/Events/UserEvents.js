import React, { useEffect, useState } from 'react';
import Header from '../../components/shared/Header/Header';
import useAuth from '../../Hooks/useAuth';
import './UserEvents.css';

const UserEvents = () => {
   const [userEvents, setUserEvents] = useState([]);
   const { user } = useAuth();
   const userEmail = user?.email;
   // console.log(userEmail);
   useEffect(() => {
      fetch(`http://localhost:7000/userBook/?email=${userEmail}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setUserEvents(data)
         })
   }, [])
   return (
      <>
         <Header></Header>
         <div className="userEvent_section">
            <div className="container">
               <div className="row">
                  {
                     userEvents.map(event => {
                        return (
                           <div key={event._id} className="col-lg-6 mb-4">
                              <div className="event_item shadow p-2 d-flex">
                                 <div className="userEvent_img">
                                    <img src={event?.imgUrl} alt="" />
                                 </div>
                                 <div className="userEvent_text">
                                    <h3>{event?.booksLibrary}</h3>
                                    <h5>{event?.date}</h5>
                                 </div>
                                 <div className="delete_btn">
                                    <button className="btn">Cancel</button>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default UserEvents;