import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import configureStore from './src/redux/configure-store';
import { theme } from './src/utils/constants';
import GlobalStyle from './src/utils/global-styles';

const { store } = configureStore();

/* eslint-disable react/prop-types */
export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
            {element}
    </Provider>
);

export const wrapPageElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle />
            {element}
        </React.Fragment>
    </ThemeProvider>
);
