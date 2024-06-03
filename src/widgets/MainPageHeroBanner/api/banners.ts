import axios from 'axios'

import { mockedHomePageBanner } from "./banners.mock"
import { API_URL } from '../../../shared/env'

export const getMainPageHeroBanner = async () => {
  const resp = await axios.get('/mainPageBanner', {
    baseURL: API_URL,
  })
  console.log('resp', resp)
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000))
  return mockedHomePageBanner
}