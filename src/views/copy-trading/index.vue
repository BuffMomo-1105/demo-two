<template>
  <section class="page-copy__promo mx-4">
    <div class="page-copy__promo-inner">
      <div class="page-copy__promo-main">
        <div class="container copy-top position-relative">
          <div class="row main-banner mb-4">
            <div class="col">
              <h1 class="copy-banner-heading w-25">
                Trading becomes Investment
              </h1>
            </div>
            <div class="col" style="min-width: 400px; padding-top: 5%">
              <span class="copy-banner-sub-heading w-75"
                >Connect your investment with top strategy traders through
                Copy2trade
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="page-copy_section-one">
    <img
      src="../../assets/img/advanced-analtyics.png"
      alt=""
      class="section-one-img"
    />
    <div class="row copy-section">
      <div class="col-12 text-start section-one-left">
        <h1 class="copy-section-heading">Advanced Analytics</h1>
        <div class="d-flex flex-wrap desc">
          <span class="copy-section-arrow mt-1 me-1"></span>
          <p class="copy-section-one-desc">
            Charts visually display Time Weighted ROI, Balance vs Equity,
            Breakdown of Traded Symbols and History of Followers. Charts can be
            adjusted to specific time periods. Strategy profiles include
            detailed tables of statistics to provide information and rich
            insights on performance and behaviour.
          </p>
        </div>
      </div>
      <div class="col-4 mobile-hide"></div>
    </div>
  </section>
  <section class="page-copy_section-one">
    <img
      src="../../assets/img/strategy.png"
      alt=""
      class="section-one-img even-section-img"
    />
    <div class="row even-section">
      <div class="col-12 text-start section-one-left">
        <h1 class="copy-section-heading">Strategy Profiles</h1>
        <div class="d-flex flex-wrap desc">
          <span class="copy-section-arrow mt-1 me-1"></span>
          <p class="copy-section-one-desc">
            Investors can view detailed profiles of the strategy provider.
            Supportive information’s are provided to help traders make informed
            investment decision.
          </p>
        </div>
      </div>
      <div class="col-4 mobile-hide"></div>
    </div>
  </section>
  <section class="page-copy_section-one">
    <img
      src="../../assets/img/equity-copy.png"
      alt=""
      class="section-one-img"
    />
    <div class="row copy-section">
      <div class="col-12 text-start section-one-left">
        <h1 class="copy-section-heading">Equity to Equity Copying</h1>
        <div class="d-flex flex-wrap desc">
          <span class="copy-section-arrow mt-1 me-1"></span>
          <p class="copy-section-one-desc">
            Investors copy open positions as they begin to follow a strategy.
            The volume that will be copied is based on the equity-to-equity
            ratio, according to the amount allocated to the strategy. An
            investor can set an Equity Stop Loss to stop copying altogether,
            when equity falls below a certain level.
          </p>
        </div>
      </div>
      <div class="col-4 mobile-hide"></div>
    </div>
  </section>
  <section class="page-copy_section-one">
    <img
      src="../../assets/img/favs.png"
      alt=""
      class="section-one-img even-section-img"
    />
    <div class="row even-section">
      <div class="col-12 text-start section-one-left">
        <h1 class="copy-section-heading">Favorites</h1>
        <div class="d-flex flex-wrap desc">
          <span class="copy-section-arrow mt-1 me-1"></span>
          <p class="copy-section-one-desc">
            Investors can bookmark strategies they are interested in to watch,
            monitor, and come back to them later. At the same time, all
            strategies that are being followed are listed for easy reference and
            ability to modify settings at any point.
          </p>
        </div>
      </div>
      <div class="col-4 mobile-hide"></div>
    </div>
  </section>
  <section class="page-copy_section-one benefit-section">
    <h3 class="copy-section-heading text-start">Investor benefits</h3>
    <div class="row copy-section">
      <div class="col text-start">
        <ul class="text-decoration-none">
          <li>
            <span class="list-index">1</span>
            <p>
              Copy strategies of sophisticated traders already using cTrader
            </p>
          </li>
          <li>
            <span class="list-index">2</span>
            <p>Keep control – start and stop copying a strategy at any time</p>
          </li>
          <li>
            <span class="list-index">3</span>
            <p>Advanced risk management settings to protect your account</p>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="text-decoration-none">
          <li>
            <span class="list-index">4</span>
            <p>
              Full transparency, showing complete history and open positions
            </p>
          </li>
          <li>
            <span class="list-index">5</span>
            <p>
              Rich analytics from detailed charts to help find the right
              strategy
            </p>
          </li>
          <li>
            <span class="list-index">6</span>
            <p>User-friendly and intuitive interface</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="page-copy_section-one">
    <div class="fee-section">
      <h3 class="copy-section-heading text-start text-white">Fee Structures</h3>
      <ul>
        <li>
          <div class="w-25">
            <img src="../../assets/img/volum-based-commision.png" alt="" />
          </div>
          <div class="w-75">
            <h1>Volume-Based Commissions</h1>
            <p>
              Strategy Providers can charge commissions based on the volume that
              their investors have traded, while copying their strategy. Volume
              fees are added to each position and charged once for opening, and
              once for closing positions.
            </p>
          </div>
        </li>
        <li>
          <div class="w-25">
            <img src="../../assets/img/performanc-and-managment.png" alt="" />
          </div>
          <div class="w-75">
            <h1>Performance and Management</h1>
            <p>
              A popular method used by money managers, which allows them to take
              a percentage of their clients ROI, using a High Water Mark and a
              fee, according to the amount of money their investors have
              allocated.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
