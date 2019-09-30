import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          authorImage={faker.image.avatar()}
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          timeAgo="Yesterday at 11:00AM"
          commentary="React is awesome"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          authorImage={faker.image.avatar()}
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          timeAgo="Today at 7:00PM"
          commentary="I want to learn more about React"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          authorImage={faker.image.avatar()}
          author={`${faker.name.firstName()} ${faker.name.lastName()}`}
          timeAgo="Today at 1:00PM"
          commentary="I like it very much!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
