import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  information: {},
  previewProduct: {},
  cart: [],
}

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPreviewProduct(state, action) {
      state.previewProduct = action.payload
    },
    clearPreviewProduct(state) {
      state.previewProduct = {}
    },
    addToCart(state, action) {
      const isProductExist = state.cart.find(item => item.id === action.payload.id)
      if (isProductExist) {
        state.cart = state.cart.map(item => {
          if (item.id === action.payload.id) item.quantity += 1
          return item
        })
      }
      else
        state.cart = [...state.cart, action.payload]
    },
    removeFromCart(state, action) {
      const isProductExist = state.cart.find(item => item.id === action.payload.id)
      if (isProductExist)
        state.cart = state.cart.filter(item => item !== action.payload.id)
    },
    clearCart(state) {
      state.cart = []
    },
  }
})

export const { actions } = slice

// export const useDashboardSlice = () => {
//   useInjectReducer({ key: slice.name, reducer: slice.reducer })
//   useInjectSaga({ key: slice.name, saga: dashboardSaga })
//   return { actions: slice.actions }
// }

export default slice.reducer
