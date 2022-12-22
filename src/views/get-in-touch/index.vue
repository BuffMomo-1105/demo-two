<template>
  <div>
    <section class="copy-page">
      <h1>
        Trading <br />
        becomes <br />
        Investment
      </h1>
    </section>
    <section class="sub-section">
      <div class="sub-title">
        Connect your investment with top strategy traders through Copy2trade
      </div>
    </section>

    <section class="analytics">
      <div class="row d-flex flex-wrap">
        <div class="col left-item text-start">
          <div class="heading">
            <h1>Advanced Analytics</h1>
          </div>
          <div class="desc">
            <div class="arrow-icon"></div>
            <div class="d-text mb-4">
              Charts visually display Time Weighted ROI, Balance vs Equity,
              Breakdown of Traded Symbols and History of Followers. Charts can
              be adjusted to specific time periods. Strategy profiles include
              detailed tables of statistics to provide information and rich
              insights on performance and behaviour.
            </div>
          </div>
        </div>
        <div class="col right-item">
          <div class="picture">
            <img
              src="../../assets/img/advanced-analtyics.png"
              alt="Advance Analytics"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="strategy">
      <div class="row d-flex flex-wrap">
        <div class="col left-item text-start">
          <div class="heading">
            <h1 class="theme-text">Strategy Profiles</h1>
          </div>
          <div class="desc">
            <div class="arrow-icon"></div>
            <div class="d-text mb-4">
              Investors can view detailed profiles of the strategy provider.
              Supportive information’s are provided to help traders make
              informed investment decision.
            </div>
          </div>
        </div>
        <div class="col right-item">
          <div class="picture">
            <img src="../../assets/img/strategy.png" alt="Strategy Profiles" />
          </div>
        </div>
      </div>
    </section>

    <section class="analytics">
      <div class="row d-flex flex-wrap">
        <div class="col left-item text-start">
          <div class="heading">
            <h1>Equity to Equity Copying</h1>
          </div>
          <div class="desc">
            <div class="arrow-icon"></div>
            <div class="d-text mb-4">
              Investors copy open positions as they begin to follow a strategy.
              The volume that will be copied is based on the equity-to-equity
              ratio, according to the amount allocated to the strategy. An
              investor can set an Equity Stop Loss to stop copying altogether,
              when equity falls below a certain level.
            </div>
          </div>
        </div>
        <div class="col right-item">
          <div class="picture">
            <img src="../../assets/img/equity-copy.png" alt="Equity Copy" />
          </div>
        </div>
      </div>
    </section>
    <section class="strategy">
      <div class="row d-flex flex-wrap">
        <div class="col left-item text-start">
          <div class="heading">
            <h1 class="theme-text">Favorites</h1>
          </div>
          <div class="desc">
            <div class="arrow-icon"></div>
            <div class="d-text mb-4">
              Investors can bookmark strategies they are interested in to watch,
              monitor, and come back to them later. At the same time, all
              strategies that are being followed are listed for easy reference
              and ability to modify settings at any point.
            </div>
          </div>
        </div>
        <div class="col right-item">
          <div class="picture">
            <img src="../../assets/img/favs.png" alt="Strategy Profiles" />
          </div>
        </div>
      </div>
    </section>
    <section class="analytics">
      <div class="ben-wrapper">
        <div class="benefit-heading text-start">
          <h1>Investor benefits</h1>
        </div>
        <div class="row g-2 text-start benefit">
          <div class="col col-xl-6 text-start">
            <div class="number-box">1</div>
            <div class="list-item">
              <b> Copy strategies </b> of sophisticated traders already using
              <b> cTrader.</b>
            </div>
          </div>
          <div class="col col-xl-6 text-start odd-col">
            <div class="number-box">2</div>
            <div class="list-item">
              <b> Keep control - </b> start and stop copying a strategy at any
              time.
            </div>
          </div>
          <div class="col col-xl-6 text-start">
            <div class="number-box">3</div>
            <div class="list-item">
              <b> Advanced risk management </b> settings to protect your
              account.
            </div>
          </div>
          <div class="col col-xl-6 text-start odd-col">
            <div class="number-box">4</div>
            <div class="list-item">
              <b> Full transparency, </b> showing complete history and open
              positions.
            </div>
          </div>
          <div class="col col-xl-6 text-start">
            <div class="number-box">5</div>
            <div class="list-item">
              <b>Rich analytics </b> from detailed charts to help find the right
              strategy.
            </div>
          </div>
          <div class="col col-xl-6 text-start odd-col">
            <div class="number-box">6</div>
            <div class="list-item">
              <b>User-friendly</b> and intuitive interface.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="strategy fee-section">
      <div class="fee">
        <div class="fee-heading">
          <h1 class="theme-text">Fee Structures</h1>
        </div>
        <div class="card">
          <div class="d-flex flex-wrap heading">
            <div class="img-section">
              <img src="../../assets/img/volum-based-commision.png" alt="" />
            </div>
            <div class="title-section">
              <h2>Volume-Based Commissions</h2>
            </div>
          </div>
          <div class="desc">
            Strategy Providers can charge commissions based on the volume that
            their investors have traded, while copying their strategy. Volume
            fees are added to each position and charged once for opening, and
            once for closing positions.
          </div>
        </div>
        <div class="card">
          <div class="d-flex flex-wrap heading">
            <div class="img-section">
              <img src="../../assets/img/performanc-and-managment.png" alt="" />
            </div>
            <div class="title-section">
              <h2>Performance and Management</h2>
            </div>
          </div>
          <div class="desc">
            A popular method used by money managers, which allows them to take a
            percentage of their clients ROI, using a High Water Mark and a fee,
            according to the amount of money their investors have allocated.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
