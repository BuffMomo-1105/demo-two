<template>
  <section class="page-home__promo">
    <div class="page-home__promo-inner">
      <div class="page-home__promo-bg"></div>
      <div class="page-home__promo-main">
        <div class="container home-top position-relative">
          <div class="row text-start">
            <div class="col">
              <h1 class="home-slogan">
                <slot name="slogan-left"></slot>
              </h1>
              <button type="button" class="btn btn-dark home-btn">
                <slot name="home-button"></slot>
              </button>
            </div>
            <div class="col m-auto mt-4">
              <h3 class="home-info px-2">
                <slot name="slogan-right"></slot>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.home-top {
  min-height: 86.8vh;
  margin-top: 12rem;
}
.home-slogan {
  font-weight: 800;
  font-size: 4rem;
  color: black;
}
.home-btn {
  width: 300px;
  border: none;
  border-radius: 0;
  line-height: 3rem;
  margin-top: 3rem;
  font-size: 18px;
  color: white;
}

@media (max-width: 750px) {
  .home-btn {
    width: 100%;
  }
}
@media (max-width: 1430px) {
  .home-info {
    width: 85vw;
    padding-bottom:2rem ;
  }
}
</style>
