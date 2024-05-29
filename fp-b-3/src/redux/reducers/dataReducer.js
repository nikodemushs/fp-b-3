import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departureAirport: null,
  arrivalAirport: null,
  departureDate: "",
  returnDate: null,
  penumpang: null,
  class: null,
  type: null,
};

const dataSlicer = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDepartureAirport: (state, action) => {
      state.heroes = action.payload;
    },
    setArrivalAirport: (state, action) => {
      state.heroes = action.payload;
    },
    setDepartureDate: (state, action) => {
      console.log("action :>> ", action);
      state.departureDate = action.payload;
    },
    setReturnDate: (state, action) => {
      state.heroes = action.payload;
    },
    setPenumpang: (state, action) => {
      state.heroes = action.payload;
    },
    setClass: (state, action) => {
      state.heroes = action.payload;
    },
    setType: (state, action) => {
      state.heroes = action.payload;
    },
  },
});

export const {
  setDepartureAirport,
  setArrivalAirport,
  setDepartureDate,
  setReturnDate,
  setPenumpang,
  setClass,
  setType,
} = dataSlicer.actions;

export default dataSlicer.reducer;