body {
  color: #000;
}
/* Section 1 & 2 */
.copy-page {
  top: 100px;
  background: linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
  position: relative;
  overflow: hidden;
  height: auto;
  padding: 64px 0 80px;
  text-align: left;
}
.copy-page h1 {
  position: relative;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  flex: 0 0 100%;
  max-width: 100%;
  font: 40px "Nekst", sans-serif;
  font-weight: 700;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
}
.sub-section {
  width: 100%;
  bottom: -74px;
  margin-bottom: 90px;
}
.sub-title {
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
  margin-left: 0;
  position: relative;
  width: 100%;
  padding-right: 24px;
  padding-left: 24px;
  font: 20px/30px "Inter", sans-serif;
  font-weight: 600;
  text-align: left;
}
/* Section 1 & 2 */
.analytics,
.strategy {
  top: 140px;
  padding: 88px 24px;
}
.analytics {
  background-color: #f2f2f2;
}
.analytics .col,
.strategy .col {
  min-width: 100%;
  padding: 0 24px;
}
.analytics .col .picture img,
.strategy .col .picture img {
  width: 100%;
}
.analytics .heading h1,
.strategy .heading h1 {
  font: 40px/44px "Nekst", sans-serif;
  font-weight: 700;
  margin-bottom: 40px;
}
/* Section 3 */
.arrow-icon {
  margin-bottom: 16px;
  width: 45px;
  height: 21px;
  background-image: url("data:image/svg+xml,%3Csvg width='46' height='22' viewBox='0 0 46 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M34.7071 0L44.7071 10L45.4142 10.7071L44.7071 11.4142L34.7071 21.4142L33.2929 20L41.5858 11.7071H0V9.70711H41.5858L33.2929 1.41421L34.7071 0Z' fill='black'/%3E%3C/svg%3E%0A");
}
.d-text {
  font: 20px/30px "Inter", sans-serif;
  font-weight: 400;
}

/* Section 3 */
@media (770px < width < 1280px) {
  /* Section 1 & 2 */
  .copy-page {
    height: 500px;
    margin: 0 32px;
  }
  .sub-section {
    width: 100%;
    margin-bottom: 80px;
  }
  .sub-title {
    float: right;
    width: 40%;
    margin-right: 42px;
    font: 16px/24px "Inter", sans-serif;
  }
  .copy-page h1 {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    font: 56px/62px "Nekst", sans-serif;
    padding-right: 64px;
    padding-left: 64px;
    font-weight: 700;
  }
  /* Section 1 & 2 */

  /* Section 3- Advanced analytics*/

  .analytics .col,
  .strategy .col {
    min-width: 40%;
    width: 49%;
    max-width: 49%;
  }
  .analytics .left-item,
  .strategy .left-item {
    padding: 0;
    margin-left: 70px;
  }
  .analytics .heading h1,
  .strategy .heading h1 {
    font: 48px/52px "Nekst", sans-serif;
    font-weight: 700;
    margin-bottom: 40px;
  }
  .analytics .desc .d-text,
  .analytics .desc .d-text {
    font: 20px/30px "Inter", sans-serif;
    font-weight: 400;
  }

  /* Section 3- Advanced analytics*/
}
@media (min-width: 1280px) {
  /* Section 1 & 2 */
  .copy-page {
    height: 600px;
    margin: 0 64px;
  }
  .sub-section {
    width: 100%;
    margin-bottom: 140px;
  }
  .sub-title {
    float: right;
    width: 29%;
    margin-right: 17%;
    font: 24px/36px "Inter", sans-serif;
    font-weight: 600;
  }
  .copy-page h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font: 96px/104px "Nekst", sans-serif;
    padding-right: 104px;
    padding-left: 104px;
    font-weight: 700;
  }
  /* Section 1 & 2 */

  /* Section 3- Advanced analytics*/
  .analytics,
  .strategy {
    padding: 140px 12px;
    padding-left: 10%;
  }
  .analytics .heading h1,
  .strategy .heading h1 {
    margin-left: 8.33333%;
    font: 56px/62px "Nekst", sans-serif;
    font-weight: 700;
    margin-bottom: 56px;
  }
  .analytics .desc .d-text,
  .strategy .desc .d-text {
    margin-left: 1.5rem;
    max-width: 77.44444%;
    font: 20px/30px "Inter", sans-serif;
    font-weight: 400;
  }
  .analytics .left-item,
  .strategy .left-item {
    flex: 0 0 60%;
    max-width: 60%;
    min-width: 60%;
  }
  .analytics .right-item,
  .strategy .right-item {
    flex: 0 0 39%;
    max-width: 39%;
    min-width: 39%;
  }
  .analytics .desc,
  .strategy .desc {
    display: flex;
    margin-left: 16.66667%;
  }
  .arrow-icon {
    min-width: 46px;
  }

  /* Section 3- Advanced analytics*/
}
</style>

