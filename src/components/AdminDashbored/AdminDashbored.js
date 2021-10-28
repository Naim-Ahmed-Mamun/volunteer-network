import { faPlus, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './AdminDashbored.css';

const AdminDashbored = () => {
   const [userInfo, setUserInfo] = useState([]);
   useEffect(() => {
      fetch('http://localhost:7000/userBook')
         .then(res => res.json())
         .then(data => {
            setUserInfo(data);
         })
   }, []);
   // handleDelete
   const handleDelete = id => {
      const proceed = window.confirm('Are you sure you want to delete this')
      if (proceed) {
         const url = `http://localhost:7000/userBook/${id}`
         fetch(url, {
            method: 'DELETE'
         })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               if(data.deletedCount > 0){
                  const remaining = userInfo.filter(user => user._id !== id);
                  setUserInfo(remaining)
               }
            })
      }
   }
   return (
      <>
         <div className="volunteer_register_section">
            <div className="container">
               <div className="volunteer_register_wrapper">
                  <div className="row">
                     <div className="col-lg-4 volunteer_register_left_side_wrapper">
                        <div className="add_event_left_side">
                           <div className="logo">
                              <img src={logo} alt="" />
                           </div>
                           <div className="volunteer_register_left_side_text">
                              <h5> <FontAwesomeIcon className="icon" icon={faUsers} /> Volunteer register list</h5>
                              <p><FontAwesomeIcon className="icon" icon={faPlus} /> Add event</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-8 volunteer_register_right_side_wrapper">
                        <div className="volunteer_register_right_side">
                           <h4>Volunteer register list</h4>
                           <div className="userBook_list">
                              <Table striped bordered hover>
                                 <thead>
                                    <tr>
                                       <th>Name</th>
                                       <th>Email ID</th>
                                       <th>Registering date</th>
                                       <th>Volunteer list</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {
                                       userInfo.map(detail => {
                                          return (
                                             <tr key={detail._id}>
                                                <td>{detail.name}</td>
                                                <td>{detail.email}</td>
                                                <td>{detail?.date}</td>
                                                <td>{detail?.booksLibrary}</td>
                                                <td><button onClick={() => handleDelete(detail._id)}
                                                   className="btn btn-danger">
                                                   <FontAwesomeIcon icon={faTrash} /></button></td>
                                             </tr>
                                          )
                                       })
                                    }
                                 </tbody>
                              </Table>
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

export default AdminDashbored;