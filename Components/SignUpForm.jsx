import { useState } from "react";

const SignUpForm = ({token, setToken}) => {

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response =  await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
      { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({ 
          username: username, 
          password: password 
        }) 
      }); 
      const result = await response.json();
      setToken(result.token);

    }

    catch (error) {
      setError(error.message);
    }

  }

return (
  <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
    <form action="" onSubmit={handleSubmit}>

      <label htmlFor="">
        Username:
        <input type="text" value = {username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label htmlFor="">Password:
      <input type="text" value = {password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      <button>
        Submit
      </button>
    </form>
  </>
)
}

export default SignUpForm;