import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/listings'); // Redirect to the desired route instantly
  }, []);

  return null; // You can also return a loading component or custom content if needed
};

export default ErrorPage;
