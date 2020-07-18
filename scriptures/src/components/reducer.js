import { 
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_START,REGISTER_SUCCESS,REGISTER_FAIL, LOADSCRIPTURES_START,LOADSCRIPTURES_SUCCESS,LOADSCRIPTURES_FAIL,ADDSCRIPTURES_START, ADDSCRIPTURES_SUCCESS, ADDSCRIPTURES_FAIL, EDITSCRIPTURES_START,EDITSCRIPTURES_SUCCESS,EDITSCRIPTURES_FAIL, DELETE_START, DELETE_SUCCESS, DELETE_FAIL, LOGOUT
 } from './actions';


 const initialState  = {
     id: localStorage.getItem('user') || null,
     isLoading: false,
     error: null,
     scriptures: []
 }

 const reducer = (state = initialState, action) => {
     switch(action.type) {
         case LOGIN_START:
             return {
                 ...state,
                 isLoading: true
             }
         case LOGIN_SUCCESS:
             return {
                 ...state,
                 isLoading: false,
                 id: action.payload
             }
        case LOGIN_FAIL:
             return {
                 ...state,
                 isLoading: false,
                 error: action.payload
             }
        case REGISTER_START:
             return {
                 ...state,
                 isLoading: true
             }
         case REGISTER_SUCCESS:
             return {
                 ...state,
                 isLoading: false,
                 id: action.payload
             }
        case REGISTER_FAIL:
             return {
                 ...state,
                 isLoading: false,
                 error: action.payload
             }
        case LOADSCRIPTURES_START:
            return {
                ...state,
                isLoading: true
            }
        case LOADSCRIPTURES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                scriptures: action.payload
            }
        case LOADSCRIPTURES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADDSCRIPTURES_START:
            return {
                ...state,
                isLoading: true
            }
        case ADDSCRIPTURES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                scriptures: action.payload
            }
        case ADDSCRIPTURES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case EDITSCRIPTURES_START:
            return {
                ...state,
                isLoading: true,

            }
        case EDITSCRIPTURES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                scriptures: action.payload
            }
        case EDITSCRIPTURES_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case DELETE_START:
            return {
                ...state,
                isLoading: true
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                scriptures: action.payload
            }
        case DELETE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                id: null
            }
            default:
                return state;
 }
}

export default reducer;