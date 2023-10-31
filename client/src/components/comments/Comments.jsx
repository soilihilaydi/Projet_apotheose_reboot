import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Super contente de cette mise a jour merci elektron",
      name: "aretha Franklin",
      userId: 1,
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/c/c6/Aretha_Franklin_1968.jpg",
    },
    {
      id: 2,
      desc: "Ca va être rock n roll ",
      name: "elvis presley",
      userId: 2,
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Écrire un commentaire" />
        <button>Envoyer</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">il y a 1 heure</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
