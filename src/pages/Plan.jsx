import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Plan() {
  const { language } = useApp();
  const [selectedDates, setSelectedDates] = useState({ arrival: '', departure: '' });
  
  const planningTips = [
    {
      title: { en: 'Best Time to Visit', jp: '最適な訪問時期' },
      content: { 
        en: 'Peak season is June to August. For fewer crowds, consider visiting in April-May or September-October.',
        jp: 'ピークシーズンは6月から8月です。混雑を避けるには、4月-5月または9月-10月の訪問をお勧めします。'
      }
    },
    {
      title: { en: 'Local Transportation', jp: '現地交通機関' },
      content: {
        en: 'Public buses run 5AM-11PM daily. Rental cars available at airport. Bikes can be rented in Taniti City.',
        jp: '公共バスは毎日午前5時から午後11時まで運行。空港でレンタカー可能。タニティ市内で自転車レンタル可能。'
      }
    },
    {
      title: { en: 'Currency & Payments', jp: '通貨と支払い' },
      content: {
        en: 'US Dollars accepted everywhere. Major credit cards widely accepted. ATMs available in Taniti City.',
        jp: '米ドルはどこでも使用可能。主要クレジットカード利用可能。タニティ市内にATMあり。'
      }
    }
  ];

  const holidays = [
    { date: '2024-01-01', en: 'New Year\'s Day', jp: '元日' },
    { date: '2024-05-01', en: 'Taniti Founding Day', jp: 'タニティ建国記念日' },
    { date: '2024-07-15', en: 'Ocean Festival', jp: '海の祭り' },
    { date: '2024-12-25', en: 'Christmas', jp: 'クリスマス' }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        {language === 'en' ? 'Plan Your Trip' : '旅行を計画する'}
      </h1>

      {/* Trip Planner */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {language === 'en' ? 'Trip Dates' : '旅行日程'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">
              {language === 'en' ? 'Arrival Date' : '到着日'}
            </label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={selectedDates.arrival}
              onChange={(e) => setSelectedDates(prev => ({ ...prev, arrival: e.target.value }))}
            />
          </div>
          <div>
            <label className="block mb-2">
              {language === 'en' ? 'Departure Date' : '出発日'}
            </label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2"
              value={selectedDates.departure}
              onChange={(e) => setSelectedDates(prev => ({ ...prev, departure: e.target.value }))}
            />
          </div>
        </div>
      </div>

      {/* Planning Tips */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {planningTips.map((tip, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6">
            <h3 className="font-semibold mb-2">
              {tip.title[language === 'en' ? 'en' : 'jp']}
            </h3>
            <p className="text-gray-600">
              {tip.content[language === 'en' ? 'en' : 'jp']}
            </p>
          </div>
        ))}
      </div>

      {/* Holiday Calendar */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {language === 'en' ? 'Local Holidays' : '現地の祝日'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {holidays.map((holiday, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <span>{holiday[language === 'en' ? 'en' : 'jp']}</span>
              <span className="text-gray-600">{holiday.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}