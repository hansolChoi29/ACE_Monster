import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-1 w-full flex items-center justify-center">
        <Outlet />
      </main>

      <footer className="bg-black border-t border-gray-700 p-4 text-center text-sm">
        © 2025 hansolChoi
      </footer>
    </div>
  );
}
