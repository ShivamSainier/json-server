import axios from "axios";

// @react-router 
import store from '../redux/store';
import { auth } from "../redux/actions";

export default function axiosInterceptorHandler() {

  /**
   * Axios Interceptor to handle refresh token 
   */

  let isAlreadyFetching = false;
  let subscriber = [];

  function onAccessTokenFetched(access_token) {
    subscriber = subscriber.filter(callback => callback(access_token));
  }

  function addSubscriber(callback) {
    subscriber.push(callback);
  }
  axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    const { config, response: { status } } = error;
    const originalRequest = config;
    if (status === 401) {
      if (!isAlreadyFetching) {
        isAlreadyFetching = true;
        store.dispatch(auth.refreshToken())
          .then((res) => {
            isAlreadyFetching = false;
            let state = store.getState().auth;
            let access_token = state.access_token;
            onAccessTokenFetched(access_token)
          })
      }

      const retryOriginalRequest = new Promise((resolve) => {
        addSubscriber(access_token => {
          //  console.log(access_token)
          //  let token = localStorage.getItem("access_token")
          //  console.log("new Token", token)
          originalRequest.headers.Authorization = `Bearer ${access_token}`
          resolve(axios(originalRequest))
        })
      })

      return retryOriginalRequest;

    }

    return Promise.reject(error)

  })


}