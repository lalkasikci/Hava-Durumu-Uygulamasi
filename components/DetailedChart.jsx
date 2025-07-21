export function DetailedChart() {
  const timeLabels = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
  
  // Simulated data points (0-100 scale for easy percentage calculation)
  const sicaklikData = [90, 85, 80, 75, 70, 68, 65, 70, 75, 80, 85, 90];
  const nemData = [60, 55, 50, 45, 40, 38, 35, 40, 45, 50, 55, 60];
  const ruzgarData = [30, 35, 40, 45, 50, 55, 60, 55, 50, 45, 40, 35];

  const createPath = (data) => {
    const width = 280;
    const height = 60;
    const stepX = width / (data.length - 1);
    
    return data.map((point, index) => {
      const x = index * stepX;
      const y = height - (point / 100) * height;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-[#454A73] font-semibold text-lg">Detaylı Grafik</h3>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#454A73]"></div>
          <span className="text-xs text-[#454A73] font-regular">Sıcaklık</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#454A73]/70"></div>
          <span className="text-xs text-[#454A73] font-regular">Nem</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#454A73]/40"></div>
          <span className="text-xs text-[#454A73] font-regular">Rüzgar</span>
        </div>
      </div>
      
      {/* Chart */}
      <div className="relative">
        <svg viewBox="0 0 300 80" className="w-full h-20">
          {/* Sıcaklık line */}
          <path
            d={createPath(sicaklikData)}
            fill="none"
            stroke="#454A73"
            strokeWidth="2"
          />
          
          {/* Nem line */}
          <path
            d={createPath(nemData)}
            fill="none"
            stroke="rgba(69, 74, 115, 0.7)"
            strokeWidth="2"
          />
          
          {/* Rüzgar line */}
          <path
            d={createPath(ruzgarData)}
            fill="none"
            stroke="rgba(69, 74, 115, 0.4)"
            strokeWidth="2"
          />
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-2 px-2">
          {timeLabels.map((label, index) => (
            <span key={index} className="text-xs text-[#454A73]/70 font-regular transform -rotate-45 origin-left">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}