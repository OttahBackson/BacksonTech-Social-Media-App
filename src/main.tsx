import  ReactDOM  from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AuthProvider from './context/AuthContext.js';
import { QueryProvider } from './lib/react-query/QueryProvider.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <QueryProvider>
    <AuthProvider>
        <App />
    </AuthProvider>
    </QueryProvider>
    </BrowserRouter>
)
