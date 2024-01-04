import axios from 'axios'
const getJobs = async () => {
  const BASE_URL = import.meta.env.VITE_APP_API_URL
  const URL = `${BASE_URL}/jobs`
  const response = await axios.get(URL)
  return response.data
}

export default getJobs
