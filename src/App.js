import React, { useState } from "react";
import Field from "./components/Field";
import Languages from "./Languages";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
    </div>
  );
}

export default App;
