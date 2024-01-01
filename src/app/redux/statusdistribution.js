import { Divider } from "@nextui-org/react";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const axios = require('axios'); 


// // <------------------------Driver API Code Start------------------------------->

// export const fetchDrivers = createAsyncThunk('fetchDrivers', async () => {
//     const response = await axios.get('http://13.52.215.120/api/driver');
//     return response.data;
//   });

// export const addDrivers = createAsyncThunk('addDrivers', async (data) => 
// {
//     console.log('Data inserted : ' ,data)
//     const formData = new FormData();
//     formData.append("firstname", data.fname);
//     formData.append('lastname', data.lname);
//     formData.append('num_cin', data.num_cin);
//     formData.append('num_permit_to_drive',data.num_permit_to_drive);
//     formData.append('n_tel',data.phone);
//     const response = await axios.post('http://13.52.215.120/api/driver', formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//     return response.data;
// });

// export const deleteDriverData = createAsyncThunk('deleteDriverData',async (id)=>{
//   const response = await axios.delete('http://13.52.215.120/api/driver/'+id);
//   return response.data;
// });


// export const editDriverData = createAsyncThunk('editDriverData',async (id)=>{
//     const response = await axios.get('http://13.52.215.120/api/driver/'+id);
//     return response.data;
//   });


// export const UpdateDrivers = createAsyncThunk('UpdateDrivers', async (data) => 
// {
//     console.log('Data Updated : ' ,data)
//     var id=data.did;
//     const formData = new FormData();
//     formData.append("firstname", data.fisrtname);
//     formData.append('lastname', data.last);
//     formData.append('num_cin', data.num_cin);
//     formData.append('num_permit_to_drive',data.num_permit_to_drive);
//     formData.append('n_tel',data.n_tel);
//     const response = await axios.post('http://13.52.215.120/api/driver/'+id, formData, {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 });
//     return response.data;
// });

// // <------------------------Driver API Code Ends------------------------------->

// <------------------------StatusDistribution API Code Start------------------>


export const fetchStatusDistribution = createAsyncThunk('fetchStatusDistribution', async () => {
    const response = await axios.get('http://13.52.215.120/api/statusdistribution');
    return response.data;
  });



export const addStatusDistribution = createAsyncThunk('addStatusDistribution', async (data) => 
{
   
    const formData = new FormData();
    formData.append("status_distribution", data.status);
    const response = await axios.post('http://13.52.215.120/api/statusdistribution', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
    return response.data;
});

export const deleteStatusDistribution = createAsyncThunk('deleteStatusDistribution',async (id)=>{
  const response = await axios.delete('http://13.52.215.120/api/statusdistribution/'+id);
  return response.data;
});


export const editStatusDistribution = createAsyncThunk('editStatusDistribution',async (id)=>{
    const response = await axios.get('http://13.52.215.120/api/statusdistribution/'+id);
    return response.data;
  });


export const updateStatusDistribution = createAsyncThunk('updateStatusDistribution', async (data) => 
{
    const formData = new FormData();
    formData.append('_method','PUT')
    formData.append("status_distribution",data.status);
    const response = await axios.post('http://13.52.215.120/api/statusdistribution/'+data.sid,formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
});








// <------------------------StatusDistribution API Code End------------------>



const initialState = {

    DriverData: [],
    loading: false,
    fname: '',
    lname:'',
    num_cin:'',
    num_permit_to_drive:'',
    phone:'',
    did:'',


    StatusDistribution: [],
    sid:'',
    status:'',

  };

  const statusDistribution = createSlice({
    name: 'statusDistribution',
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
      },
      setStatus:(state,action)=>{
        state.status=action.payload;
      }
    },
    extraReducers: {
        
// <------------------------Drivers Extrareducer Code Start------------------>

        // [fetchDrivers.pending]:(state)=>{
        //     state.loading=true;
        // },

        // [fetchDrivers.fulfilled]:(state,action)=>{
        //     state.loading=false;
        //     state.DriverData=action.payload;
        // },
        

        // [addDrivers.pending]:(state)=>{
        //     state.loading=true;
        // },
      
        // [addDrivers.fulfilled]:(state)=>{
        //     state.loading=false;
        //     window.location.href="/Driver";

        // },

        // [deleteDriverData.pending]:(state)=>{
        //     state.loading=true;
        // },
        // [deleteDriverData.fulfilled]:(state)=>{
        //     state.loading=false;
        //     // window.location.href="/Drivers";

        // },
        // [editDriverData.pending]:(state)=>{
        //     state.loading=true;

        // },
        // [editDriverData.fulfilled]:(state,payload)=>{
        //     state.loading=false;
        //     state.did=payload.payload.id;
        //     state.fname=payload.payload.firstname;
        //     state.lname=payload.payload.lastname;
        //     state.num_cin=payload.payload.num_cin;
        //     state.num_permit_to_drive=payload.payload.num_permit_to_drive;
        //     state.phone=payload.payload.n_tel;
        //     // window.location.href="/Drivers";
        // },
        // [UpdateDrivers.pending]: (state) =>{
        //     state.loading=true;
        //     },
        // [UpdateDrivers.fulfilled]:(state)=>{
        //     state.loading=false;
        //     // alert("Updated Successfully");
        //     // window.location.href="/drivers";
        // },

// <------------------------Drivers Extrareducer Code End------------------>
// <------------------------StatusDistribution Extrareducer Code Start------------------>

        [fetchStatusDistribution.pending]:(state)=>{
            state.loading=true;
        },

        [fetchStatusDistribution.fulfilled]:(state,action)=>{
            state.loading=false;
            state.StatusDistribution=action.payload;
        },
        

        [addStatusDistribution.pending]:(state)=>{
            state.loading=true;
        },
      
        [addStatusDistribution.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/StatusDistribution";

        },

        [deleteStatusDistribution.pending]:(state)=>{
            state.loading=true;
        },
        [deleteStatusDistribution.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/StatusDistribution";

        },
        [editStatusDistribution.pending]:(state)=>{
            state.loading=true;
        },
        [editStatusDistribution.fulfilled]:(state,payload)=>{
            state.loading=false;
            state.sid=payload.payload.id;
            state.status=payload.payload.status_distribution
        },
        [updateStatusDistribution.pending]: (state) =>{
            state.loading=true;
            },
        [updateStatusDistribution.fulfilled]:(state)=>{
            state.loading=false;
            window.location.href="/StatusDistribution";
        },
// <------------------------StatusDistribution Extrareducer Code End------------------>
    },
  });
  
  export const { setFname,setLname,setNum_cin,setPermit,setPhone ,setStatus} = statusDistribution.actions;
  export default statusDistribution.reducer;
  