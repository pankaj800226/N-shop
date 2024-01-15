import { createSlice } from '@reduxjs/toolkit'

const loadCartItemState = () => {
    try {
        const getCartItemState = localStorage.getItem('cartItem');
        return JSON.parse(getCartItemState);
    } catch (err) {
        console.log(err);
    }
};

// Save the cart state to localStorage whenever it changes
const saveCartState = (state) => {
    try {
        const getCartItemState = JSON.stringify(state);
        localStorage.setItem('cartItem', getCartItemState);
    } catch (err) {
        console.log(err);
    }
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: loadCartItemState() || { items: [] },
    reducers: {
        //addToCart functionality
        addToCart: (state, action) => {
            const { id, name, price, imgUrl, quantity, rating, size, qty } = action.payload
            const isItemExit = state.items.find((item) => item.id === id)
            if (isItemExit) {
                isItemExit.quantity += 1
            } else {
                state.items.push({ id, name, price, imgUrl, quantity, rating, size, qty })
            }
            saveCartState(state);
        },
        //remove cart item functionality
        remove: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.id !== itemId)
            saveCartState(state);
        },
        //increment cart item functionality
        increment: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((item) => item.id === itemId)
            if (item) {
                item.quantity += 1
            }
            saveCartState(state);
        },

        //decrement cart item functionality
        decrement: (state, action) => {
            const itemId = action.payload;
            const item = state.items.find((item) => item.id === itemId)
            if (item && item.quantity > 1) {
                item.quantity -= 1
            }
            saveCartState(state);
        },

        checkOut: (state) => {
            state.items = [];
            saveCartState(state);
        }

    }
})

export const { addToCart, remove, increment, decrement, checkOut } = cartSlice.actions
export default cartSlice.reducer