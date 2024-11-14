import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function AttractionCard({ attraction }) {
  const { language, favorites, toggleFavorite } = useApp();
  const isFavorite = favorites.includes(attraction.id);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="relative">
        <img 
          src={attraction.image} 
          alt={attraction.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(attraction.id);
          }}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100"
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{attraction.title}</h3>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">{attraction.description}</p>
          <p className="text-sm">
            {language === 'en' ? 'Price: ' : '料金: '}
            {attraction.price === 0 ? 
              (language === 'en' ? 'Free' : '無料') : 
              `$${attraction.price}`}
          </p>
          {attraction.familyFriendly && (
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              {language === 'en' ? 'Family Friendly' : '家族向け'}
            </span>
          )}
        </div>
        
        <Link
          to={`/attraction/${attraction.id}`}
          className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90"
        >
          {language === 'en' ? 'View Details' : '詳細を見る'}
        </Link>
      </div>
    </div>
  );
}