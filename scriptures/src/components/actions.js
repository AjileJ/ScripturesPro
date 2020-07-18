import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

//////
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
//////
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
//////
export const LOADSCRIPTURES_START = 'LOADSCRIPTURES_START';
export const LOADSCRIPTURES_SUCCESS = 'LOADSCRIPTURES_SUCCESS';
export const LOADSCRIPTURES_FAIL = 'LOADSCRIPTURES_FAIL';
//////
export const ADDSCRIPTURES_START = 'ADDSCRIPTURES_START';
export const ADDSCRIPTURES_SUCCESS = 'ADDSCRIPTURES_SUCCESS';
export const ADDSCRIPTURES_FAIL = 'ADDSCRIPTURES_FAIL';
//////
export const LOGOUT = 'LOGOUT';
//////
export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';
//////
export const EDITSCRIPTURES_START = 'EDITSCRIPTURES_START';
export const EDITSCRIPTURES_SUCCESS = 'EDITSCRIPTURES_SUCCESS';
export const EDITSCRIPTURES_FAIL = 'EDITSCRIPTURES_FAIL';


export const login = (credentials) => dispatch => {
    dispatch({type: LOGIN_START});
    const baseUrl = 'localhost:30000'
    axios
        .post(`${baseUrl}/login`, credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', res.data.id)
            dispatch({type: LOGIN_SUCCESS, payload: res.data.id})
        })
        .catch(err => {
            dispatch({LOGIN_FAIL, payload: err})
        })
}

export const register = (credentials) => dispatch => {
    dispatch({type: REGISTER_START});
    const baseUrl = 'localhost:30000'
    axios
        .post(`${baseUrl}/register`, credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', res.data.id)
            dispatch({type: REGISTER_SUCCESS, payload: res.data.id})
        })
        .catch(err => {
            dispatch({REGISTER_FAIL, payload: err})
        })
}

export const loadScriptures = (id) => dispatch => {
    dispatch({type: LOADSCRIPTURES_START})
    axiosWithAuth()
        .get(`/scriptures/${id}`)
        .then(res => {
            dispatch({type: LOADSCRIPTURES_SUCCESS, payload: res.data.scriptures})
        })
        .catch(err => {
            dispatch({type: LOADSCRIPTURES_FAIL, payload: err})
        })
}

export const addScriptures = (id, newScripture) => dispatch => {
    dispatch({type: ADDSCRIPTURES_START});
    axiosWithAuth()
        .post(`/scriptures/${id}`, newScripture)
        .then(res => {
            dispatch({ADDSCRIPTURES_SUCCESS, payload: res.data.scriptures})
        })
        .catch(err => {
            dispatch({type: ADDSCRIPTURES_FAIL, payload: err})
        })
}

export const deleteScripture = (user_id, scripture_id) => dispatch => {
    dispatch({type: DELETE_START });
    axiosWithAuth()
        .delete(`/scriptures/${user_id}/${scripture_id}`)
        .then(res => {
        dispatch({type: DELETE_SUCCESS, payload: res.data.scriptures})
        })
        .catch(err => {
            dispatch({type: DELETE_FAIL, payload: err})
        })
  }
  
  export const updateScripture = (user_id, scripture_id, scripture) => dispatch => {
    dispatch({type: EDITSCRIPTURES_START});
    axiosWithAuth()
        .put(`/scriptures/${user_id}/${scripture_id}`, scripture)
        .then(res => {
        dispatch({type: EDITSCRIPTURES_SUCCESS, payload: res.data.scriptures})
        })
        .catch(err => {
            dispatch({type: EDITSCRIPTURES_FAIL, payload: err})
        })
  }

  export const logout = () => dispatch => {
      dispatch({type: LOGOUT})
  }

