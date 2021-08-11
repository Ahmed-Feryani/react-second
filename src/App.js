import "./App.css";
import imageInSrc from "./imageInSrc.jpg";
import "./style.css";
import myVideo from "./myVideo.mp4";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">FERYANI AHMED</h1>
        <br />
        <img src={imageInSrc} alt="img" />
        <br />
        <img src="/imageInPublic.jpg" alt="img" />
      </div>
      <video width="320" height="240" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
