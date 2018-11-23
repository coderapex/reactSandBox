import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        profileImage={faker.image.avatar()}
        timeAgo="Today at 4:43 PM"
        comment="That was a nice post"
      />
      <CommentDetail
        author="Alex"
        profileImage={faker.image.avatar()}
        timeAgo="Today at 3:37 AM"
        comment="I had fun reading this"
      />
      <CommentDetail
        author="Jane"
        profileImage={faker.image.avatar()}
        timeAgo="Yesterday at 11:07 PM"
        comment="When do you usually post?"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
