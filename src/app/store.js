import { configureStore } from '@reduxjs/toolkit'

import newsItemsReducer from '../features/newsItems/newsItemsSlice'

export default configureStore({
  reducer: {
    newsItems: newsItemsReducer
  }
})