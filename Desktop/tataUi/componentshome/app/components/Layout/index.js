/**
 *
 * Layout
 *
 */

import React, { Children } from 'react';
import MatContainer from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';
import Grid from '../Grid';
import AppLayout from './StyledGridLayout';
import NavigationMenu from '../NavigationMenu';
import Content from './ContentLayout';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Layout(props) {
  return (
    <React.Fragment>
      <AppLayout container>
        <Header />
        <Content container>
          <Grid xs={1}>
            <NavigationMenu
              items={[
                { title: 'users', icon: 'add_circle', page: 'users' },
                { title: 'sandbox', icon: 'add_circle', page: 'sandbox' },
              ]}
            />
          </Grid>
          <Grid xs={11}>
            <MatContainer maxWidth="false" {...props}>
              {Children.toArray(props.children)}
            </MatContainer>
          </Grid>
        </Content>
        <Footer />
      </AppLayout>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
