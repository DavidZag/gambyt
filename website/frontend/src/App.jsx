import React from "react";
import { Outlet, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <a className="navbar-brand" href="#">
        <span className="mb-0 h1 p-3">Gambyt</span>
      </a>
      

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
          
        </ul>
        <form className="ml-auto ">
          <button className="btn btn-nav btn-danger p-3 m-3" type="submit">Sign Up</button>
          <button className="btn btn-secondary p-3 m-3" type="submit">Login</button>
        </form>
      </div>
    </nav>

    <div class="jumbotron py-0 my-0 flex-nowrap">
      <h1 className="text-center h1 py-5 align-middle" style={{height: "500px",background: `url(https://c.tenor.com/VHLlAXLH-9gAAAAd/neon.gif)`, backgroundSize: "cover"}}>Invest in Creators</h1>      
    </div>

    <div class="album py-5 flex-nowrap" style={{background: "#9F16AF"}}>
      <h1 className="text-center h1 p-5">Featured Creators</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" style={{height: "225px", width: "100%"}} src="https://i.imgur.com/DroqhpQ.jpeg"></img>
              <div className="card-body">
                <p className="card-text">
                  You can do it!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" style={{height: "225px", width: "100%"}} src="https://i.insider.com/5dc349153afd375c04352664?width=1136&format=jpeg"></img>
              <div className="card-body">
                <p className="card-text">
                  Go go go!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" style={{height: "225px", width: "100%"}} src="https://m.media-amazon.com/images/M/MV5BZDdkYjAxNDMtMGRmZi00ZGE3LThjMzItZjkzMWIzYWRiMzIxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg"></img>
              <div className="card-body">
                <p className="card-text">
                  You're the man.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-danger p-3 m-3" type="submit">Invest</button>   
      </div>
         
    </div>

    <div class="album py-5" style={{background: "#9F16AF"}}>
      <h1 className="text-center h1 p-5">How it Works</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" style={{height: "225px", width: "100%"}} src="https://i.imgur.com/DroqhpQ.jpeg"></img>
              <div className="card-body">
                <p className="card-text">
                  Creators sell a portion of their future revenue. 
                  This upfront capital helps them cover expenses and focus on creating content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" style={{height: "225px", width: "100%"}} src="https://i.insider.com/5dc349153afd375c04352664?width=1136&format=jpeg"></img>
              <div className="card-body">
                <p className="card-text">
                  Followers buy creator tokens. These come with monthly dividends and a chance to win
                  community prizes like facetimes with your favorite creators!
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" style={{height: "225px", width: "100%"}} src="https://m.media-amazon.com/images/M/MV5BZDdkYjAxNDMtMGRmZi00ZGE3LThjMzItZjkzMWIzYWRiMzIxXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg"></img>
              <div className="card-body">
                <p className="card-text">
                  Creators and followers get to focus on making and enjoying the content they love.
                  Doesn't that sound nice?
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>      
    </div>

    <div class="bg-dark py-5">
      <p className="text-left text-white h5 p-5">Gabmyt</p>
      <a className="text-left text-light p-5">Support</a>
      <a className="text-left text-light p-5">Contact</a>
      <a className="text-left text-light p-5">Socials</a>
            
    </div>
    
  </div>
    
  );
}

export default App;


