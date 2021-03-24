import InputText from "./Components/InputText";
import CheckBox from "./Components/CheckBox";
import Button from "./Components/Button";
import Link from "./Components/Links";

import imgs from "./Pictures/images.png";

import "./App.css";
import "./Components/Links.css";
import "./Components/Image.css";

const style = {
  color: "rgba(0, 0, 0, 0.54)",
  marginTop: "60px"
};

const style1 = {
  fontSize: "30px"
}

function App() {
  return (
    <div className="App">
      <img className="img" src={imgs} alt="imgs" />
      <p style={style1}>Sign in</p>
      <div>
        <InputText placeholder="Email Address *" />
      </div>
      <div>
        <InputText placeholder="Password *" />
      </div>
      <div>
        <CheckBox />
      </div>
      <div>
        <Button />
      </div>
      <div className="div">
        <Link className="one" href="#">
          Forgot password?
        </Link>
        <Link href="#" className="two">
          Don't have an account? Sign Up
        </Link>
      </div>
      <div className="div2">
        <p style={style}>
          Copyright © <Link href="#" className="three">Your Website</Link> 2021.
        </p>
      </div>
    </div>
  );
}

export default App;
