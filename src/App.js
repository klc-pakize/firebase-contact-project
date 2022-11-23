import "./App.css";
import Contact from "./components/contact/Contact";
import Form from "./components/form/Form";
import React, { useState } from "react";
import { AddUser, EditUser } from "./uilts/firebase";

function App() {
  const [isAdd, setIsAdd] = useState("ADD");
  const [form, setForm] = useState({
    username: "",
    phoneNumber: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      username: "",
      phoneNumber: "",
      gender: "",
    });
    if (form.id) {
      EditUser(form);
    } else {
      AddUser(form);
    }
    setIsAdd("ADD");
  };

  const EditUserButton = (id, username, phoneNumber, gender) => {
    setIsAdd("UPDATE");
    setForm({ id, username, phoneNumber, gender });
  };
  return (
    <div className="App">
      <div className="app"></div>
      <Form
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        isAdd={isAdd}
      />
      <Contact EditUserButton={EditUserButton} />
    </div>
  );
}

export default App;
