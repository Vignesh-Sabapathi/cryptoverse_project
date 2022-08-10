import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
  'X-RapidAPI-Key': 'de6e3459e1mshc350b8e8485a1bcp13ba65jsn659f5611d5de',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url)=>({url, headers:cryptoApiHeaders})

export const cryptoApi=createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    
    getCryptoHistory: builder.query({
      query:(coinId,timeperiod)=> createRequest('/coin/Qwsogvtv82FCd'),
    })
  })

});

export const {
  
  useGetCryptoHistoryQuery,
}=cryptoApi;