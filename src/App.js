import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import htmlTag from "./assets/htmlTag.png";
import Swal from "sweetalert2";
import { CopyToClipboard } from "react-copy-to-clipboard";

class App extends Component {
  state = {
    copied: false,
    gradient: [
      {
        name: "Vice City",
        background: "linear-gradient(to right, #3494e6, #ec6ead)"
      },
      {
        name: "Flare",
        background: "linear-gradient(to right, #f12711, #f5af19)"
      },
      {
        name: "Ibiza Sunset",
        background: "linear-gradient(to right, #ee0979, #ff6a00)"
      },
      {
        name: "Summer Dog",
        background: "linear-gradient(to right, #a8ff78, #78ffd6)"
      },
      {
        name: "Back To Earth",
        background: "linear-gradient(to right, #00c9ff, #92fe9d)"
      },
      {
        name: "Rastafari",
        background: "linear-gradient(to right, #1e9600, #fff200, #ff0000)"
      },
      {
        name: "By Design",
        background: "linear-gradient(to right, #009fff, #ec2f4b)"
      },
      {
        name: "Coal",
        background: "linear-gradient(to right, #eb5757, #000000)"
      },
      {
        name: "Moonlit Asteroid",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
      },
      {
        name: "Mini",
        background: "linear-gradient(to right, #30e8bf, #ff8235)"
      },
      {
        name: "Argon",
        background:
          "linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)"
      },
      {
        name: "Stripe",
        background: "linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)"
      }
    ]
  };
  render() {
    let gradientCard = this.state.gradient.map((item, i) => (
      <>
        <div className="card">
          <h2>{item.name}</h2> <br />
          <div style={{ background: item.background }} className="gradient" />
          <CopyToClipboard
            text={item.background}
            onCopy={() =>
              Swal.fire({
                type: "success",
                timer: 1600,
                title: "Copied To Clipboard"
              })
            }
          >
            <img className="tag" src={htmlTag} alt="" />
          </CopyToClipboard>
          <p>Click To Copy</p>
        </div>
      </>
    ));
    return (
      <div className="App">
        <nav>
          <h1>Gradient Board</h1>
        </nav>
        <section className="main">{gradientCard}</section>
      </div>
    );
  }
}

export default App;
