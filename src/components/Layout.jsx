import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">© 2024 Taniti Tourism</p>
        </div>
      </footer>
    </div>
  );
}