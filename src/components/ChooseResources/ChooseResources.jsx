import { useState, useEffect } from "react";

const ChooseResources = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  // useEffect only ever runs when the options inside the dependency array change
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <p key={JSON.stringify(item.id)}>{JSON.stringify(item.name)}</p>;
      })}
    </div>
  );
};

export default ChooseResources;
