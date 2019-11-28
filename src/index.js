/* global _ */
import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'lodash';
import 'dotenv/config';

import { Col } from 'jsxstyle';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { Provider } from 'react-redux';
import { store } from './redux';

import RedContainer from './Red';

import * as serviceWorker from './serviceWorker';
import Apollo from './App';
import ButtonUI from './Button';
import Page2 from './Page2';
import './styles.css';

import logo from './images/viasat-logo.svg';

// import Profile  from './Profile'

const cache = new InMemoryCache();

/* Run Jenkins for Git on Docker:
$ docker run --name jenkins -p 8080:8080 -v /var/jenkins_home jenkins */

 /* $ eslint src/App.js$ */

/* MyTitle, DynaTitle, Table and table data are NOT pulled in from outside files.
These are created in this main index.js file */

/* NOTE to test with Jasmine, change package Scipts to:  "test": "jasmine" OR Command line: node_modules/.bin/jasmine

/* Using Apollo to pull Github GraphQL info. */
const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

/* React Redux */
const MyAppWithStore = () => (
  <Provider store={store}>
    <RedContainer />
  </Provider>
);


/* Static H1 Tag as a Class */
class MyTitle extends Component {
  render() {
    return <h1>App Title v2.4</h1>;
  }
}

/* Dynamic h2 tag as a function */
const DynaTitle = ({ thetitle }) => <h2>{thetitle}</h2>;

/* Builds the data for the Table into Array object */
let obj = [
  {
    name: 'option B',
    price: 9.5,
    id: 1,
  },
  {
    name: 'option A',
    price: 2.5,
    id: 2,
  },
  {
    name: 'option C',
    price: 8,
    id: 3,
  },
];

obj = _.sortBy(obj, ['price']);

/* Trying to Add Up Price of all 3 */
const nums = obj.map((...obj) => obj[0].price);
const sum = nums.reduce((total, cost) => total + cost);

class TableRow extends React.Component {
  render() {
    const { data } = this.props;
    const row = data.map(data => (
      <tr key={data.id}>
        <td key={data.name}>{data.name}</td>
        <td key={data.price}>{data.price}</td>
      </tr>
    ));
    return <>{row}</>;
  }
}

class Table extends React.Component {
  render() {
    return (
      <table id="tableloc">
        <tbody>
          <TableRow data={this.props.data} />
        </tbody>
      </table>
    );
  }
}

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count} times`;
  });

  return (
    <div>
      <p className="blue">
useEffect - You clicked
        {count}
        {' '}
times. See page Title (tab)
      </p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


/* Big App function that pulls in items from above, as well as other items it generates itself */
function App() {
  const myArray = ['Mar', 'Apr', 'May'];
  const Arr2 = myArray.map(month => month);


  const ListName = (name = 'List Name', age = 'Your Age') => `${name} ${age}`;
  return (
    <Col className="myplayground" alignItems="center">
      <img src={logo} alt="Viasat Logo" height="100" />
      <MyTitle />
      <DynaTitle thetitle="Page Title" />

      <Apollo />

      <p>
        You chose
        {' '}
        {Arr2.join(', ')}
,
        {' '}
        {ListName('Jason\'s List', 47)}
        {' '}
      </p>

      <Table data={obj} />
      <p>
total:
        {sum}
      </p>
      <p>&nbsp;</p>
      <ButtonUI />
      <p>&nbsp;</p>

      <BrowserRouter>
        {/* The router picks which component to render based on a given path */}
        <Switch>

          {/** Switch specifies only one of the things will render */}
          <Route
            exact
            path="/"
            render={() => (
              <>
                <DynaTitle thetitle="This only shows on Index page." />
                <a href="/page2">Go to Page 2 (Change URL)</a>
              </>
            )}
          />

          {/* Each route has a path and a component it will Render */}
          <Route
            path="/page2"
            component={Page2}
          />

        </Switch>
      </BrowserRouter>

      <p>&nbsp;</p>
      {Example()}

      <DynaTitle thetitle="Redux Demo" />
    </Col>
  );
}

serviceWorker.unregister();

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <MyAppWithStore />
  </ApolloProvider>,
  document.getElementById('root'),
);
