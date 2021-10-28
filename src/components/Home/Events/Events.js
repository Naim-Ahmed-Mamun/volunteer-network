import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
   const [events, setEvents] = useState([]);
   useEffect(() => {
      fetch('http://localhost:7000/events')
         .then(res => res.json())
         .then(data => {
            setEvents(data);
            console.log(data);
         })
   }, [])
   return (
      <>
         <div className="events_section">
            <div className="container">
               <div className="events_wrapper">
                  <div className="row">
                     {
                        events.map(event => {
                           return (
                              <div key={event._id} className="col-lg-3 mb-4">
                                 <Link to={`/registerVolunteer/${event._id}`}>
                                    <div className="event_img">
                                       <img src={event.imgUrl} alt="" />
                                       <div style={{ background: event.color }} className="event_title">
                                          <h4>{event.title}</h4>
                                       </div>
                                    </div>
                                 </Link>
                              </div>
                           )
                        })
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Events;