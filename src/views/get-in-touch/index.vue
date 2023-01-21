<script setup></script>
<template>
  <div class="get-touch-page">
    <contact-form class="text-start">
      <template #contact-heading>
        <div class="get-touch-heading">
          <h1>
            <span>Tomorrow can't wait. </span>
            Get in touch today
          </h1>
        </div>
      </template>
    </contact-form>
    <section class="office-address">
      <div class="address-inner">
        <div class="address-heading">
          <h1 class="d-flex">
            <svg
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>location-filled</title>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="location-outline"
                    fill="#c9f73a"
                    transform="translate(106.666667, 42.666667)"
                  >
                    <path
                      d="M149.333333,7.10542736e-15 C231.807856,7.10542736e-15 298.666667,66.8588107 298.666667,149.333333 C298.666667,176.537017 291.413333,202.026667 278.683512,224.008666 C270.196964,238.663333 227.080238,313.32711 149.333333,448 C71.5864284,313.32711 28.4697022,238.663333 19.9831547,224.008666 C7.25333333,202.026667 2.84217094e-14,176.537017 2.84217094e-14,149.333333 C2.84217094e-14,66.8588107 66.8588107,7.10542736e-15 149.333333,7.10542736e-15 Z M149.333333,85.3333333 C113.987109,85.3333333 85.3333333,113.987109 85.3333333,149.333333 C85.3333333,184.679557 113.987109,213.333333 149.333333,213.333333 C184.679557,213.333333 213.333333,184.679557 213.333333,149.333333 C213.333333,113.987109 184.679557,85.3333333 149.333333,85.3333333 Z"
                      id="Combined-Shape"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span> Our Office </span>
          </h1>
        </div>
        <div class="address-body text-start">
          <h3>Capital Creek Broking Service LLC</h3>
          <div class="d-flex flex-wrap justify-content-between">
            <div>
              <p>Registration No: 2795 LLC 2022</p>
              <p>SUITE 305 GRIFFITH CORPORATE CENTRE</p>
              <p>BEACHMINT KINGSTOWN 305VC</p>
              <p>SAINT VINCENT AND THE GRENADINES</p>
            </div>
            <div class="contact-mail">
              <div>
                <i class="fa-solid fa-envelope"></i>
                info@b2pip.com( <strong>SALES</strong> )
              </div>
              <div>
                <i class="fa-solid fa-envelope"></i>
                support@b2pip.com( <strong>SUPPORT</strong> )
              </div>
              <div>
                <i class="fa-solid fa-envelope"></i>
                admin@b2pip.com( <strong>COMPLIANCE</strong> )
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.address-inner {
  width: 98%;
  max-width: 1400px;
  margin-bottom: 1em;
}
.fa-envelope:before {
  color: #c9f73a;
}
.contact-mail {
  font-size: 20px;
  text-align: left;
  line-height: 36px;
}
.office-address {
  padding-top: 50px;
  padding-left: 1em;
  background-color: black;
  color: white;
  display: flex;
}
.address-heading {
  width: 100%;
  margin-bottom: 2em;
}
.address-heading h1 {
  width: 100%;
  color: #fff;
  font: 26px/30px "Inter", sans-serif;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  margin-bottom: 0;
  text-align: left;
  align-items: center;
}
.address-heading h1 svg {
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}
.address-body {
  line-height: 14px;
}
.address-body p {
  color: #d3d3d3;
}
.address-body h3 {
  color: #c9f73a;
}
</style>
<style scoped>
.get-touch-page {
  padding-top: 70px;
}
.get-touch-heading h1 span {
  color: #c9f73a;
}
.get-touch-heading {
  margin-bottom: 2em;
}
.get-touch-heading h1 {
  font: 40px/44px "Nekst", sans-serif;
  font-weight: 700;
  margin-left: 11px;
}
:deep(.contact-inner) {
  width: 100%;
  margin: 0;
}
:deep(.contact-input) {
  width: 95% !important;
}

@media (min-width: 768px) {
  .get-touch-heading h1 {
    font: 40px/44px "Nekst", sans-serif;
    font-weight: 700;
    font: 56px/62px "Nekst", sans-serif;
    font-weight: 700;
    width: 75%;
    margin: auto;
  }
  :deep(.contact-inner) {
    width: 75%;
    margin: auto;
  }
  .get-touch-heading {
    margin-bottom: 4em;
  }
  .address-inner {
    width: 60%;
    max-width: 980px;
  }
}
</style>
