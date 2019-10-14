import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          autor={`${faker.name.firstName()} ${faker.name.lastName()}`}
          fecha="Today at 5:00PM"
          mensaje="Elliot requested permission to view your contact details"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          autor={`${faker.name.firstName()} ${faker.name.lastName()}`}
          fecha="Yesterday at 11:00AM"
          mensaje="Jenny wants to add you to the group best friends"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={faker.image.avatar()}
          autor={`${faker.name.firstName()} ${faker.name.lastName()}`}
          fecha="Yesterday at 03:33AM"
          mensaje="Adriana requested permission to view your contact details"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
