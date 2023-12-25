import { useEffect } from "react";
import "./App.css";
import { loadWordList } from "./wordlist/word-list";

function App() {
  useEffect(() => {
    renderWordList();
  }, []);

  const renderWordList = async () => {
    const list: string[] = await loadWordList();
    console.log(list);
  };
  return (
    <>
      <p>App Placeholder</p>
    </>
  );
}

export default App;
