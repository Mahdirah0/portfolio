import { useRouteError } from 'react-router-dom';
import { Header } from '../components/Header';

export const ErrorPage = () => {
  const error: any = useRouteError();

  return (
    <div className='h-screen relative'>
      <Header />

      <div
        id='error-page'
        style={{
          transform: 'translate(-50%)',
        }}
        className='absolute top-1/2 left-1/2 space-y-4 flex items-center justify-center flex-col'
      >
        <h1 className='font-bold text-4xl'>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>Page {error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};
