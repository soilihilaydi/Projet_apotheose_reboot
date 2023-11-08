import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts?userId="+userId).then((res) => {
      return res.data;
    })
  );
  console.log(data)

  return (
    <div className="posts">
      {error
        ? "Quelque chose s'est mal passé!"
        : isLoading
        ? "Chargement"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
