import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import store from './app/store';
import AppRoute from './routes/AppRoute';
import AppLayout from './layouts/AppLayout';

function Loading() {
  return <h1>Loading...</h1>;
}

function App() {
  return (
    <AppLayout>
      <Provider store={store}>
        <Suspense fallback={<Loading />}>
          <AppRoute />
          <ToastContainer
            position="bottom-right"
            limit={4}
            autoClose={5000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        </Suspense>
      </Provider>
    </AppLayout>
  );
}

export default App;
