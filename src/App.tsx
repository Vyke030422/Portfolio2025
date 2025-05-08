import {Routes, Route} from 'react-router';
import HomePage from './pages/homepage';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  );
}