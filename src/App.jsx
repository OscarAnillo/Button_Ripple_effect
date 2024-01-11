import "./App.css";

function App() {
  const test = (e) => {
    const btn = document.querySelector(".btn");
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty("--xPos", x + "px");
    btn.style.setProperty("--yPos", y + "px");
  };
  return (
    <div className="app">
      <a href="#" className="btn" onMouseOver={test}>
        <span>Ripple Effect</span>
      </a>
    </div>
  );
}

export default App;
