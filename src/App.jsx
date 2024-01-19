import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import cities from "../data/cities.json";
import Form from "./components/Form";
import { Navigate } from "react-router-dom";

const BASE_URL = "http://localhost:9000";

const App = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);

        const data = await res.json();
        setCities(data);
      } catch {
        alert("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  /* useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);

        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const data = await res.json();
        setCities(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching cities:", error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []); */
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="country"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
