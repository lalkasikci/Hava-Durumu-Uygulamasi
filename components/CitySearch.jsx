import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function CitySearch({ onSearch, loading }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Input
            type="text"
            placeholder="Şehir adı girin..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="pr-10 border-[#454A73]/20 focus:border-[#454A73] text-[#454A73] font-regular"
            disabled={loading}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#454A73]/70" />
        </div>
        <Button 
          type="submit" 
          disabled={loading || !city.trim()}
          className="px-6 bg-[#454A73] hover:bg-[#454A73]/90 text-white font-semibold"
        >
          {loading ? 'Aranıyor...' : 'Ara'}
        </Button>
      </div>
    </form>
  );
}