import { api } from '../api';
import { getCookie } from '../helper';


export const register = async (params) => {
  try {
    const response = await api.post(`users`, params);
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const login = async (params) => {
  try {
    const response = await api.post(`o/token`, params);
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
    const response = await api.post(`/orders/`, params);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}


export const getOrders = async (params) => {
  try {
    const response = await api.get(`/orders/`);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}

export const getOrderDetail = async (id) => {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data
  } catch (error) {
    console.log(error)

    return error.response.data || null
  }
}


export const getSizes = async (params) => {
  try {
    const response = await api.get(`/sizes/`);
    return response.data
  } catch (error) {
    return error.response.data || null
  }
}
