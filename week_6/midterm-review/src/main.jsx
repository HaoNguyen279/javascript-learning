import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import CounterDemo from './CounterDemo.jsx'
import { CounterProvider } from './CounterContext.jsx'
import { Provider } from 'react-redux';
import { store } from './store';
// useContext
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <CounterProvider>
//       <CounterDemo />
//     </CounterProvider>
//     {/* <App /> */}
//   </StrictMode>,
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CounterDemo />
    </Provider>
    {/* <App /> */}
  </StrictMode>,
)