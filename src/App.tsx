import { useEffect, useState } from 'react';
import LoadingPage from './components/LoadingPage';
import Login from './pages/auth/Login';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  return <Login />;
};

export default App;
