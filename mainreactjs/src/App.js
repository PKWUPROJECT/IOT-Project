import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container mx-auto border-2 border-black w-fit rounded-lg translate-y-48 pt-0.5 px-5 pb-5">
        <h1 className="text-black text-center text-xl">Login</h1>
        
        <div className="shadow-lg text-input flex justify-center items-center gap-2 rounded-md px-2 mt-5">
        <label className="text-gray-500">Username</label>
        <input className="w-full rounded-md p-1 text-black outline-none"></input>
        </div>

        <div className="shadow-lg text-input flex justify-center items-center gap-2 rounded-md px-2 mt-5">
        <label className="text-gray-500">Password</label>
        <input className="w-full rounded-md p-1 text-black outline-none" type="password"></input>
        </div>

        <button className="mt-10 text-center bg-slate-950 text-white rounded-md pb-2 pt-2 w-full">Login</button>
      </div>
    </div>
  );
}

export default App;
