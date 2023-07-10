import { Home } from "./pages/home";
import { Providers } from "./providers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Providers>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Providers>
  )
}

export default App
