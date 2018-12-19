import axios from 'axios';

axios.defaults.baseURL =  process.env.NODE_ENV === 'development' ? 'http://mphclub.ngrok.io/api/v1' : 'http://mphclub.biz/api/v1/';

export default axios