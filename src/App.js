import React from 'react'
import BodyModule from "./components/Body";

const Body = BodyModule?.default || BodyModule?.BodyHeader || (() => <div>Fallback</div>);

const App = () => {
  return (
    <div><Body /></div>
  )
}

export default App
