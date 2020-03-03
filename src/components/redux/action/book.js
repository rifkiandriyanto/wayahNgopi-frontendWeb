import axios from 'axios';

export const getProducts = () => {
    return {
        type: 'GET_PRODUCTS',
        payload: axios({
            method: "GET",
            url: "http://localhost:9009/product"
        })
    }
}

export const detailProducts = (event) => {
    return {
        type: 'DETAILS_PRODUCT',
        payload: axios({
            method: "GET",
            url: `http://localhost:9009/product?name=${event}`

        })
    }
}

export const deleteProduct = (productId) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: 'DELETE',
            url: `http://localhost:9009/product/${productId}`

        })


    }
}
export const postProduct = (data) => {
    return {
        type: 'POST_PRODUCT',
        payload: axios({
            method: "POST",
            url: "http://localhost:9009/product",
            data: data
        })
    }
}