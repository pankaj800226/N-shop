import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlics'
import SearchSlice from './search'


const store = configureStore({
    reducer: {
        Cart: cartSlice,
        Search: SearchSlice,
        
    }
})

export default store