import { logUserOut } from "../apollo";

function Home() {
  return (
    <div>
      <h1>Welcom we did ti</h1>
      <button onClick={() => logUserOut()}>Log out</button>
    </div>
  );
}

export default Home;
