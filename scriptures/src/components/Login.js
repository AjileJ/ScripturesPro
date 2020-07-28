import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from './actions';


const Login = props => {
    const {id} = props
    useEffect(() => {
        if(id){
            props.history.push('/scriptures')
        }
    },[id])

    const [credentials, setCredentials] = useState({username:'', password: ''});
    const changeHandler = event => {
        event.preventDefault();
        setCredentials({
            ...credentials,
            [event.target.name]:event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.login(credentials)
    };

    return(
        <div>
            <div>
                <h1>Scriptures Pro</h1>

                <div>
                    <form onSubmit={handleSubmit}>
                        <input 
                        className='username'
                        placeholder='username'
                        type="text"
                        value={credentials.username}
                        name='username'
                        onChange={changeHandler}
                        />
                        <input 
                        className='password'
                        placeholder='password'
                        type="text"
                        value={credentials.password}
                        name='password'
                        onChange={changeHandler}
                        />
                        <div>
                            <button type='submit'>
                                Login
                            </button>
                        </div>
                        <div>
                            Don't have an account? <Link to='/Register'>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {...state}
}

export default connect(mapStateToProps, {login})(Login)