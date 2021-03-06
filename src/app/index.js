import React, { lazy, Suspense, useEffect, createContext, useReducer, Fragment } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import { Transition, TransitionGroup, config as transitionConfig } from 'react-transition-group';
import classNames from 'classnames';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from 'components/Header';
import { theme, tokens, createThemeProperties } from 'app/theme';
import { media, msToNum } from 'utils/style';
import { useLocalStorage, usePrefersReducedMotion } from 'hooks';
import GothamBook from 'assets/fonts/gotham-book.woff2';
import GothamMedium from 'assets/fonts/gotham-medium.woff2';
import { initialState, reducer } from 'app/reducer';
import { reflow } from 'utils/transition';
import './index.css';

const Home = lazy(() => import('pages/Home'));
const Page404 = lazy(() => import('pages/404'));

export const AppContext = createContext();
export const TransitionContext = createContext();

export const fontStyles = `
  @font-face {
    font-family: "Gotham";
    font-weight: 400;
    src: url(${GothamBook}) format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Gotham";
    font-weight: 500;
    src: url(${GothamMedium}) format("woff2");
    font-display: swap;
  }
`;

const App = () => {
  const [storedTheme] = useLocalStorage('theme', 'light');
  const [state, dispatch] = useReducer(reducer, initialState);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      transitionConfig.disabled = true;
    } else {
      transitionConfig.disabled = false;
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    dispatch({ type: 'setTheme', value: theme[storedTheme] });
  }, [storedTheme]);

  return (
    <HelmetProvider>
      <AppContext.Provider value={{ ...state, dispatch }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppContext.Provider>
    </HelmetProvider>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Fragment>
      <Helmet>
        <link rel="canonical" href={`https://lorenzochiana.com${pathname}`} />
        <link rel="preload" href={GothamMedium} as="font" crossorigin="" />
        <link rel="preload" href={GothamBook} as="font" crossorigin="" />
        <style>{fontStyles}</style>
        <style>{globalStyles}</style>
      </Helmet>
      <a className="skip-to-main" href="#MainContent">
        Skip to main content
      </a>
      <Header location={location} />
      <TransitionGroup component="main" className="app" tabIndex={-1} id="MainContent">
        <Transition
          key={pathname}
          timeout={msToNum(tokens.base.durationS)}
          onEnter={reflow}
        >
          {status => (
            <TransitionContext.Provider value={{ status }}>
              <div className={classNames('app__page', `app__page--${status}`)}>
                <Suspense fallback={<Fragment />}>
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route component={Page404} />
                  </Switch>
                </Suspense>
              </div>
            </TransitionContext.Provider>
          )}
        </Transition>
      </TransitionGroup>
    </Fragment>
  );
};

export const globalStyles = `
  :root {
    ${createThemeProperties(tokens.base)}
  }

  @media (max-width: ${media.laptop}px) {
    :root {
      ${createThemeProperties(tokens.laptop)}
    }
  }

  @media (max-width: ${media.tablet}px) {
    :root {
      ${createThemeProperties(tokens.tablet)}
    }
  }

  @media (max-width: ${media.mobile}px) {
    :root {
      ${createThemeProperties(tokens.mobile)}
    }
  }

  @media (max-width: ${media.mobileS}px) {
    :root {
      ${createThemeProperties(tokens.mobileS)}
    }
  }

  .dark {
    ${createThemeProperties(theme.light)}
  }

  .light {
    ${createThemeProperties(theme.light)}
  }
`;

export default App;
