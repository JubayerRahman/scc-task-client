import axios from 'axios'

const AxiosData = axios.create({
    // baseURL: "http://localhost:5000"
    baseURL: "https://task-manager-server-smoky.vercel.app"
})
const useAxios = () => {
  return AxiosData
}

export default useAxios