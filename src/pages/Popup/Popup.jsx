import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const watchForElement = () => {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];

      // Inject a content script into the active tab
      chrome.scripting.executeScript(
        {
          target: { tabId: activeTab.id },
          function: watchElementAppearance,
        },
        () => {
          // Content script injected
          console.log('Content script injected');
        }
      );
    });
  };

  const watchElementAppearance = () => {
    // Define the selector for the element you want to watch
    const elementSelector = 'YOUR_ELEMENT_SELECTOR';

    // Define the callback function to be executed when the element appears
    const elementAppearedCallback = () => {
      // Element appeared, do something
      console.log('Element appeared!');
      // You can perform further actions here, such as sending a message to your extension or modifying the DOM of the page.
    };

    // Create a MutationObserver to observe changes in the DOM
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        // Check if the target element appeared in the DOM
        if (mutation.target.matches(elementSelector)) {
          // Call the elementAppearedCallback when the element appears
          elementAppearedCallback();
          // Disconnect the observer since we no longer need it
          observer.disconnect();
          break;
        }
      }
    });

    // Start observing the DOM changes
    observer.observe(document.body, { subtree: true, childList: true });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Turn up
        </p>
        <button className="App-link" id="goButton" onClick={watchForElement}>
          Watch this discord channel.
        </button>
      </header>
    </div>
  );
};

export default Popup;












// import React from 'react';
// import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
// import './Popup.css';

// const Popup = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Turn up
//         </p>
//         <a
//           className="App-link"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Watch this discord channel.
//         </a>
//       </header>
//     </div>
//   );
// };

// export default Popup;
