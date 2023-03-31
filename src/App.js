import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import './App.css';
import { useTranslation } from 'react-i18next';
import Home from './app/pages/Home/Loadable';
import ThemeCustomization from './themes';
import Router from './routes';

function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeCustomization>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeCustomization>
  );
}

export default App;
