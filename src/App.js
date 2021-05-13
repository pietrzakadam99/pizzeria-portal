import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Ordering from './components/views/Ordering/Ordering';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b2ebf2',
    },
    secondary: {
      main: '#42a5f5',
    },
  },
})

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={'/panel'}>
          <MainLayout>
            <Switch>
              <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
              <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
              <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={Tables}> 
                <Tables />
                <p>123abc</p>
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={Tables} />
              <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={Tables}>
                <Tables/>
                <p>123abc</p>
              </Route>
              <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering/order/new'} component={Ordering} />
              <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={Ordering}>
                <Ordering/>
                <p>123abc</p>
              </Route>
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;