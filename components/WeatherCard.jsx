import { Cloud, CloudRain, Sun, CloudSnow } from 'lucide-react';

export function WeatherCard({ location, temperature, condition, lastMeasurement, humidity, weatherIcon }) {
  
  const getWeatherIcon = (iconCode) => {
    const iconMap = {
      '01d': Sun, '01n': Sun, // clear sky
      '02d': Cloud, '02n': Cloud, // few clouds
      '03d': Cloud, '03n': Cloud, // scattered clouds
      '04d': Cloud, '04n': Cloud, // broken clouds
      '09d': CloudRain, '09n': CloudRain, // shower rain
      '10d': CloudRain, '10n': CloudRain, // rain
      '11d': CloudRain, '11n': CloudRain, // thunderstorm
      '13d': CloudSnow, '13n': CloudSnow, // snow
      '50d': Cloud, '50n': Cloud, // mist
    };
    
    return iconMap[iconCode] || CloudRain;
  };

  const WeatherIcon = getWeatherIcon(weatherIcon);
  
  // Hava kalitesi için basit bir hesaplama (nem ve sıcaklık bazlı)
  const calculateAirQuality = (humidity, temp) => {
    // Basit bir hava kalitesi simülasyonu
    const score = Math.max(10, Math.min(100, 100 - (humidity * 0.3) - Math.abs(temp - 20) * 2));
    return Math.round(score);
  };

  const airQuality = calculateAirQuality(humidity, temperature);
  const airQualityPercentage = airQuality;

  return (
    <>
      {/* Ana hava durumu kartı */}
      <div className="bg-white rounded-xl p-6 mb-4 shadow-sm">
        <div className="text-center">
          <h2 className="text-[#454A73] font-semibold text-lg mb-6">{location}</h2>
          
          <div className="flex flex-col items-center mb-6">
            <WeatherIcon className="w-16 h-16 text-[#454A73] mb-4" />
            <div className="text-center">
              <span className="text-5xl font-semibold text-[#454A73] block mb-2">{Math.round(temperature)}°C</span>
              <p className="text-[#454A73] font-regular text-sm capitalize">{condition}</p>
            </div>
          </div>
          
          <p className="text-[#454A73]/70 font-regular text-sm">{lastMeasurement}</p>
        </div>
      </div>

      {/* Hava kalitesi kartı */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                />
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="#454A73"
                  strokeWidth="2"
                  strokeDasharray={`${airQualityPercentage}, 100`}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[#454A73] font-semibold text-2xl">{airQuality}</span>
              </div>
            </div>
            <h3 className="text-[#454A73] font-semibold text-lg">Hava Kalitesi</h3>
            <p className="text-[#454A73]/70 font-regular text-sm">İyi</p>
          </div>
        </div>
      </div>
    </>
  );
}