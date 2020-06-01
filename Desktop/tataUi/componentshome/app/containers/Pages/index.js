/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage/Loadable';
import Home from './Home';
import HomePage from '../HomePage';
import UserRegistration from './Users/UserRegistration';
import Users from './Users';
import Sandbox from './Sandbox';
import Layout from '../../components/Layout';
export default function App() {
  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Layout>
        <Switch>
          <Route exact path="/old" component={HomePage} />
          <Route exact path="/" component={Home} />
          <Route path="/users/register" component={UserRegistration} />
          <Route path="/users" component={Users} />
          <Route path="/sandbox" component={Sandbox} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}
