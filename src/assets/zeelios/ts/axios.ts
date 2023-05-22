import router from '../../../router'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

// Set Default Headers
const setDefaultHeaders = () => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  } else {
    delete axiosInstance.defaults.headers.common['Authorization']
  }
}

const handleInvalidAccessToken = () => {
  // Remove from localstorage
  localStorage.removeItem('accessToken')
  // Remove from axios header
  delete axiosInstance.defaults.headers.common['Authorization']
  // Redirect to login page
  router.push('/login')
}

// Run the function to set default header on initial load
setDefaultHeaders()

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Invalid access Token - Redirect to login page
      handleInvalidAccessToken()
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
