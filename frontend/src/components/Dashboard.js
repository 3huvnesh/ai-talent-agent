import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard({ data }) {
  return (
    <div style={styles.box}>
      <h3>📊 Ranking</h3>

      <BarChart width={500} height={250} data={data}>
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Bar dataKey="final_score" />
      </BarChart>
    </div>
  );
}

const styles = {
  box: {
    marginTop: "20px",
    background: "#020617",
    padding: "15px",
    borderRadius: "10px"
  }
};