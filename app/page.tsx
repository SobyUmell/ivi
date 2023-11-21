import Greating from "./components/greating/greating"
import Quote from "./components/quote/quote";
import Eye from "./components/eye/eye";
import Cards from "./components/cards/cards";

import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
     <Greating />
     <Quote />
     <Eye />
     <Cards />
    </>
    
  )
}
