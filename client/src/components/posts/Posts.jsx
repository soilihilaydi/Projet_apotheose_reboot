import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Mickeal jackson",
      userId: 1,
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/a/ad/Jackson_5_1974_%28Michael%29.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://cdn.www.elektron.se/media/wysiwyg/analog-heat-fx-hero2_1.jpg",
    },
    {
      id: 2,
      name: "Bjork",
      userId: 2,
      profilePic:
        "https://upload.wikimedia.org/wikipedia/en/a/af/Bj%C3%B6rk_-_Homogenic.png",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
