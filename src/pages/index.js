// import React from 'react';
// import { Location, Router } from '@reach/router';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home';
// import ProfileInfo from './profile-info';
// import NotFound from './404';

// const App = () => (
//   <Location>
//     {({ location }) => {
//       return (
//         <TransitionGroup>
//           <CSSTransition key={location.key} classNames="fade" timeout={1000}>
//             <Router location={location}>
//               {/* set "default" props for no route path */}
//               <NotFound default />

//               <Home path="/" />
//               <ProfileInfo path="/profile-info/:username" />
//             </Router>
//           </CSSTransition>
//         </TransitionGroup>
//       );
//     }}
//   </Location>
// );

export default Home;