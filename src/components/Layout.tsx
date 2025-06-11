import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full bg-black">
        <Outlet />
      </main>

      <footer className="bg-gray-50 border-t p-4 text-center text-sm">© 2025 hansolChoi</footer>
    </div>
  );
}
