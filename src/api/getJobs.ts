import axios from 'axios'

import type { Job } from '@/api/types'
const getJobs = async () => {
  const BASE_URL = import.meta.env.VITE_APP_API_URL
  const URL = `${BASE_URL}/jobs`
  const response = await axios.get<Job[]>(URL)
  return response.data
}

export default getJobs
