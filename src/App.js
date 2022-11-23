import React,{useState} from "react"
import Field from "./components/Field";
import './App.css';

function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  return (
    <div>
    <Field onChange={setText} />
    </div>
  );
}

export default App;
