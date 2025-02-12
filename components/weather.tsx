"use client";

import React, { useState } from "react";
import { fetchWeather } from "@/app/api/hello/weathter.api";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleFetchWeather = async () => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="mt-2 p-2 border-2 border-blue-500 bg-black rounded"
      />
      <button
        onClick={handleFetchWeather}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Get Weather
      </button>

      {weatherData && (
        <div className="mt-4">
          <h3 className="text-xl">{weatherData.location.name}</h3>
          <p>{weatherData.current.temp_c}°C</p>
          <p>{weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};
