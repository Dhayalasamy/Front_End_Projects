import React from "react"
import { useRouteError } from "react-router-dom";

function NotFoundRoute(){
    const error = useRouteError();
    console.log(error);
  
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <h4 className="text-center font-bold text-4xl">This page is unavailable, double check your URL.</h4>
      </main>
    );
}

export default NotFoundRoute;