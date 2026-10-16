import { useEffect } from "react";

function Title({ name }) {
  useEffect(() => {
    console.log("Effect ran:", name);
    document.title = name;
  }, [name]);

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {name}</p>
    </div>
  );
}

export default Title;