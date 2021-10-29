// import React, { Component } from 'react';
import logo from './tokiobox.jpeg';
import Instructions from './Instructions';
import Instructions_text from './Instructions_text';
import './App.css';

function App() {
  return (
    <div className="App">
      <Instructions_text />
      <Instructions />
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           TB
         </p>
         <div className= "flex">
            <a
              className="App-link"
              href="https://www.youtube.com/channel/UCoPWa7FDtOew5Jya3hcMPiQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to watch my videos
            </a>

            <a
              className="App-link"
              href="https://www.tokyoweekender.com/author/alexandra-ziminski/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to read my articles
            </a>
          </div>
       </header>
     </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <p>
//            Welcome to tokiobox app
//          </p>
//          <div className= "flex">
//             <a
//               className="App-link"
//               href="https://www.youtube.com/channel/UCoPWa7FDtOew5Jya3hcMPiQ"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Click here to watch my videos
//             </a>

//             <a
//               className="App-link"
//               href="https://www.tokyoweekender.com/author/alexandra-ziminski/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Click here to read my articles
//             </a>
//           </div>
//        </header>
//      </div>
//     );
//   }
// }


export default App;
