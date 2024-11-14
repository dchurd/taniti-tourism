import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Contact() {
  const { language } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emergencyContacts = [
    {
      title: { en: 'Hospital', jp: '病院' },
      contact: '+1 (555) 123-4567',
      address: { 
        en: 'Central Taniti Hospital, 123 Health Avenue',
        jp: 'タニティ中央病院、ヘルスアベニュー123'
      }
    },
    {
      title: { en: 'Police', jp: '警察' },
      contact: '+1 (555) 911-0000',
      address: {
        en: 'Taniti Police HQ, 45 Safety Street',
        jp: 'タニティ警察本部、セーフティストリート45'
      }
    },
    {
      title: { en: 'Tourist Information', jp: '観光案内所' },
      contact: '+1 (555) 999-8888',
      address: {
        en: 'Tourist Center, 78 Welcome Road',
        jp: '観光センター、ウェルカムロード78'
      }
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would submit to a server
    alert(language === 'en' ? 
      'Message sent! We\'ll respond within 24 hours.' : 
      'メッセージが送信されました！24時間以内に返信いたします。'
    );
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">
        {language === 'en' ? 'Contact Us' : 'お問い合わせ'}
      </h1>

      {/* Emergency Contacts */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {language === 'en' ? 'Emergency Contacts' : '緊急連絡先'}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">
                {contact.title[language === 'en' ? 'en' : 'jp']}
              </h3>
              <p className="text-primary font-medium">{contact.contact}</p>
              <p className="text-sm text-gray-600 mt-1">
                {contact.address[language === 'en' ? 'en' : 'jp']}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          {language === 'en' ? 'Send us a Message' : 'メッセージを送る'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">
              {language === 'en' ? 'Name' : '名前'}
            </label>
            <input
              type="text"
              required
              className="w-full border rounded px-3 py-2"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div>
            <label className="block mb-1">
              {language === 'en' ? 'Email' : 'メールアドレス'}
            </label>
            <input
              type="email"
              required
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div>
            <label className="block mb-1">
              {language === 'en' ? 'Subject' : '件名'}
            </label>
            <input
              type="text"
              required
              className="w-full border rounded px-3 py-2"
              value={formData.subject}
              onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
            />
          </div>

          <div>
            <label className="block mb-1">
              {language === 'en' ? 'Message' : 'メッセージ'}
            </label>
            <textarea
              required
              rows="4"
              className="w-full border rounded px-3 py-2"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90"
          >
            {language === 'en' ? 'Send Message' : 'メッセージを送信'}
          </button>
        </form>
      </div>
    </div>
  );
}