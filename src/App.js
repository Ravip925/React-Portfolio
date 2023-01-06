import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import { theme } from './Theme';
import AboutMe from './Pages/AboutMe';
import Resume from './Pages/Resume';
import MyProjects from './Pages/MyProjects';
import ContactMe from './Pages/ContactMe';
import GlobalStyle from './Components/GlobalStyle';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' element={<AboutMe/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/projects' element={<MyProjects/>}/>
      <Route path='/contact' element={<ContactMe/>}/>
    </Routes>
  </ThemeProvider>
);

export default App;
