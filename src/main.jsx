import GlobalStyles from './components/GlobalStyles/GlobalStyles.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <GlobalStyles>
    <App />
  </GlobalStyles>
  // </React.StrictMode>
)