.container {
  position: relative;
}
.container-img {
  position: absolute;
  top: 0px;
  right: 0px;
}

.page-copy__promo-inner {
  overflow: hidden;
  position: relative;
  background: rgb(123 208 248);
  margin: 0 2rem;
}
.copy-top {
  min-height: 70vh;
  margin-top: 12rem;
}

.copy-banner-heading {
  text-align: left;
  margin-left: 10%;
  margin-top: 85px;
  font-weight: 800;
  font-size: 6rem;
  color: black;
}
.copy-banner-sub-heading {
  position: absolute;
  bottom: -73px;
  right: 10%;
  font-size: 25px;
  font-weight: 600;
  text-align: left;
  line-height: 1.6rem;
}

/* Section one */
.copy-section {
  margin-top: 10%;
  background-color: #ececec;
  padding: 0 2rem;
  padding-top: 6rem;
  margin-right: 0;
  min-height: 85vh;
}
.benefit-section > .copy-section {
  margin: 0;
  padding: 0;
}
.benefit-section {
  background-color: #ececec;
  margin-top: 10%;
  padding-top: 10%;
}
.copy-section-heading {
  font-weight: 800;
  font-size: 3rem;
  color: black;
}
.copy-section-arrow {
  display: inline-block;
  margin-left: 12px;
  vertical-align: middle;
  width: 37px;
  height: 17px;
  background-image: url("data:image/svg+xml,%3Csvg width='37' height='17' viewBox='0 0 37 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='-4.37114e-08' y1='8.5' x2='36' y2='8.5' stroke='black'/%3E%3Cpath d='M29 1L36 8.5L29 16' stroke='black'/%3E%3C/svg%3E%0A");
}

.copy-section-one-desc {
  width: 540px;
  font-size: 20px;
  letter-spacing: 0.6px;
}
.section-one-img {
  width: 40%;
  position: absolute;
  top: -20%;
  z-index: 99;
  right: 5%;
}
.section-one-left {
  padding-left: 10%;
  padding-top: 5%;
}
.section-one-left > .desc {
  margin-left: 13%;
  margin-top: 4%;
}
.even-section {
  padding: 0 2rem;
  padding-top: 6rem;
  margin-right: 0;
  height: 85vh;
}
@media (max-width: 800px) {
  .mobile-hide {
    display: none;
  }
  .section-one-left,
  .section-one-left > .desc {
    margin: 0;
    padding: 0;
  }
}
@media (1000px < width < 1110px) {
  .section-one-img {
    top: -20%;
  }
}
@media (600px < width < 1000px) {
  .section-one-img {
    top: -20%;
  }
}
/* @media (500px < width < 1000px) {
  .strategy-img {
    top: -20%;
  }
} */
/* @media (500px < width < 800px) {
  .sstrategy-img {
    top: -10%;
  }
} */
@media (max-width: 600px) {
  .section-one-img {
    top: -10%;
  }
}
/* End section one */
@media (650px < width < 780px) {
  .copy-banner-sub-heading {
    width: 85% !important;
  }
  .copy-banner-heading {
    font-size: 75px !important;
  }
}
@media (max-width: 650px) {
  .copy-banner-heading {
    font-size: 45px !important;
  }
  .copy-banner-sub-heading {
    bottom: -190px;
    right: 23%;
    font-size: 20px;
  }
}

.list-index {
  margin-right: 32px;
  width: 106px;
  height: 64px;
  max-width: 64px;
  min-width: 64px;
  background: rgb(123 208 248);
  display: flex;
  align-items: center;
  justify-content: center;
}
.benefit-section {
  margin-top: 10%;
}
.benefit-section > .copy-section {
  width: 75%;
  margin: auto;
}
.benefit-section li {
  text-decoration: none;
  list-style: none;
  display: flex;
  margin: 10%;
  font-size: 25px;
  letter-spacing: 1px;
  text-align: left;
  font-weight: 600px;
  min-width: 400px;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
}

.benefit-section > .copy-section-heading {
  margin-left: 15%;
}

/* Fee section */
.fee-section {
  width: 75%;
  margin: auto;
  background-color: black;
  color: white;
}
.fee-section > ul {
  list-style: none;
  padding: 7rem;
  text-align: left;
}
.fee-section ul li {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid white;
  padding: 3rem;
}
.fee-section ul li img {
  border: 3px solid rgb(123 208 248);
  border-radius: 20px;
  width: 70%;
}
.fee-section .copy-section-heading {
  margin-left: 10%;
  padding-top: 10%;
}
@media (max-width: 400px) {
  .benefit-section li {
    min-width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  .fee-section {
    width: 100%;
  }
}
@media (max-width: 1000px) {
  .benefit-section > .copy-section {
    width: 100%;
    margin: auto;
  }
  .benefit-section li {
    width: 100vw;
  }
  .fee-section > ul,
  .benefit-section ul,
  .benefit-section li,
  .page-copy__promo-inner {
    margin: 0;
    padding: 0;
  }
}
</style>
