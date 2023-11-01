import React, { useState } from "react"; // Importez React
import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "react-query";
import { makeRequest } from "../../axios";

const Share = () => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // Utilisez useMutation pour gérer la mutation d'ajout de post
  const mutation = useMutation((newPost) => {
    // Utilisez makeRequest.post ou l'appel à l'API approprié pour ajouter un nouveau post
    return makeRequest.post("/posts", newPost);
  },
  {
    onSuccess: () => {
      // Invalider et récupérer
      queryClient.invalidateQueries("posts");
    },
  }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc});

    
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.profilePic} alt="" />
          <input
            type="text"
            placeholder={`Qu'as-tu en tête ${currentUser.name} ?`}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Ajouter une image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Ajouter un lieu</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Taguer des amis</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Partager</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
