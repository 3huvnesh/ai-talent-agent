import { useState } from "react";
import { chatAPI } from "../api";
import { motion } from "framer-motion";

export default function ChatBox({ name }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const send = async () => {
    if (!input) return;

    const userMsg = { from: "You", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await chatAPI(name, input);

    const botMsg = { from: name, text: res.reply };
    setMessages((prev) => [...prev, botMsg]);

    setInput("");
  };

  return (
    <div style={styles.container}>
      <h4>💬 Chat with {name}</h4>

      <div style={styles.chatArea}>
        {messages.map((m, i) => (
          <motion.div
            key={i}
            style={m.from === "You" ? styles.userMsg : styles.botMsg}
            initial={{ opacity: 0, x: m.from === "You" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {m.text}
          </motion.div>
        ))}
      </div>

      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message..."
        />
        <button style={styles.sendBtn} onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#020617",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #334155"
  },
  chatArea: {
    height: "150px",
    overflowY: "auto",
    marginBottom: "10px"
  },
  userMsg: {
    background: "#22c55e",
    padding: "8px",
    borderRadius: "10px",
    margin: "5px",
    textAlign: "right"
  },
  botMsg: {
    background: "#334155",
    padding: "8px",
    borderRadius: "10px",
    margin: "5px"
  },
  inputRow: {
    display: "flex"
  },
  input: {
    flex: 1,
    padding: "8px"
  },
  sendBtn: {
    padding: "8px",
    background: "#22c55e",
    border: "none"
  }
};