import React, { useState } from "react";
import PageCard from "./components/PageCard";
import Navbar from "./components/Navbar";
import ThemeProvider from "./theme";
import Home from "./pages/Home";
import "./App.css";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");
  const [data, setData] = useState();

  return (
    <ThemeProvider>
      <div className="App">
        <Home
          setData={setData}
          setOpenCard={setOpen}
          setMenu={setMenu}
          query={query}
          setQuery={setQuery}
        />
        <Navbar changeMenu={setMenu} changeOpen={setOpen} />
        {menu && menu !== "home" && (
          <PageCard changeMenu={setMenu} etatOpen={open} changeOpen={setOpen}>
            <SearchResultsPage
              data={data}
              setData={setData}
              query={query}
              setQuery={setQuery}
            />
          </PageCard>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
