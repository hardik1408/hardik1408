// LatestTweet.js
import React, { useEffect, useState } from "react";
import axios from "axios";

function LatestTweet() {
  const [latestTweet, setLatestTweet] = useState("");

  useEffect(() => {
    // Replace 'YOUR_TWITTER_API_ENDPOINT' with the actual Twitter API endpoint for FC Barcelona's tweets.
    axios
      .get("https://api.twitter.com/2/tweets?ids=1705205304642973997&tweet.fields=text")
      .then((response) => {
        if (
          response.data &&
          response.data.tweets &&
          response.data.tweets.length > 0
        ) {
          setLatestTweet(response.data.tweets[0].text);
        }
      })
      .catch((error) => {
        console.error("Error fetching latest tweet:", error);
      });
  }, []);

  return (
    <div>
      <h2>Latest Tweet from FC Barcelona</h2>
      <p>{latestTweet}</p>
    </div>
  );
}

export default LatestTweet;
