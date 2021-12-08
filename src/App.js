import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import {Switch, Route} from "react-router-dom";
import Create from "./components/Create";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Note from "./components/Note";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 return (
  <>
      <ToastContainer/>
   <div className='wrapper grid'>
    <section className='header'>
     <Header/>
    </section>
       <div className='main'>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/create' component={Create}/>
      <Route path='/about' component={About}/>
      <Route exact path='/note' component={Note}/>
      <Route exact path='/note/:noteURL' component={Note}/>
        <Route component={Error}/>
    </Switch>
     </div>
   </div>

   <Footer/>
  </>
 )
  ;
};

export default App;
