import React from 'react';
import './App.css';
import logo from './one.jpg'
import search from './search.svg'

function App() {
  return (
    <div className="all">

      <div className="App">
        <div className="header">
          <div className="header-title">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="header-text">Clever Jobs</h1>
          </div>
        </div>
      </div>

      <div className="search-bar">
          <div className="content">
              <img className="search" src={search} alt="search" />
              <input className="inputs" type="text" placeholder="Enter to search..." />
              <div className="send">
                <p className="sender">Find</p>
              </div>
          </div>
      </div>

      <div className="info">
        <div className="contents">

            <div className="item">
                <h3 className="main-title">Full Stack Developer</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>React Native</li>
                  <li>3 years experience</li>
                  <li>Full time job</li>
                </ul>
                <p className="sub-title">Denver, Collorado</p>
                <div className="bts">
                    <button className="read">Read More</button>
                    <button className="apply">Apply Now</button>
                </div>
            </div>

            <div className="item">
                <h3 className="main-title">Full Stack Developer</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>React Native</li>
                  <li>3 years experience</li>
                  <li>Full time job</li>
                </ul>
                <p className="sub-title">Denver, Collorado</p>
                <div className="bts">
                    <button className="read">Read More</button>
                    <button className="apply">Apply Now</button>
                </div>
            </div>

            <div className="item">
                <h3 className="main-title">Full Stack Developer</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>React Native</li>
                  <li>3 years experience</li>
                  <li>Full time job</li>
                </ul>
                <p className="sub-title">Denver, Collorado</p>
                <div className="bts">
                    <button className="read">Read More</button>
                    <button className="apply">Apply Now</button>
                </div>
            </div>

            <div className="item">
                <h3 className="main-title">Full Stack Developer</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>React Native</li>
                  <li>3 years experience</li>
                  <li>Full time job</li>
                </ul>
                <p className="sub-title">Denver, Collorado</p>
                <div className="bts">
                    <button className="read">Read More</button>
                    <button className="apply">Apply Now</button>
                </div>
            </div>

            <div className="item">
                <h3 className="main-title">Full Stack Developer</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>React Native</li>
                  <li>3 years experience</li>
                  <li>Full time job</li>
                </ul>
                <p className="sub-title">Denver, Collorado</p>
                <div className="bts">
                    <button className="read">Read More</button>
                    <button className="apply">Apply Now</button>
                </div>
            </div>


            <div className="item">
                <h3 className="main-title">Full Stack Developer</h3>
                <ul>
                  <li>JavaScript</li>
                  <li>React JS</li>
                  <li>React Native</li>
                  <li>3 years experience</li>
                  <li>Full time job</li>
                </ul>
                <p className="sub-title">Denver, Collorado</p>
                <div className="bts">
                    <button className="read">Read More</button>
                    <button className="apply">Apply Now</button>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
}

export default App;
