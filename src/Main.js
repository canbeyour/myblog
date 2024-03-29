import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './component/App';
import Home from './pages/Home';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
