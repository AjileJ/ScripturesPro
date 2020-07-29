import React, { useState,useEffect } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import {register} from './actions';




function Register(props) {
  const [credentials, setCredentials] = useState({username: '', password: '' });
  const {id} = props
  useEffect(() => {
    if(id){
      props.history.push('/scriptures')
    }
  },[id])

  const handleSubmit = e => {
    e.preventDefault();
    props.register(credentials)
    // props.history.push("/scriptures");
    // setCredentials({username: '', password: '' });
  };

  return (
    <div>
    <div>
    <h1>Register</h1>
      <div>
      
      <form className="formregister" onSubmit={handleSubmit}>
        
        <input className='inputregister'
          value={credentials.username}
          name="username"
          type="text"
          onChange={e => setCredentials({...credentials, username: e.target.value})}
          placeholder="username"
        />
        <input className='inputregister'
          value={credentials.password}
          name="password"
          type="password"
          onChange={e => setCredentials({...credentials, password: e.target.value})}
          placeholder="password"
        />
        <div>
        <button>
          Register
        </button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {...state}
}
export default connect(mapStateToProps, {register})(Register);