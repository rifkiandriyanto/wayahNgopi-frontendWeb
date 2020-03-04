import axios from 'axios';

export const getCategory = () => {
    return{
        type: 'GET_CATEGORY',
        payload: axios({
            method: "GET",
            url: "http://localhost:8006/category"
        })
    }
}

export const addCategory = (data) => {
    return{
        type: 'POST_CATEGORY',
        payload: axios({
            method: "POST",
            data:data,
            url: "http://localhost:8006/category"
        })
    }
}

export const deleteCategory = (propsId) => {
    return{
        type: 'DELETE_CATEGORY',
        payload: axios({
            method: 'DELETE',
            url: `http://localhost:8006/category/${propsId}`
        })
    }
}

export const editCategory = (data, propsId) => {
    console.log(data)
    return{
        type: 'PATCH_CATEGORY',
        payload: axios({
            method: 'PATCH',
            data:data,
            url: `http://localhost:8006/category/${propsId}`
        })
    }
}