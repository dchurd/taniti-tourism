import { Link } from 'react-router-dom';
import WeatherWidget from '../components/WeatherWidget';
import { useApp } from '../context/AppContext';
import { attractions } from '../data/mockData';

export default function Home() {
  const { language } = useApp();

  const quickLinks = [
    {
      title: language === 'en' ? 'Family Activities' : '家族向けアクティビティ',
      link: '/attractions?filter=family',
      price: 'From $50/person'
    },
    {
      title: language === 'en' ? 'Events Calendar' : 'イベントカレンダー',
      link: '/events',
      subtitle: language === 'en' ? 'Holiday Schedule' : '休日スケジュール'
    },
    {
      title: language === 'en' ? 'Transportation' : '交通',
      link: '/transportation',
      price: 'Starting at $20'
    },
    {
      title: language === 'en' ? 'Local Guide' : 'ローカルガイド',
      link: '/guide',
      subtitle: language === 'en' ? 'Tips & Culture' : 'ヒントと文化'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {language === 'en' ? 'Welcome to Taniti' : 'タニティへようこそ'}
            </h1>
            <p className="text-xl">
              {language === 'en' 
                ? 'Discover Paradise in the Pacific' 
                : '太平洋の楽園を発見しよう'}
            </p>
          </div>
        </div>
      </div>

      {/* Weather and Updates */}
      <div className="grid md:grid-cols-2 gap-4">
        <WeatherWidget />
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold mb-2">
            {language === 'en' ? 'Key Updates' : '重要な更新'}
          </h3>
          <p>
            {language === 'en' 
              ? 'Airport expansion in progress. New flights coming soon!' 
              : '空港の拡張が進行中。新しいフライトが間もなく就航！'}
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h3 className="font-bold mb-2">{link.title}</h3>
            {link.price && <p className="text-sm text-gray-600">{link.price}</p>}
            {link.subtitle && <p className="text-sm text-gray-600">{link.subtitle}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}