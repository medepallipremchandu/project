import React from "react";
import "./navbar.css"

function Navbar() {
    return(
    <nav class="navbar navbar-expand-lg fixed-top ">
  <div class="container-fluid">
    <a class="navbar-brand cl" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link  cl" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  cl" aria-current="page" href="/">Page2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cl" aria-current="page" href="/">Page3</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cl" aria-current="page" href="/">Page4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link cl" aria-current="page" href="/">Page5</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
}
export default Navbar;