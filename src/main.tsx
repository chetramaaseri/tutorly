import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.tsx'
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux/store.ts';
import { loadSession } from './redux/slices/sessionSlice.ts';

function AppInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const initializeApp = async () => {
      await dispatch(loadSession());
    };
    initializeApp();
  }, [dispatch]);

  return <>{children}</>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppInitializer>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppInitializer>
    </Provider>
  </StrictMode>,
)
