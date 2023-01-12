<template>
  <footer class="footer-16371">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 text-center">
          <div class="footer-site-logo mb-4">
            <a href="#"
              ><img src="../../assets/img/logo.svg" alt="" class="footer-logo"
            /></a>
          </div>
          <ul class="list-unstyled nav-links mb-5">
            <li><a href="#">About Company</a></li>
            <li><a href="#">FAQ</a></li>
            <li><router-link to="/policy"> KYC / AML Policy </router-link></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div class="social mb-4">
            <h3>Stay in touch</h3>
            <ul class="list-unstyled">
              <li class="in">
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li class="fb">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              </li>
              <li class="tw">
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
              </li>
              <li class="pin">
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>

          <div class="copyright">
            <p class="mb-0">
              <small>&copy;b2pip.com. All Rights Reserved.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
@import "../../assets/styles/footer.css";
.footer-logo {
  width: 155px;
}
</style>
