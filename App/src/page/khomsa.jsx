import React from "react";
import Navbar from "../component/navbar";
import Hero from "../component/Hero";
import NewCollection from "../component/NewCollection";
import Collection from "../component/Collection";

function khomsa() {
  return (
    <>
      <html lang="en" className="!scroll-smooth">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body>
          <Navbar />
          <Hero />
          <NewCollection />
          <Collection />
          <footer className="my-10 text-center text-gray-500">
            <p>&copy; 2023 SeniCrew. All rights reserved.</p>
          </footer>
        </body>
      </html>
    </>
  );
}

export default khomsa;
