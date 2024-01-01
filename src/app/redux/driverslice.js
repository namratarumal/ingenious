
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 

export const fetchDrivers = createAsyncThunk('fetchDrivers', async () => {
    const response = await axios.get('http://13.52.215.120/api/driver');
    return response.data;
  });

export const fetchTruckCategory = createAsyncThunk('fetchTruckCategory', async () => {
const response = await axios.get('http://13.52.215.120/api/truckcategory');
return response.data;
});

export const addDrivers = createAsyncThunk('addDrivers', async (data) => 
{
    console.log('Data inserted : ' ,data)
    const formData = new FormData();
    formData.append("firstname", data.fname);
    formData.append('lastname', data.lname);
    formData.append('num_cin', data.num_cin);
    formData.append('num_permit_to_drive',data.num_permit_to_drive);
    formData.append('n_tel',data.phone);
    const response = await axios.post('http://13.52.215.120/api/driver', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    return response.data;
});

export const deleteDriverData = createAsyncThunk('deleteDriverData',async (id)=>{
  const response = await axios.delete('http://13.52.215.120/api/driver/'+id);
  return response.data;
});


export const UpdateDriverId = createAsyncThunk('UpdateDriverId',async (id)=>{
    console.log('Update Id : ',id)
    const response = await axios.get('http://13.52.215.120/api/driver/'+id);
    return response.data;
  });


export const UpdateDrivers = createAsyncThunk('UpdateDrivers',async (data)=>{

    const formData = new FormData();
    formData.append('_method','PUT')
    formData.append("firstname", data.fname);
    formData.append('lastname', data.lname);
    formData.append('num_cin', data.num_cin);
    formData.append('num_permit_to_drive',data.num_permit_to_drive);
    formData.append('n_tel',data.phone);

    const response = await axios.post('http://13.52.215.120/api/driver/'+data.driverId,formData, {
                      headers: {
                          'Content-Type': 'multipart/form-data',
                      },
                  });
      return response.data;c 
  });


const initialState = {
    DriverData: [],
    truckCategory: [],
    loading: false,
    fname: '',
    lname:'',
    num_cin:'',
    num_permit_to_drive:'',
    phone:'',
    driverId:0,
  };

  const DriverOperation = createSlice({
    name: 'DriverOperation',
    initialState,
    reducers: {
      setFname:(state,payload)=>{
          state.fname=payload.payload;
      },
      setLname:(state,payload)=>{
          state.lname=payload.payload;
      },
      setNum_cin:(state,payload)=>{
          state.num_cin=payload.payload;
      },
      setPermit:(state,payload)=>{
        state.num_permit_to_drive=payload.payload;
      },
      setPhone:(state,action)=>{
        state.phone=action.payload;
      }
    },
    extraReducers: {

        [fetchDrivers.pending]:(state)=>{
            state.loading=true;
        },

        [fetchDrivers.fulfilled]:(state,action)=>{
            state.loading=false;
            state.DriverData=action.payload;
        },

        [fetchTruckCategory.pending]: (state) => {
            state.loading = true;
          },
          [fetchTruckCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.truckCategory = action.payload;
          },
          [fetchTruckCategory.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          },

        [addDrivers.pending]:(state)=>{
            state.loading=true;
        },
      
        [addDrivers.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/Driver";
        },
    
        [deleteDriverData.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/Driver";
        },
   
        [UpdateDriverId.fulfilled]:(state,payload)=>{
            state.loading=false;
            state.driverId=payload.payload.id;
            state.fname=payload.payload.firstname;
            state.lname=payload.payload.lastname;
            state.num_cin=payload.payload.num_cin;
            state.num_permit_to_drive=payload.payload.num_permit_to_drive;
            state.phone=payload.payload.n_tel;
        },
    
        [UpdateDrivers.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/Driver";
        },
    },
  });
  
  export const { setFname,setLname,setNum_cin,setPermit,setPhone} = DriverOperation.actions;
  export default DriverOperation.reducer;
  