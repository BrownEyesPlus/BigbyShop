import { api } from '../api';
import { getCookie } from '../helper';


export const register = async (params) => {
  try {
    let formData = new FormData()
    Object.keys(params).forEach(key => {
      formData.append(`${key}`, params[key])
    })
    const response = await api.post(`users/`, formData);
    return response.data
  } catch (error) {
    console.log({ error: error.response.data })
    return { error: error.response.data }
  }
}

export const login = async (params) => {
  try {
    let formData = new FormData()
    Object.keys(params).forEach(key => {
      formData.append(`${key}`, params[key])
    })
    const response = await api.post(`o/token/`, formData);
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const getUserInfor = async (params) => {
  try {
    const response = await api.get(`profiles/me`, {
      headers: { Authorization: `Bearer ${params || getCookie('access_token')}`, }
    });
    return response.data
  } catch (error) {
    return null
  }
}

export const getBaseProduct = async (params) => {
  try {
    const response = await api.get(`base_products`);
    return response.data
  } catch (error) {
    return null
  }
}

export const getProductColorsByBaseProductId = async (params) => {
  try {
    const response = await api.get(`/base_products/${params}/product_colors`);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const createOrder = async (params) => {
  try {
    const response = await api.post(`/orders/`, params, {
      headers: { Authorization: `Bearer ${getCookie('access_token')}`, }
    });
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const getOrdersUser = async (params) => {
  try {
    const response = await api.get(`/orders/user`, {
      headers: { Authorization: `Bearer ${params || getCookie('access_token')}`, }
    });
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}
