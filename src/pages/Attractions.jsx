import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { attractions } from '../data/mockData';
import { useApp } from '../context/AppContext';
import AttractionCard from '../components/AttractionCard';

export default function Attractions() {
  const [searchParams] = useSearchParams();
  const { language } = useApp();
  const [filters, setFilters] = useState({
    type: '',
    familyFriendly: false,
    priceRange: 'all'
  });

  const filteredAttractions = useMemo(() => {
    return attractions.filter(attraction => {
      if (filters.type && attraction.type !== filters.type) return false;
      if (filters.familyFriendly && !attraction.familyFriendly) return false;
      if (filters.priceRange === 'free' && attraction.price !== 0) return false;
      if (filters.priceRange === 'paid' && attraction.price === 0) return false;
      
      const searchQuery = searchParams.get('search')?.toLowerCase();
      if (searchQuery && !attraction.title.toLowerCase().includes(searchQuery)) {
        return false;
      }
      
      return true;
    });
  }, [filters, searchParams]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        {language === 'en' ? 'Attractions' : 'アトラクション'}
      </h1>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-4 space-y-4">
        <h2 className="font-semibold">
          {language === 'en' ? 'Filters' : 'フィルター'}
        </h2>
        <div className="flex flex-wrap gap-4">
          <select
            value={filters.type}
            onChange={e => setFilters(prev => ({ ...prev, type: e.target.value }))}
            className="border rounded px-3 py-1"
          >
            <option value="">
              {language === 'en' ? 'All Types' : 'すべてのタイプ'}
            </option>
            <option value="beach">
              {language === 'en' ? 'Beaches' : 'ビーチ'}
            </option>
            <option value="adventure">
              {language === 'en' ? 'Adventure' : 'アドベンチャー'}
            </option>
            <option value="cultural">
              {language === 'en' ? 'Cultural' : '文化'}
            </option>
          </select>

          <select
            value={filters.priceRange}
            onChange={e => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
            className="border rounded px-3 py-1"
          >
            <option value="all">
              {language === 'en' ? 'All Prices' : 'すべての価格'}
            </option>
            <option value="free">
              {language === 'en' ? 'Free' : '無料'}
            </option>
            <option value="paid">
              {language === 'en' ? 'Paid' : '有料'}
            </option>
          </select>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.familyFriendly}
              onChange={e => setFilters(prev => ({ ...prev, familyFriendly: e.target.checked }))}
              className="rounded"
            />
            {language === 'en' ? 'Family Friendly' : '家族向け'}
          </label>
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAttractions.map(attraction => (
          <AttractionCard key={attraction.id} attraction={attraction} />
        ))}
      </div>
    </div>
  );
}