import { useState } from 'react';
import { weatherData } from '../data/mockData';
import { useApp } from '../context/AppContext';

export default function WeatherWidget() {
  const [showForecast, setShowForecast] = useState(false);
  const { language } = useApp();

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div 
        className="cursor-pointer"
        onClick={() => setShowForecast(!showForecast)}
      >
        <h3 className="font-bold mb-2">
          {language === 'en' ? 'Current Weather' : '現在の天気'}
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl">{weatherData.current.temp}°C</p>
            <p>{weatherData.current.condition}</p>
          </div>
          <button className="text-primary hover:underline">
            {language === 'en' ? '5-Day Forecast' : '5日間の予報'}
          </button>
        </div>
      </div>

      {showForecast && (
        <div className="mt-4 pt-4 border-t">
          <div className="grid grid-cols-5 gap-2 text-center">
            {weatherData.forecast.map((day) => (
              <div key={day.day}>
                <p className="font-bold">{day.day}</p>
                <p>{day.temp}°C</p>
                <p className="text-sm">{day.condition}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}