import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL="http://localhost:9090/books";

Vue.prototype.axios=axios;