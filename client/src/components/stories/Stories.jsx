import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "aretha Franklin",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Aretha_Franklin_1968.jpg",
    },
    {
      id: 2,
      name: "elvis presley",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elvis_Presley_promoting_Jailhouse_Rock.jpg",
    },
    {
      id: 3,
      name: "radiohead",
      img: "https://cdn.openart.ai/stable_diffusion/381e33029a83686913099e5811cb2a2a43d67746_2000x2000.webp",
    },
    {
      id: 4,
      name: "Calimero",
      img: "https://media.ouest-france.fr/v1/pictures/a3c43dece83f0cb046eed655cc37dd72-calimero-2014-serie-d-animation-programme-tv.jpg?width=1260&sign=b1850d3a1442df30ed8cdbde16399fd2b84ed60d9de52c6fd593e6a9feff9093&client_id=bpservices",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories