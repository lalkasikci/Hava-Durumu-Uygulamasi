import { WeatherCard } from './components/WeatherCard';
import { WeatherMetrics } from './components/WeatherMetrics';
import { HourlyChart } from './components/HourlyChart';
import { DetailedChart } from './components/DetailedChart';
import { CitySearch } from './components/CitySearch';
import { ErrorMessage } from './components/ErrorMessage';
import { WeatherSkeleton } from './components/WeatherSkeleton';
import { useWeather } from './hooks/useWeather';

export default function App() {
  const { weather, loading, error, fetchWeather } = useWeather();

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  const formatLastMeasurement = (timestamp) => {
    const now = Date.now();
    const diff = now - (timestamp * 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (minutes < 60) {
      return `Son Ölçüm: ${minutes} Dakika Önce`;
    } else {
      const hours = Math.floor(minutes / 60);
      return `Son Ölçüm: ${hours} Saat Önce`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Status Bar */}
      <div className="bg-white px-4 py-2 flex justify-between items-center text-sm">
        <span>3:30</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <div className="ml-2 flex gap-1">
            <div className="w-4 h-2 border border-black rounded-sm">
              <div className="w-full h-full bg-black rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 max-w-sm mx-auto">
        <CitySearch onSearch={handleSearch} loading={loading} />
        
        {error && (
          <ErrorMessage 
            message={error} 
            onRetry={() => fetchWeather('Ankara')} 
          />
        )}
        
        {loading && <WeatherSkeleton />}
        
        {weather && !loading && (
          <>
            <WeatherCard 
              location={`${weather.name}`}
              temperature={weather.main.temp}
              condition={weather.weather[0].description}
              lastMeasurement={formatLastMeasurement(weather.dt)}
              humidity={weather.main.humidity}
              weatherIcon={weather.weather[0].icon}
            />
            
            <WeatherMetrics 
              humidity={weather.main.humidity}
              pressure={weather.main.pressure}
              windSpeed={weather.wind.speed}
              windDirection={weather.wind.deg || 0}
              visibility={weather.visibility}
              feelsLike={weather.main.feels_like}
            />
            
            <HourlyChart />
            
            <DetailedChart />
          </>
        )}
      </div>
    </div>
  );
}