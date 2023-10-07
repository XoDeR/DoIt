"use client";
import Link from "next/link";
import { useState } from "react";

const AddUserForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/add-new-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formValues }),
      });

      if (response.ok) {
        // Handle success
        console.log("User added successfully");
        // Optionally, you can reset the formValues state here
        setFormValues({ name: "", email: "" });
      } else {
        // Handle errors
        console.error("Error adding user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div>
          <label> Name </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Email </label>
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Link href="/">
            <button>Go Back</button>
          </Link>

          <button className="ml-8" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
