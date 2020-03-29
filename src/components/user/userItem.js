import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const UserItem = ({ user, onSelectItemUserEdit, onSelectUserDelete }) => {
  const onClickEdit = e => {
    e.preventDefault();
    onSelectItemUserEdit(user);
  };

  const onClickDelete = e => {
    e.preventDefault();
    onSelectUserDelete(user);
  };
  return (
    <Fragment>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.status}</td>
          <td>
            <Button
              className="Button"
              variant="warning"
              size="sm"
              style={{ backgroundColor: "transparent", border: "transparent" }}
              onClick={onClickEdit}
            >
              <i className="fas fa-edit" style={{ color: "#929394" }}></i>
            </Button>{" "}
            -{" "}
            <Button
              className="Button"
              variant="danger"
              size="sm"
              style={{ backgroundColor: "transparent", border: "transparent" }}
              onClick={onClickDelete}
            >
              <i className="fas fa-trash" style={{ color: "#929394" }}></i>
            </Button>
          </td>
        </tr>
    </Fragment>
  );
};

export default UserItem;
