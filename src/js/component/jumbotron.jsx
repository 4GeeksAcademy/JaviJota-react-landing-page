import React from "react";

const Jumbotron = () => {
    return (
      <div className="p-5 my-4 mx-5 bg bg-secondary bg-opacity-10 rounded-2">
      <div className="container-xxl py-5">
        <h1 className="display-5 fw-bold">A warm welcome!</h1>
        <p className="col-md-8 fs-4">
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Maxime mollitia perspiciatis 
          iusto sit ad earum inventore, error iure vitae molestias!
        </p>
        <button className="btn btn-primary btn-lg mt-2" type="button">Call to action</button>
      </div>
    </div>
    );
};

export default Jumbotron;