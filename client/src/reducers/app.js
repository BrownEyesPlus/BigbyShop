import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  information: {},
  previewProduct: {}
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
    }
  }
})

export const { actions } = slice

// export const useDashboardSlice = () => {
//   useInjectReducer({ key: slice.name, reducer: slice.reducer })
//   useInjectSaga({ key: slice.name, saga: dashboardSaga })
//   return { actions: slice.actions }
// }

export default slice.reducer
