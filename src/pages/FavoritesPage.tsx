import { FC } from "react";
import { Stack, Button } from 'react-bootstrap'

export const FavoritesPage: FC = () => {
  return (
    <Stack style={{ alignItems: 'center', gap: 10, marginTop: 40 }}>
      You have no favorite items yet
      <Button href="/catalog" variant="dark">
        Explore catalog
      </Button>
    </Stack>
  )
}