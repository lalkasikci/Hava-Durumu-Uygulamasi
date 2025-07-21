export function HourlyChart() {
  const hourlyData = [
    { time: '09:00', rain: 8 },
    { time: '11:00', rain: 12 },
    { time: '14:00', rain: 15 },
    { time: '17:00', rain: 25 },
    { time: '19:00', rain: 14 },
    { time: '21:00', rain: 19 },
    { time: '23:00', rain: 32 }
  ];

  const maxValue = Math.max(...hourlyData.map(d => d.rain));

  return (
    <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
      <div className="mb-4">
        <h3 className="text-[#454A73] font-semibold text-lg">Saatlik Yağış</h3>
      </div>
      
      <div className="relative h-40">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-[#454A73]/70 font-regular">
          <span>40</span>
          <span>30</span>
          <span>20</span>
          <span>10</span>
          <span>0</span>
        </div>
        
        {/* Chart area */}
        <div className="ml-8 h-full flex items-end justify-between gap-2">
          {hourlyData.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-[#454A73] rounded-t-sm"
                style={{ 
                  height: `${(item.rain / maxValue) * 100}%`,
                  minHeight: '4px'
                }}
              />
              <span className="text-xs text-[#454A73]/70 font-regular mt-2">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}