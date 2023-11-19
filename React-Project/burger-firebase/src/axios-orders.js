import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-9dbbd-default-rtdb.firebaseio.com/'
});

export default instance;