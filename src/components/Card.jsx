import React from "react";
import { useState } from "react";
import Form from "./Form";
import CardDetail from "./CardDetail";
import api from '../../api/api.js'

const Card = () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?appid=${api}&lang=es`;
  let cityUrl = "&q=";

  let urlFcaste = `https://api.openweathermap.org/data/2.5/forecast?appid=${api}&lang=es`;

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(false);
  const [location, setLocation] = useState("");

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    //weather

    url = url + cityUrl + loc;

    await fetch(url)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
        console.log(weatherData)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setCard(false);
      });

    //forecast

    urlFcaste = urlFcaste + cityUrl + loc;

    await fetch(urlFcaste)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json();
      })
      .then((dataForecast) => {
        setForecast(dataForecast);
        console.log(dataForecast)

        setLoading(false);
        setCard(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setCard(false);
      });
  };

  return (
    <>
      <Form newLocation={getLocation} />
      <CardDetail 
        showCard={card}
        loadingCard={loading}
        weather={weather}
        forecast={forecast}
      />
    </>
  );
};

export default Card;
