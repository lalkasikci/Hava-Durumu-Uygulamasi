import { useState, useEffect } from 'react';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "5ea810521a30bd97942848eab193b9ea";

  const fetchWeather = async (city) => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric&lang=tr`;
      const response = await fetch(url);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Şehir bulunamadı');
        } else {
          throw new Error('Veri alınırken hata oluştu');
        }
      }
      
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  // Varsayılan olarak Ankara'yı yükle
  useEffect(() => {
    fetchWeather('Ankara');
  }, []);

  return { weather, loading, error, fetchWeather };
}