const API_KEY = "62da8bc718ef47af89494515251202";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";

export const fetchWeather = async (city: string) => {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${city}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
