import { configureStore } from "@reduxjs/toolkit";
import covidDataSlice from "../features/covidDataSlice";

const store = configureStore({
    reducer: {
        covidData : covidDataSlice
    }
})


export default store;