<style>
/* benefits section */
.number-box {
  font: 24px/36px "Inter", sans-serif;
  font-weight: 600;
  margin-right: 16px;
  width: 48px;
  height: 48px;
  max-width: 48px;
  min-width: 48px;
  background: linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.list-item {
  min-width: 100% !important;
}
.benefit .col {
  margin-bottom: 40px;
  padding: 0;
}
.benefit-heading h1 {
  margin-bottom: 40px;
  font: 40px/44px "Nekst", sans-serif;
  font-weight: 700;
  /* padding: 0 24px; */
}
.benefit .list-item {
  font: 20px/30px "Inter", sans-serif;
  font-weight: 400;
}

@media (770px < width < 1280px) {
  .benefit {
    margin-left: 8.33333%;
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .benefit .col {
    display: flex;
    min-width: 97.777%;
  }
  .benefit-heading h1 {
    margin-bottom: 56px;
    margin-left: 8.33333%;
    font: 48px/52px "Nekst", sans-serif;
    font-weight: 700;
  }
  .number-box {
    margin-right: 32px;
    width: 64px;
    height: 64px;
    max-width: 64px;
    min-width: 64px;
  }
  .benefit .list-item {
    font-weight: 400;
    align-items: center;
    display: flex;
  }
  .benefit b {
    margin: 0 4px;
  }
  /* .benefit .list-item {
    font: 24px/30px "Inter", sans-serif;
    font-weight: 400;
  } */
}
@media (min-width: 1280px) {
  .benefit-heading h1 {
    margin-bottom: 80px;
    font: 56px/62px "Nekst", sans-serif;
    font-weight: 700;
    margin-left: 0px;
  }
  .benefit .list-item {
    font: 24px/30px "Inter", sans-serif;
    font-weight: 400;
  }
  .number-box {
    margin-right: 32px;
    width: 64px;
    height: 64px;
    max-width: 64px;
    min-width: 64px;
  }
  .benefit .col {
    display: flex;
    align-items: center;
    min-width: auto;
    margin-bottom: 40px;
  }
  .benefit .odd-col {
    /* margin-top: 80px; */
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
    margin-left: 44px;
  }
  .list-item {
    min-width: auto !important;
  }
  .ben-wrapper {
    width: 85%;
    margin: auto;
  }
}
/* benefits section */
</style>

<style>
.fee {
  background-color: #000000;
  padding: 64px 24px;
  color: white;
  text-align: left;
}
.fee .card {
  background-color: #000000;
  border: none;
  border-bottom: 2px solid linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
  margin-bottom: 30px;
}
.fee-heading h1 {
  font: 42px/44px "Nekst", sans-serif;
  font-weight: 700;
  margin-bottom: 55px;
  letter-spacing: 1px;
}
.fee .card .heading .title-section {
  width: 70%;
  font: 24px/26px "Nekst", sans-serif;
  font-weight: 700;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.fee .card .heading .title-section h2 {
  background: linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.fee .card .heading .img-section img {
  width: 48px;
}
.fee .desc {
  margin-bottom: 32px;
  font: 20px/30px "Inter", sans-serif;
  font-weight: 400;
}
@media (770px < width < 1280px) {
  .fee-heading h1 {
    font: 48px/52px "Nekst", sans-serif;
    font-weight: 700;
    margin-bottom: 40px;
  }
}

@media (min-width: 768px) {
  .fee .card .heading .img-section img {
    width: 40px;
  }
  .fee .card .heading .title-section {
    font: 32px/36px "Nekst", sans-serif;
    font-weight: 700;
    margin-bottom: 32px;
    width: auto;
    margin-left: 10px;
  }
  .fee .card {
    margin-top: 48px;
    padding-top: 48px;
    padding-bottom: 25px;
  }
  .fee {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
    margin-left: 8.33333%;
    padding: 80px 64px;
  }
  .fee .desc {
    margin-bottom: 24px;
    font: 20px/30px "Inter", sans-serif;
    font-weight: 400;
    margin-left: 0px;
  }
}
@media (min-width: 1280px) {
  .fee-heading h1 {
    font: 56px/62px "Nekst", sans-serif;
    font-weight: 700;
    margin-bottom: 56px;
  }
  .fee {
    padding: 140px;
  }
  .fee .card .heading .img-section img {
    width: 82px;
  }
  .fee .desc {
    margin-left: 102px;
    top: -30px;
  }
  .fee .card .heading .title-section {
    margin-bottom: 5px;
    align-items: normal;
    margin-left: 20px;
  }
  .fee-section {
    padding-right: 60px;
    padding-left: 60px;
  }
}
.theme-text {
  background: linear-gradient(45deg, #00bcdd 0%, #ff00ff 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
