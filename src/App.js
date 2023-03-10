import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />;
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;