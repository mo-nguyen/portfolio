import { useRouteError } from "react-router";

import React from 'react'

function ErrorPage() {
    const error = useRouteError();
  return (
    <div>
        <h1>{error.statusText || 'Unexpected Error'}</h1>
        <p>{error.message || 'Unexpected Error'}</p>
    </div>
  )
}

export default ErrorPage