import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import AppConstants from './app.constants';
import Homepage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

const AppRoutes = () => (
  <Router>
    <Stack key="root">
      <Scene key={AppConstants.ROUTES.login} component={LoginPage} title="Login" initial />
      <Scene key={AppConstants.ROUTES.signup} component={SignupPage} title="Créer un compte" />
      <Scene key={AppConstants.ROUTES.homepage} component={Homepage} title="Accueil" />
    </Stack>
  </Router>
);

export default AppRoutes;
