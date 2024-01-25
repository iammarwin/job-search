import axios from 'axios'

import type { Degree } from '@/api/types'
const getDegrees = async () => {
  const BASE_URL = import.meta.env.VITE_APP_API_URL
  const URL = `${BASE_URL}/degrees`
  const response = await axios.get<Degree[]>(URL)
  return response.data
}

export default getDegrees
