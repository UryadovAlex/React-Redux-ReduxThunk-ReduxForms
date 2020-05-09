import users from "../apis/users";
import history from "../history";
import {
    FETCH_USER,
    FETCH_USERS,
    DELETE_USER,
    UPDATE_USER,
    CREATE_USER
} from './types'

export const createUser = formValue => async dispatch => {
    const response = await users.post('/users', {...formValue});

    dispatch({ type: CREATE_USER, payload: response.data });
    history.push('/');
}

export const fetchUsers = () => async dispatch => {
    const response = await users.get('/users');
    dispatch({ type: FETCH_USERS, payload: response.data })
}

export const fetchUser = id => async dispatch => {
    const response = await users.get(`/users/${id}`);

    dispatch({ type: FETCH_USER, payload: response.data });
}

export const deleteUser = id => async dispatch => {
    await users.delete(`/users/${id}`);

    dispatch({ type: DELETE_USER, payload: id });
    history.push('/');
}

export const updateUser = (id, formValue) => async dispatch => {
    const response = await users.put(`/users/${id}`, {...formValue});

    dispatch({ type: UPDATE_USER, payload: response.data });
    history.push('/');
}