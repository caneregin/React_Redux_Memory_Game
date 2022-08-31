import { createSlice } from "@reduxjs/toolkit";

export const memoryGameSlice = createSlice({
    name: "memoryGame",
    initialState: {
        items: [
            { id: "1", src: "1.png", matched: false },
            { id: "2", src: "1.png", matched: false },
            { id: "3", src: "2.png", matched: false },
            { id: "4", src: "2.png", matched: false },
            { id: "5", src: "3.png", matched: false },
            { id: "6", src: "3.png", matched: false },
            { id: "7", src: "4.png", matched: false },
            { id: "8", src: "4.png", matched: false },
            { id: "9", src: "5.png", matched: false },
            { id: "10", src: "5.png", matched: false },
            { id: "11", src: "6.png", matched: false },
            { id: "12", src: "6.png", matched: false },
            { id: "13", src: "7.png", matched: false },
            { id: "14", src: "7.png", matched: false },
            { id: "15", src: "8.png", matched: false },
            { id: "16", src: "8.png", matched: false },
            { id: "17", src: "9.png", matched: false },
            { id: "18", src: "9.png", matched: false },
            { id: "19", src: "10.png", matched: false },
            { id: "20", src: "10.png", matched: false },
            { id: "21", src: "11.png", matched: false },
            { id: "22", src: "11.png", matched: false },
            { id: "23", src: "12.png", matched: false },
            { id: "24", src: "12.png", matched: false },
            { id: "25", src: "13.png", matched: false },
            { id: "26", src: "13.png", matched: false },
            { id: "27", src: "14.png", matched: false },
            { id: "28", src: "14.png", matched: false },
            { id: "29", src: "15.png", matched: false },
            { id: "30", src: "15.png", matched: false },
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