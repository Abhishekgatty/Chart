import ThemeProvider from './layout/provider/Theme';
import Router from './router';
import './assets/scss/bundle.scss';
import './assets/scss/app.scss';

function App() {

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  )
}

export default App
