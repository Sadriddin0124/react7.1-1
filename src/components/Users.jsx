import React, { useState } from "react";
import ModalApp from "./ModalApp";

const Users = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [users, setUsers] = useState([
    { id: 1, status: "open", title: "task1" },
    { id: 2, status: "pending", title: "task2" },
    { id: 3, status: "payload", title: "task3" },
    { id: 4, status: "progress", title: "task4" },
  ]);
  const addUser = (e) => {
    e.preventDefault();
    let title = e.target[0].value;
    let status = e.target[1].value;
    let id = text.id
    if (text !== "") {
      users.map((item) => {
        if (item.id === id) {
          item.title = title;
          item.status = status;
        }
      });
    } else {
      let payload = {
        id: users.length + 1,
        status,
        title,
      };
      users.push({ ...payload });
      setUsers([...users])
    }
    setModalVisible(false);
    setText('')
  };
  const deleteItem = (id) => {
    let filtered__arr = users.filter((item) => item.id !== id);
    setUsers([...filtered__arr]);
  };
  const editItem = (item) => {
    setText(item);
    setModalVisible(true);
  };
  return (
    <div className="container">
      <ModalApp
        open={modalVisible}
        toggle={() => setModalVisible(false)}
        addUser={addUser}
        text={text}
      />
      <div className="row mt-5">
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Open</h1>
            </div>
            {users
              .filter((item) => item.status === "open")
              .map((item, index) => {
                return (
                  <div
                    className="card-body d-flex gap-3 justify-content-evenly"
                    key={index}
                  >
                    <h3>{item.title}</h3>
                    <button
                      className="btn btn-info"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            <div className="card-footer d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => setModalVisible(true)}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Pending</h1>
            </div>
            {users
              .filter((item) => item.status === "pending")
              .map((item, index) => {
                return (
                  <div
                    className="card-body d-flex gap-3 justify-content-evenly"
                    key={index}
                  >
                    <h3>{item.title}</h3>
                    <button
                      className="btn btn-info"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            <div className="card-footer d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => setModalVisible(true)}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Payload</h1>
            </div>
            {users
              .filter((item) => item.status === "payload")
              .map((item, index) => {
                return (
                  <div
                    className="card-body d-flex gap-3 justify-content-evenly"
                    key={index}
                  >
                    <h3>{item.title}</h3>
                    <button
                      className="btn btn-info"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            <div className="card-footer d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => setModalVisible(true)}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Progress</h1>
            </div>
            {users
              .filter((item) => item.status === "progress")
              .map((item, index) => {
                return (
                  <div
                    className="card-body d-flex gap-3 justify-content-evenly"
                    key={index}
                  >
                    <h3>{item.title}</h3>
                    <button
                      className="btn btn-info"
                      onClick={() => editItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            <div className="card-footer d-flex justify-content-center">
              <button
                className="btn btn-success"
                onClick={() => setModalVisible(true)}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
