import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import env from '../env.json';
import {toast} from "react-toastify";

const Note = () => {
 let {noteURL} = useParams();
 let [noteText, setNoteText] = useState('hide');
 let [lineClass, setLineClass] = useState('hide');
 let [errorClass, setErrorClass] = useState('hide');
 let [formClass, setFormClass] = useState('hide');
 useEffect(() => {
  if (noteURL !== undefined) {
   setFormClass('hide');
   fetch(env.urlBackend, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify({'url': noteURL})
   })
    .then(response => response.json())
    .then(response => {
     if (response.result) {
      setNoteText(response.note);
      setFormClass('hide');
      setLineClass('');

     }
     else if (!response.result) {
      setFormClass('hide');
      setLineClass('hide');
      setErrorClass('');
     }
    })
  }
  setFormClass('');
  setLineClass('hide');


 }, []);
 const getNote = (e) => {
  e.preventDefault();
  let url = e.target.elements.url.value;
  url = url.trim();
  if (url === '') {
   toast("Note can't be empty",{
    role:"alert"
   })
   return false;
  }
  noteURL = url;
  window.location.href = env.url + '/' + url;
 }

 return (
  <div>
   <section className='noteSection'>
    <div className='form'>
     <form action="" className={formClass} onSubmit={getNote}>
      <div className='noteInput my-5'>
       <label htmlFor="url">Paste your link here</label>
       <input type="text" className='form-control ' name='url'/>
       <button className='btn btn-primary noteButton'>Find Note</button>
      </div>
     </form>
    </div>
    <div className={lineClass}>
     <div className="alert alert-success noteAtt" role="alert">
      <h4 className=''>Note:{noteURL}</h4>
      <div>{noteText}</div>
      <hr/>
      <p className="">Attention! </p> Save your note, it will be automatically deleted in 15 minutes.</div>
     <div>
      <button onClick={() => window.location.href = env.url} className='btn btn-primary  btnLineClass'>Search for
       another note
      </button>
     </div>

    </div>

    <div className={errorClass}>
     <div className="alert alert-danger" role="alert">
      The link isn't found!
     </div>
     <div>
      <button onClick={() => window.location.href = env.url} className='btn btn-primary btnErrorNote'>Find another
       note
      </button>
     </div>
    </div>
   </section>
  </div>

 );
};

export default Note;
