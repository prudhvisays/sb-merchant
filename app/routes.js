// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas, redirectToLogin, redirectToDashboard } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return {
    getComponent(nextState, cb) {
      const importModules = Promise.all([
        import('containers/App/sagas'),
        import('containers/App'),
      ]);
      const renderRoute = loadModule(cb);

      importModules.then(([sagas, component]) => {
        injectSagas(sagas.default);
       renderRoute(component);
      });

      importModules.catch(errorLoading);
    },

    childRoutes: [
      {
        onEnter: redirectToLogin,
        path: '/',
        name: 'home',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
          import('containers/HomePage/reducer'),
          import('containers/HomePage/sagas'),
          import('containers/HomePage'),
        ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, sagas, component]) => {
            injectReducer('home', reducer.default);
            injectSagas(sagas.default);

            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      {
        onEnter: redirectToLogin,
        path: '/profile',
        name: 'profile',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
          import('containers/ProfilePage'),
        ]);

          const renderRoute = loadModule(cb);

          importModules.then(([component]) => {
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      {
        onEnter: redirectToDashboard,
        path: '/order/order-status/:slug',
        name: 'webhook',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
          import('containers/WebhookPage'),
        ]);

          const renderRoute = loadModule(cb);

          importModules.then(([component]) => {
            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      {
        onEnter: redirectToDashboard,
        path: '/login',
        name: 'merchant',
        getComponent(nextState, cb) {
          const importModules = Promise.all([
          import('containers/AuthPage/reducer'),
          import('containers/Merchant'),
        ]);

          const renderRoute = loadModule(cb);

          importModules.then(([reducer, component]) => {
            injectReducer('auth', reducer.default);

            renderRoute(component);
          });

          importModules.catch(errorLoading);
        },
      },
      {
        path: '*',
        name: 'notfound',
        getComponent(nextState, cb) {
          import('containers/NotFoundPage')
            .then(loadModule(cb))
            .catch(errorLoading);
        },
      },
    ]
  };
}
