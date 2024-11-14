import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const { language, toggleLanguage } = useApp();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/attractions?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navItems = [
    { title: language === 'en' ? 'Home' : 'ホーム', path: '/' },
    { title: language === 'en' ? 'Activities' : 'アクティビティ', path: '/attractions' },
    { title: language === 'en' ? 'Plan' : '計画', path: '/plan' },
    { title: language === 'en' ? 'Contact' : '連絡先', path: '/contact' }
  ];

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-primary text-white font-bold px-4 py-2 rounded">
              TANITI
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Search and Language */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden md:flex">
              <input
                type="search"
                placeholder={language === 'en' ? 'Search...' : '検索...'}
                className="px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-r hover:bg-primary/90"
              >
                {language === 'en' ? 'Search' : '検索'}
              </button>
            </form>
            
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 border rounded hover:bg-gray-100"
            >
              {language === 'en' ? 'EN' : 'JP'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}