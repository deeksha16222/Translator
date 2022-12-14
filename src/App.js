import React, { useState } from "react";
import Field from "./components/Field";
import Languages from "./components/Languages";
import Translate from "./components/Translate";
import "./styles.css";

function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <Translate text={text} language={language} />
      <hr />
    </div>
  );
}

export default App;
