import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark navbar-expand-md d-flex ">
  			<div className="container-fluid ps-0">
    			<a className="navbar-brand ms-4 ms-5">
                <strong>React Page</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end me-2" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-4">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
  			</div>
		</nav>
	);
};

export default Navbar;