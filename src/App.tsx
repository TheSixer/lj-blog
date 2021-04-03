import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Events } from 'react-scroll';
import Layout from './components/layout';
import routes from './router';
import './App.styl';

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

class App extends Component {
  componentDidMount = () => {
    Events.scrollEvent.register('begin', this.handleStatusChange);
    Events.scrollEvent.register('end', this.handleStatusChange);
  };

  componentWillUnmount = () => {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleStatusChange = () => {};

  render() {
    return (
      <div className="App default">
        <Layout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            {routes.map((route, index) => {
              return <RouteWithSubRoutes key={index} {...route} />;
            })}
          </Switch>
        </Layout>
      </div>
    );
  }
}

// function App(): React.ReactElement {
//   useEffect(() => {
//     function handleStatusChange(...args: any) {
//       console.log('end', args);
//     }
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       Events.scrollEvent.remove('begin');
//       Events.scrollEvent.remove('end');
//     };
//   });
//   return (
//     <div className="App">
//       <Layout>
//         <Switch>
//           <Route exact path="/" render={() => <Redirect to="/home" />} />
//           {routes.map((route, index) => {
//             return <RouteWithSubRoutes key={index} {...route} />;
//           })}
//         </Switch>
//       </Layout>
//     </div>
//   );
// }

export default App;
