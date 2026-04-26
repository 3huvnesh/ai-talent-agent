import { motion } from "framer-motion";

export default function CandidateCard({ data }) {
  return (
    <motion.div
      style={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 style={styles.name}>{data.name}</h2>

      <p>🎯 Match: {data.match_score}</p>
      <p>❤️ Interest: {data.interest_score}</p>
      <p>🏆 Final: {data.final_score}</p>

      <p style={styles.reason}>{data.reason}</p>
    </motion.div>
  );
}

const styles = {
  card: {
    background: "rgba(15,23,42,0.8)",
    backdropFilter: "blur(10px)",
    padding: "15px",
    borderRadius: "15px",
    border: "1px solid #334155",
    marginBottom: "10px"
  },
  name: {
    color: "#38bdf8"
  },
  reason: {
    color: "#94a3b8"
  }
};