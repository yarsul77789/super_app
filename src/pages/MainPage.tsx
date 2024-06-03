import { FC } from 'react'
import { Stack } from 'react-bootstrap'
import { MainPageHeroBanner } from '../widgets/MainPageHeroBanner'

export const MainPage: FC = () => {
  return (
    <Stack id="error-page" style={{ alignItems: 'center', marginTop: 40 }}>
      <MainPageHeroBanner />
    </Stack>
  )
}