import { configureStore } from '@reduxjs/toolkit'

import contentReducer from '../features/posts/postsSlice'

export default configureStore({
  reducer: {
    content: contentReducer
  }
})