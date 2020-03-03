import axios from 'axios';
export const getProducts = (limit, activePage, activeCategory) => {
    return{
        type: 'GET_PRODUCTS',
        payload: axios ({
            method: "GET",
            url: `http://localhost:8006/product/?limit=${limit}&page=${activePage}`
        })
    }
}

export const postProduct = (data) => {
    return {
        type: 'POST_PRODUCT',
        payload: axios({
            method: "POST",
            url: "http://localhost:8006/product",
            data: data
        })
    }
}

export const deleteProduct = (productId) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: 'DELETE',
            url: `http://localhost:8006/product/${productId}`
        })
    }
}
