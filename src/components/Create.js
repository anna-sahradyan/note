import React, {useState} from 'react';
import env from '../env.json';
import {toast} from "react-toastify";

const Create = () => {
  let [url, setUrl] = useState('');
  let [formClass, setFormClass] = useState('');
  let [lainClass, setLainClass] = useState('hide');
  const sendData = (obj) => {
   setLainClass('');
   setFormClass('hide');
   fetch(env.urlBackend, {
    method: 'POST',
    headers: {
     'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(obj),
   })
    .then(response => response.json())
    .then(response => {
     if (response.result) {
      setUrl(env.url + '/' + response.url);
     }
    })

  }
  const loadDataFromForm = (e) => {
   e.preventDefault();
   let note = e.target.elements.note.value;
   note = note.trim();
   if (note === '') {
    toast("Note can't be empty",{
     role:"alert"
    })
    return false;
   }
 sendData({"note": note});
  }

  return (
   <div>
    <section className='createSection'>
     <div className='createArea my-5 '>
      <form action="" onSubmit={loadDataFromForm} className={formClass}>
       <label htmlFor="note">Create Note</label>
       <textarea name="note" className="form-control" defaultValue="Test note system" id="note"></textarea>
       <div>Maximum 1000 characters!
       </div>
       <button type='submit' className='btn btn-primary createBtn1'>Create</button>
      </form>


     </div>

     <div className={lainClass}>
      <div className='createLine my-5'>
       <div className='alert alert-primary lineAlert ' role='alert'>{url}</div>
       <p>Copy the URL and transfer to the addressee. Attention! You can view the note once!</p>
       <button type='submit' className='btn btn-primary createBtn2' onClick={() => window.location.reload()}>Create new
        note
       </button>
      </div>
     </div>
    </section>
   </div>
  );
 }
;

export default Create;
