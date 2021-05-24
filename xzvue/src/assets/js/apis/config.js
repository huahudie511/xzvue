//引入axios模块
import axios from 'axios'
axios.defaults.baseURL=" http://115.159.160.93:8080";

axios.defaults.withCredentials = true;

//后续可以配置axios的相应，请求拦截器

export {axios};