import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { attractions } from '../data/mockData';
import { useApp } from '../context/AppContext';

export default function AttractionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useApp();
  const attraction = attractions.find(a => a.id === parseInt(id));
  
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    people: 1
  });

  if (!attraction) {
    return <div>Attraction not found</div>;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    // In a real app, this would submit to a server
    alert(language === 'en' ? 
      'Booking confirmed!' : 
      '予約が確認されました！'
    );
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <img 
          src={attraction.image} 
          alt={attraction.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{attraction.title}</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p>{attraction.description}</p>
              
              <div>
                <h3 className="font-semibold">
                  {language === 'en' ? 'Hours' : '営業時間'}
                </h3>
                <p>{attraction.hours}</p>
              </div>
              
              <div>
                <h3 className="font-semibold">
                  {language === 'en' ? 'Location' : '場所'}
                </h3>
                <p>{attraction.location}</p>
              </div>
              
              <div>
                <h3 className="font-semibold">
                  {language === 'en' ? 'Transportation' : '交通手段'}
                </h3>
                <ul className="list-disc list-inside">
                  {attraction.transportation.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-4">
                {language === 'en' ? 'Book Now' : '今すぐ予約'}
              </h2>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block mb-1">
                    {language === 'en' ? 'Date' : '日付'}
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full border rounded px-3 py-2"
                    value={booking.date}
                    onChange={e => setBooking(prev => ({ ...prev, date: e.target.value }))}
                  />
                </div>
                
                <div>
                  <label className="block mb-1">
                    {language === 'en' ? 'Time' : '時間'}
                  </label>
                  <select
                    required
                    className="w-full border rounded px-3 py-2"
                    value={booking.time}
                    onChange={e => setBooking(prev => ({ ...prev, time: e.target.value }))}
                  >
                    <option value="">Select time</option>
                    <option value="09:00">09:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-1">
                    {language === 'en' ? 'Number of People' : '人数'}
                  </label>
                  <input
                    type="number"
                    min="1"
                    required
                    className="w-full border rounded px-3 py-2"
                    value={booking.people}
                    onChange={e => setBooking(prev => ({ ...prev, people: e.target.value }))}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90"
                >
                  {language === 'en' ? 'Confirm Booking' : '予約を確認'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}