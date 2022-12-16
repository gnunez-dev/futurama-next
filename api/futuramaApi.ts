import axios from 'axios';

const futuramaApi = axios.create({
  baseURL: 'https://api.sampleapis.com/futurama'
});

export default futuramaApi;