import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk(
    'covidData/fetchCountries', async () => {
        const res = await axios.get('https://api.covid19api.com/countries');
        return res.data;
    }
) 
        export const fetchCountryData = createAsyncThunk(
            'covidData/fetchCountryData',async(selectedCountry)=>{
             const res =  await axios.get(`https://api.covid19api.com/country/${selectedCountry} `)
              return res.data[res.data.length -1]
            }
        )

export const covidDataSlice = createSlice({
    name: 'covidData',
    initialState: {
        selectedCountry:null,
        countries: [],
        countryData: "",
        status: "idle",
    },
    reducers:{
        setSelectCountry:(state,action)=>{
            state.selectedCountry = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = "loading"
        })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.countries = action.payload;
                state.status = "succeed";
        })
            .addCase(fetchCountryData.pending, (state, action) => {
                state.status = "loading"
        })
            .addCase(fetchCountryData.fulfilled, (state, action) => {
                state.countryData = action.payload;
                state.status = "succeed"
        })
    }
})
export const {setSelectCountry} = covidDataSlice.actions
export default covidDataSlice.reducer