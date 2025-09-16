import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import RouteErrorBoundary from "./components/RouteErrorBoundary";

const Home = lazy(() => import("./routes/Home"));
const BookDetails = lazy(() => import("./routes/BookDetails"));
const Favorites = lazy(() => import("./routes/Favorites"));

function App() {
  return (
    <div className="app">
      <RouteErrorBoundary>
        <NavBar />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </Suspense>
        </main>
      </RouteErrorBoundary>
    </div>
  );
}

export default App;
