const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 

export const fetchClient = createAsyncThunk('fetchClient', async () => {
  const response = await axios.get('http://13.52.215.120/api/clients');
  return response.data;
});

export const addClientData = createAsyncThunk('addClientData', async (data) => 
{
    console.log('Data inserted : ' ,data)
    const formData = new FormData();
    formData.append("name_client", data.clientName);
    formData.append('id_city', data.clientCity);
    formData.append('address', data.clientAddress);
    formData.append('createdBy', data.createdBy);
    const response = await axios.post('http://13.52.215.120/api/clients', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    return response.data;
});

export const deleteClientData = createAsyncThunk('deleteClientData',async (id)=>{
  const response = await axios.delete('http://13.52.215.120/api/clients/'+id);
  return response.data;
});


export const UpdateClientId = createAsyncThunk('UpdateClientId',async (id)=>{
  console.log("Client Update Id : ",id)
  const response = await axios.get('http://13.52.215.120/api/clients/'+id);
  return response.data;
});

export const UpdateClient = createAsyncThunk('UpdateClient',async (data)=>{
  console.log("Updated Data : ",data)

  const formData = new FormData();
  formData.append('_method','PUT')
  formData.append("name_client", data.clientName);
  formData.append('id_city', data.clientCity);
  formData.append('address', data.clientAddress);
  formData.append('modifiedBy', data.modifiedBy);

  const response = await axios.post('http://13.52.215.120/api/clients/'+data.clientId,formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                  },
              });
  return response.data;
});

export const fetchCity = createAsyncThunk('fetchCity', async () => {
  const response = await axios.get('http://13.52.215.120/api/city');
  return response.data;
});

export const addCity = createAsyncThunk('addCity', async (data) => 
{
    console.log('Data City : ' ,data)
    const formData = new FormData();
    formData.append('city', data.cityName);
    const response = await axios.post('http://13.52.215.120/api/city', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    return response.data;
});

export const deleteCity = createAsyncThunk('deleteCity',async (id)=>{
  const response = await axios.delete('http://13.52.215.120/api/city/'+id);
  return response.data;
});


export const UpdateCityId = createAsyncThunk('UpdateCityId',async (id)=>{
  const response = await axios.get('http://13.52.215.120/api/city/'+id);
  return response.data;
});

export const UpdateCity = createAsyncThunk('UpdateCity',async (data)=>{
  console.log("Updated Data : ",data)
  const formData = new FormData();
  formData.append('_method','PUT')
  formData.append("city", data.cityName);
  const response = await axios.post('http://13.52.215.120/api/city/'+data.cityId,formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data',
                  },
              });
  return response.data;
});



const initialState = {
  clientdata: [],
  loading: false,
  clientId:0,
  clientName: '',
  clientCity:'',
  clientAddress:'',

  city:[],
  cityName:'',
  cityId:0,
};

const TravelOperation = createSlice({
  name: 'TravelOperation',
  initialState,
  reducers: {
    setClientName:(state,payload)=>{
        state.clientName=payload.payload;
    },
    setClientCity:(state,payload)=>{
        state.clientCity=payload.payload;
    },
    setClientAddress:(state,payload)=>{
        state.clientAddress=payload.payload;
    },
    setCityName:(state,payload)=>{
      state.cityName=payload.payload;
    },

  },
  extraReducers: {
    [fetchClient.pending]: (state) => {
      state.loading = true;
    },
    [fetchClient.fulfilled]: (state, action) => {
      state.loading = false;
      state.clientdata = action.payload;
    },
    [fetchClient.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },

    [addClientData.pending]:(state)=>{
        state.loading=true;
    },
    [addClientData.fulfilled]:(state)=>{
        state.loading=false;
        console.log('Inserted')
        window.location.href="/Clients"
    },
    [deleteClientData.fulfilled]:(state)=>{
      state.loading=false;
      window.location.href="/Clients";
    },

    [UpdateClientId.fulfilled]:(state,payload)=>{
      state.loading=false;
      state.clientId = payload.payload.id;
      state.clientName =payload.payload.name_client;
      state.clientCity =payload.payload.id_city;
      state.clientAddress =payload.payload.address;
    },

    [UpdateClient.fulfilled]:(state)=>{
      state.loading=false;
      window.location.href="/Clients";
    },


    [fetchCity.pending]: (state) => {
      state.loading = true;
    },
    [fetchCity.fulfilled]: (state, action) => {
      state.loading = false;
      state.city = action.payload;
    },
    [fetchCity.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addCity.pending]:(state)=>{
      state.loading=true;
    },
    [addCity.fulfilled]:(state)=>{
      state.loading=false;
      console.log('Inserted')
      window.location.href="/City"
  },

  [deleteCity.fulfilled]:(state)=>{
    state.loading=false;
    window.location.href="/City";
  },

  [UpdateCityId.fulfilled]:(state,payload)=>{
    state.loading=false;
    state.cityId = payload.payload.id;
    state.cityName =payload.payload.city;
  },

  [UpdateCity.fulfilled]:(state)=>{
    state.loading=false;
    window.location.href="/City";
  },

  },
});

export const { setClientName,setClientCity,setClientAddress,setCityName } = TravelOperation.actions;
export default TravelOperation.reducer;
