const Login = () => {

  const handleSubmit = () => {
    const API = process.env.REACT_APP_API_URL;

    fetch(`${API}/process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        jd_text: "hello"
      })
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <button onClick={handleSubmit}>
        Send to Backend
      </button>
    </div>
  );
};

export default Login;