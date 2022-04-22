import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./Components/AddUser";
import Tables from "./Components/Tables";

function App() {
  const userData = [
    { id: 1, namaUser: "Agus", username: "agusdwimilniadi" },
    { id: 2, namaUser: "Dwi", username: "dwimilniadi" },
    { id: 3, namaUser: "Milniadi", username: "milniadiagus" },
  ];
  // const [editing, setEditing] = useState(false);
  const [users, setUsers] = useState(userData);
  const addUser = (userNew) => {
    // setEditing(false);
    userNew.id = users.length + 1; // seting id baru
    setUsers([...users, userNew]);
  };
  const getDataPost = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((err) => {
        console.log(err);
      });
    console.log("ini response ", response.data);
    setDataPost(response.data);
  };
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    getDataPost();
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <AddUser addUser={addUser} />
        </div>
        <div className="col-6">
          <Tables userData={userData} />
        </div>
        <div className="col-12 mt-5">
          {dataPost.map((item) => {
            return (
              <>
                <hr />
                <div className="text-start ">
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                </div>
              </>
            );
          })}

          <hr />
        </div>
      </div>
    </div>
  );
}

export default App;
