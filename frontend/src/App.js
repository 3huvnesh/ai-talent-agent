import { useState } from "react";
import { processJD } from "./api";
import CandidateCard from "./components/CandidateCard";
import ChatBox from "./components/ChatBox";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [jd, setJd] = useState("");
  const [results, setResults] = useState([]);

  const analyze = async () => {
    const data = await processJD(jd);
    setResults(data);
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.title}>🤖 AI Talent Agent</h1>

      <textarea
        style={styles.textarea}
        placeholder="Paste Job Description..."
        value={jd}
        onChange={(e) => setJd(e.target.value)}
      />

      <button style={styles.button} onClick={analyze}>
        Analyze Candidates
      </button>

      {results.length > 0 && (
        <>
          <Dashboard data={results} />

          <div style={styles.grid}>
            {results.map((c, i) => (
              <div key={i}>
                <CandidateCard data={c} />
                <ChatBox name={c.name} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  app: {
    background: "linear-gradient(135deg, #0f172a, #020617)",
    minHeight: "100vh",
    padding: "30px",
    color: "white",
    fontFamily: "sans-serif"
  },
  title: {
    fontSize: "28px",
    marginBottom: "15px",
    color: "#60a5fa"
  },
  textarea: {
    width: "100%",
    height: "120px",
    padding: "12px",
    borderRadius: "10px",
    background: "#020617",
    border: "1px solid #334155",
    color: "white",
    marginBottom: "10px"
  },
  button: {
    padding: "10px 20px",
    borderRadius: "10px",
    background: "#2563eb",
    border: "none",
    color: "white",
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px"
  }
};