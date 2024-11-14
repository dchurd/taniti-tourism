export const attractions = [
    {
      id: 1,
      title: 'Yellow Leaf Bay Beach',
      type: 'beach',
      price: 0,
      familyFriendly: true,
      description: 'A beautiful white sandy beach perfect for families.',
      image: '/api/placeholder/400/300',
      hours: '24/7',
      location: 'Northern Coast',
      transportation: ['Bus', 'Taxi', 'Rental Car'],
      weather: 'Best visited during morning hours'
    },
    {
      id: 2,
      title: 'Active Volcano Tours',
      type: 'adventure',
      price: 75,
      familyFriendly: false,
      description: 'Guided tours of Taniti\'s active volcano.',
      image: '/api/placeholder/400/300',
      hours: '9:00 AM - 4:00 PM',
      location: 'Central Taniti',
      transportation: ['Tour Bus', 'Guided Tour Only'],
      weather: 'Tours depend on volcanic activity'
    },
    {
      id: 3,
      title: 'Local History Museum',
      type: 'cultural',
      price: 15,
      familyFriendly: true,
      description: 'Learn about Taniti\'s rich cultural heritage.',
      image: '/api/placeholder/400/300',
      hours: '10:00 AM - 6:00 PM',
      location: 'Taniti City',
      transportation: ['Public Bus', 'Walking from City Center'],
      weather: 'Indoor activity'
    }
  ];
  
  export const weatherData = {
    current: {
      temp: 28,
      condition: 'Sunny',
      humidity: 65
    },
    forecast: [
      { day: 'Mon', temp: 28, condition: 'Sunny' },
      { day: 'Tue', temp: 27, condition: 'Partly Cloudy' },
      { day: 'Wed', temp: 29, condition: 'Sunny' },
      { day: 'Thu', temp: 26, condition: 'Rain' },
      { day: 'Fri', temp: 27, condition: 'Cloudy' }
    ]
  };