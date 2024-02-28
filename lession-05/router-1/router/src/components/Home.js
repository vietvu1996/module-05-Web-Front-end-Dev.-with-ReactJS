import { useLocation } from "react-router-dom";

function Home() {
  const { state } = useLocation();
  const email = state ? state.email : "";

  return (
    <div>
      <h1>Welcome, {email}</h1>
    </div>
  );
}

export default Home;
