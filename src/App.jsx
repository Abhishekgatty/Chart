import ThemeProvider from './layout/provider/Theme';
import Router from './router';
import './assets/scss/bundle.scss';
import './assets/scss/app.scss';
import { AuthProvider } from './store/AuthContext';


function App() {

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
