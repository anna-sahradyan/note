import React from 'react';
import {NavLink} from "react-router-dom";

const Main = () => {
 return (
  <div>
   <section className='description'>
     <div className='btnMine'>
       <button className='btn btn-primary col-3 text-left'><NavLink to='/create'className='mainCreate'
     >Create</NavLink></button>
       <button className='btn btn-primary col-3 text-right'><NavLink to='/note' className='mainNote'

       >Note</NavLink></button>
      </div>

      <div className='textMain'>ShareNotes is a safe way to communicate, it's easy and simple:</div>
      <div className='answer'>
       <ul>
        <li>Press "Create"</li>
        <li>Write your note</li>
        <li>Send the link to the  recipient</li>
       </ul>
       <p>The link will be active for 15 minutes, after which it will be deleted automatically.</p>
          <h3>To read your notes, simply:</h3>
          <ul>
              <li>Copy your received note's URL </li>
              <li>Press "Note" and past your link </li>
              <li>Click on "Find Note"</li>
          </ul>
      </div>
   </section>
  </div>
 );
};

export default Main;
