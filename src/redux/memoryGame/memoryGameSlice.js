import { createSlice } from "@reduxjs/toolkit";

export const memoryGameSlice = createSlice({
    name: "memoryGame",
    initialState: {
        items: [
            { id: "1", src: "http://localhost:3000/1.png", matched: false },
            { id: "2", src: "http://localhost:3000/1.png", matched: false },
            { id: "3", src: "http://localhost:3000/2.png", matched: false },
            { id: "4", src: "http://localhost:3000/2.png", matched: false },
            { id: "5", src: "http://localhost:3000/3.png", matched: false },
            { id: "6", src: "http://localhost:3000/3.png", matched: false },
            { id: "7", src: "http://localhost:3000/4.png", matched: false },
            { id: "8", src: "http://localhost:3000/4.png", matched: false },
            { id: "9", src: "http://localhost:3000/5.png", matched: false },
            { id: "10", src: "http://localhost:3000/5.png", matched: false },
            { id: "11", src: "http://localhost:3000/6.png", matched: false },
            { id: "12", src: "http://localhost:3000/6.png", matched: false },
            { id: "13", src: "http://localhost:3000/7.png", matched: false },
            { id: "14", src: "http://localhost:3000/7.png", matched: false },
            { id: "15", src: "http://localhost:3000/8.png", matched: false },
            { id: "16", src: "http://localhost:3000/8.png", matched: false },
            { id: "17", src: "http://localhost:3000/9.png", matched: false },
            { id: "18", src: "http://localhost:3000/9.png", matched: false },
            { id: "19", src: "http://localhost:3000/10.png", matched: false },
            { id: "20", src: "http://localhost:3000/10.png", matched: false },
            { id: "21", src: "http://localhost:3000/11.png", matched: false },
            { id: "22", src: "http://localhost:3000/11.png", matched: false },
            { id: "23", src: "http://localhost:3000/12.png", matched: false },
            { id: "24", src: "http://localhost:3000/12.png", matched: false },
            { id: "25", src: "http://localhost:3000/13.png", matched: false },
            { id: "26", src: "http://localhost:3000/13.png", matched: false },
            { id: "27", src: "http://localhost:3000/14.png", matched: false },
            { id: "28", src: "http://localhost:3000/14.png", matched: false },
            { id: "29", src: "http://localhost:3000/15.png", matched: false },
            { id: "30", src: "http://localhost:3000/15.png", matched: false },
        ],
        totalPoint: 0,
        isFinish: 0
    },
    reducers: {
        check: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    console.log(item.matched)
                    item.matched = true
                    state.totalPoint = state.totalPoint + 25
                    state.isFinish = state.isFinish + 1
                }
            });
        },
        checkFalse: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.matched = false
                    console.log(item.matched)
                }
            });
        },
        decreasePoint: (state, action) => {
            state.totalPoint = state.totalPoint - 10
        },
        shuffleData:(state,action)=>{
            state.items = action.payload
        },
        finishGame:(state,action)=>{
            state.isFinish = 0
            state.totalPoint = 0
        }
    }
})
export const { check, checkFalse, decreasePoint,shuffleData,finishGame } = memoryGameSlice.actions
export default memoryGameSlice.reducer