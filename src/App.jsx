import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">React + TailwindCSS</h1>

      <div className="avatar">
        <div className="w-24 rounded-xl">
          <img
            src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp"
            alt="blondeLady"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img
            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            alt="kitty"
          />
        </div>
      </div>
    </>
  );
}

export default App;
