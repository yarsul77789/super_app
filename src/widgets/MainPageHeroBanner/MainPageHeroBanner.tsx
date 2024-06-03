import { FC, useEffect, useState } from "react";
import { getMainPageHeroBanner } from "./api/banners";
import { HomePageBanner } from "./model/types/banners";
import { Button, Spinner, Stack } from "react-bootstrap";

import './MainPageHeroBanner.scss'

export const MainPageHeroBanner: FC = () => {
  const [banner, setBanner] = useState<HomePageBanner>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getMainPageHeroBanner()
      .then((banner) => {
        setBanner(banner)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <Stack className="align-items-center justify-content-center" style={{ minHeight: 800, position: 'relative' }}>
      {loading
        ? <Spinner animation="border" variant="primary" />
        : (
          <Stack>
            <img src={banner?.imageUrl} alt={banner?.title} className="w-100"></img>
            <div className="bannerInfoContainer">
              <div className="bannerInfo">
                {banner?.description}
                <div className='actionsContainer'>
                  <Button>Watch</Button>
                  <Button>Add to Favorites</Button>
                </div>
              </div>
            </div>
          </Stack>
        )
      }
    </Stack>
  )
}