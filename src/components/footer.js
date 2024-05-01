import React from "react";
import "./footer.css"

function Footer() {
    return(
      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
      
          <div>
            <a href="" class="btn btn-outline-secondary rounded-circle btn-floating m-2">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a href="" class="btn btn-outline-secondary rounded-circle btn-floating m-2">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="" class="btn btn-outline-secondary rounded-circle btn-floating m-2">
              <i class="fa fa-google"></i>
            </a>
            <a href="" class="btn btn-outline-secondary rounded-circle btn-floating m-2">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="" class="btn btn-outline-secondary rounded-circle btn-floating m-2">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="" class="btn btn-outline-secondary rounded-circle btn-floating m-2">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </section>
      
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
            <div class="col-md-1 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Angular</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">React</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Vue</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Laravel</a>
                </p>
              </div>
      
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Angular</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">React</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Vue</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Laravel</a>
                </p>
              </div>
      
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Pricing</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Settings</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Orders</a>
                </p>
                <p>
                  <a href="#!" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0">Help</a>
                </p>
              </div>
      
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fa fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i class="fa fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i class="fa fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i class="fa fa-print me-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
      
        <div class="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
          © 2021 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    );
}
export default Footer;
