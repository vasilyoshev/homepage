import React, { useEffect, useState } from 'react';
import { WeatherWidgetEntry } from 'components';
import { readWeather, readForecast } from 'services';
import { Weather, WeatherWidgetSummaryProps } from 'interfaces';
import styles from './WeatherWidgetSummary.module.scss';

export const WeatherWidgetSummary: React.FC<WeatherWidgetSummaryProps> = ({ location }) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Weather[] | null>(null);

  useEffect(() => {
    (async () => {
      if (location) {
        const [weather, forecast] = await Promise.all([
          readWeather(location.id),
          readForecast(location.id),
        ]);
        setWeather(weather);
        setForecast(forecast);
      }
    })();
  }, [location]);

  if (!location || !weather || !forecast) return null;

  return (
    <section>
      <hr/>
      <h2>{location.name}</h2>
      <WeatherWidgetEntry weather={weather}/>
      <h2>Forecast</h2>
      <section>
        <ol className={styles.summary}>
          {forecast.map((timePoint) =>
            <li className={styles.lists} key={timePoint.dt}>
              <WeatherWidgetEntry weather={timePoint}/>
            </li>,
          )}
        </ol>
      </section>
    </section>
  );
};
