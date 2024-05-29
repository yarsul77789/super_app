import { FC } from "react";
import { useRouteError } from "react-router-dom";
import { Stack, Button } from 'react-bootstrap'

export const ErrorPage: FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Stack id="error-page" style={{ alignItems: 'center', marginTop: 40 }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button as='a' href="/" variant="light">
        Back to home
      </Button>
    </Stack>
  );
}