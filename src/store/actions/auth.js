import * as actionTypes from './actionType';
import axios from '../../axios-todo';

export const failmessageinit = () =>{
    return {
        type:actionTypes.FailMessageInit
    };
}

const authStart = () =>{
    return {
        type:actionTypes.AUTH_START
    };
}

const authSuccess = (token) =>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        token
    };
}

const authFail = (error) =>{
    return {
        type:actionTypes.AUTH_FAIL,
        error
    };
}

export const auth =(email,password) =>{
    
    return dispatch =>{
        dispatch(authStart());
        const authData = {
            email,
            password
        }
        axios.post('/users/login',authData)
        .then(res=>{
            const token = res.headers['x-auth'];
            localStorage.setItem('token',token);
            dispatch(authSuccess(res));
        }).catch(e=>{
            if(e.response){
                if(e.response.status===400){              
                    dispatch(authFail('帳號或密碼錯誤'));
                }
            }
        });
    };
};

export const logout = () => {
    return dispatch=>{
    const headers = {
        'x-auth':localStorage.token
    }
    axios.delete('/users/me/token',{headers:headers})
    .then(res=>{
            localStorage.removeItem('token');
            dispatch({
                type:actionTypes.Logout
            });
    }).catch(e=>{
        console.log('logout error');
    });
}
};

const registerSuccess = (token)=>{
    return {
        type:actionTypes.Register_Success,
        token
    }
};

const registerFail = (error)=>{
    return {
        type:actionTypes.Register_Fail,
        error
    }
};

export const register = (email,password)=>{
    return dispatch=>{
        const registerData = {
            email,password
        }
        axios.post('/users',registerData)
        .then(res=>{
            const token = res.headers['x-auth'];
            localStorage.setItem('token',token);
            dispatch(registerSuccess(token));
        }).catch(e=>{
            if(e.response){
                if(e.response.status===400){              
                    dispatch(authFail('此信箱已註冊'));
                }
            }
        });
    }
};
