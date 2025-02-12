const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "http://api.weatherapi.com/v1";

export const fetchWeather = async (city: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
