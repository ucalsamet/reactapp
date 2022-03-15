import React, { Component } from "react";
import User from "./User";
import UserConsumer from "../context";
export default class Users extends Component {
  render() {
    const { users } = this.props;

    return (
      <UserConsumer>
        {(value) => {
          const { users } = value;
          return (
            <div>
              {users.map((user) => {
                return (
                  <User
                    key={user.id}
                    name={user.name}
                    salary={user.salary}
                    departman={user.departman}
                    id = {user.id}
                  />
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
