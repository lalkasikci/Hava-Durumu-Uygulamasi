function MetricCard({ title, value, subtitle, circularProgress, color = "#454A73" }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="text-center">
        {circularProgress !== undefined ? (
          <div className="mb-3">
            <div className="relative w-16 h-16 mx-auto">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3"
                />
                <path
                  d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                  fill="none"
                  stroke={color}
                  strokeWidth="3"
                  strokeDasharray={`${circularProgress}, 100`}
                />
              </svg>
            </div>
          </div>
        ) : null}
        
        <h3 className="text-[#454A73] font-semibold text-sm mb-1">{title}</h3>
        <p className="text-[#454A73] font-semibold text-xl">{value}</p>
        {subtitle && <p className="text-[#454A73]/70 font-regular text-sm">{subtitle}</p>}
      </div>
    </div>
  );
}

export function WeatherMetrics({ 
  humidity, 
  pressure, 
  windSpeed, 
  windDirection, 
  visibility, 
  feelsLike 
}) {
  
  // Rüzgar yönünü derece cinsinden Türkçe yöne çevir
  const getWindDirection = (degrees) => {
    const directions = [
      'Kuzey', 'Kuzeydoğu', 'Doğu', 'Güneydoğu', 
      'Güney', 'Güneybatı', 'Batı', 'Kuzeybatı'
    ];
    return directions[Math.round(degrees / 45) % 8];
  };

  // UV indeksi simülasyonu (görünürlük ve saate göre)
  const getUVIndex = (visibility) => {
    const hour = new Date().getHours();
    if (hour < 8 || hour > 18) return { value: 0, level: 'Düşük' };
    
    const baseUV = Math.min(8, Math.max(1, (visibility / 1000) * 3));
    const level = baseUV < 3 ? 'Düşük' : baseUV < 6 ? 'Orta' : 'Yüksek';
    
    return { value: baseUV.toFixed(1), level };
  };

  const uvData = getUVIndex(visibility);

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <MetricCard 
        title="UV İndeksi" 
        value={uvData.value} 
        subtitle={uvData.level}
        circularProgress={parseFloat(uvData.value) * 12.5}
        color="#454A73"
      />
      
      {/* Nem kartını rüzgar kartı gibi yap */}
      <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-[#454A73] font-semibold text-sm mb-1">Nem Miktarı</h3>
          <p className="text-[#454A73] font-semibold text-xl">%{humidity}</p>
        </div>
      </div>
      
      <MetricCard 
        title="Basınç" 
        value={`${pressure} hPa`}
      />
      
      <div className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-[#454A73] font-semibold text-sm mb-1">Rüzgar</h3>
          <p className="text-[#454A73] font-semibold text-xl">{Math.round(windSpeed * 3.6)} km/h</p>
          <p className="text-[#454A73]/70 font-regular text-sm">{getWindDirection(windDirection)}</p>
        </div>
      </div>
    </div>
  );
}