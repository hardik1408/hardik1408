import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import React from 'react';
// import ReactDOM from 'react-dom';
import LatestTweet from './tweet';

// ReactDOM.render(<LatestTweet />, document.getElementById('latest-tweet'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function TwitterTimeline() {
  return (
    <div>
      <a
        className="twitter-timeline"
        data-height="600"
        data-theme="dark"
        href="https://twitter.com/FCBarcelona?ref_src=twsrc%5Etfw"
      >
        Tweets by FCBarcelona
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  );
}

export default TwitterTimeline;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
