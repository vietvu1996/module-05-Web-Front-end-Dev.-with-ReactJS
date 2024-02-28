import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactDetail() {
  const [contact, setContact] = useState({});
  const [image, setImage] = useState({});
  const [isValid, setValid] = useState();
  const { contactId } = useParams();

  useEffect(() => {
    if (contactId) {
      axios
        .get(
          `https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts/${contactId}`
        )
        .then((res) => {
          setContact(res.data);
          setValid("valid");
        })
        .catch(() => {
          setValid("not found");
        });
    }
  }, [contactId]);

  const handleChange = (event) => {
    setContact((prevContact) => ({
      ...prevContact,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelectedImage = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData();
    fd.append("file", image);
    axios
      .post("https://v2.convertapi.com/upload", fd)
      .then((res) => {
        console.log(res.data.Url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   const addContact = (imageUrl = "") => {
  //     axios
  //       .post(
  //         "https://my-json-server.typicode.com/codegym-vn/mock-api-contacts/contacts",
  //         {
  //           ...contact,
  //           image: imageUrl,
  //         }
  //       )
  //       .then((res) => {
  //         alert((isValid ? "Edit" : "Add") + "successfully");
  //       })
  //       .catch((err) => {
  //         throw err;
  //       });
  //   };

  let content;
  if (isValid === "not found") {
    content = <h1>Not Found</h1>;
  } else if (isValid === "valid") {
    content = <h1>Edit contact</h1>;
  } else {
    content = <h1>Add contact</h1>;
  }

  return (
    <div>
      {content}
      <form>
        <img src={contact.image} alt=""></img>
        <input type="file" onChange={handleSelectedImage} />

        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={contact.name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={contact.phone || ""}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ContactDetail;
