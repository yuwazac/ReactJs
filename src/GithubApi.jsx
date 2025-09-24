import { useState } from "react";

const GithubApi = () => {
  const [input, setInput] = useState("");
  const [singleUser, setSingleUser] = useState(null);

  const searchUser = async () => {
    if (!input) return;
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      if (response.ok) {
        const data = await response.json();
        setSingleUser(data); 
      } else {
        setSingleUser(null);
        alert("User not found");
      }
    } catch (error) {
      console.log("error", error);
    }

    setInput("");
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={searchUser}>Search</button>

    
      {singleUser && (
        <div style={{ marginTop: "20px" }}>
          <h2>Search Result</h2>
          <img
            src={singleUser.avatar_url}
            alt={singleUser.login}
            width="80"
            style={{ borderRadius: "50%" }}
          />
          <p>
            <strong>{singleUser.login}</strong>
          </p>
          <p>ID: {singleUser.id}</p>
          <p>LOCATIN: {singleUser.location}</p>
          <p>Followers: {singleUser.followers}</p>
          <p>Bio: {singleUser.bio}</p>
          <p>
            Profile:{" "}
            <a href={singleUser.html_url} target="_blank" rel="noreferrer">
              Visit
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default GithubApi;
