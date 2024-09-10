import React from "react";
import './GitPage.css';
import GitImage from '../Images/gitrepositores.png';

function GitPage() {
    return (
        <>
            <div className="maingit" id="git">
                <div className="gitmain">
                    <h3>Git Repositoires.</h3>
                </div>
                <div className="gitbox1">
                    <div className="gitbox">
                        <img src={GitImage} alt="gitimage" className="gitimage" />
                        <p>Tourism Web Frondend</p>
                        <a href="https://github.com/KeshaCodeolima/MY-MERN-Frontend" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                            <button className="buttongit">GIT HUB</button>
                        </a>
                    </div>
                    <div className="gitbox">
                        <img src={GitImage} alt="gitimage" className="gitimage" />
                        <p>Tourism Web Backend</p>
                        <a href="https://github.com/KeshaCodeolima/MERN-Backend" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                            <button className="buttongit">GIT HUB</button>
                        </a>
                    </div>
                    <div className="gitbox">
                        <img src={GitImage} alt="gitimage" className="gitimage" />
                        <p>Angular Web Frondend</p>
                        <a href="https://github.com/KeshaCodeolima/AngularFrontend" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                            <button className="buttongit">GIT HUB</button>
                        </a>
                    </div>
                    <div className="gitbox">
                        <img src={GitImage} alt="gitimage" className="gitimage" />
                        <p>Angular Web Backend</p>
                        <a href="https://github.com/KeshaCodeolima/PythonBackendAngular" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
                            <button className="buttongit">GIT HUB</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GitPage