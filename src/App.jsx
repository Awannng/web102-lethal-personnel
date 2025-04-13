import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <div className="bg-img">
        <div className="title">
          <h1>Welcome to Lethal Personnel Creator!</h1>
          <p>Here you can create your personalized personnel!</p>

          <video
            src="src/assets/dance-clip.MP4"
            width="80%"
            height="70%"
            controls
            onError={(e) => console.error("Error loading video:", e)}
          ></video>
        </div>
      </div>
    </>
  );
}

export default App;
