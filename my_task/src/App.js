import './App.css';
import { NavigationBar } from './components/Navbar';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Input_Form} from './components/Form';
import {Footer} from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Input_Form/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
