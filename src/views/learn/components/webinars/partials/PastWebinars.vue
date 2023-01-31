<template>
  <b-table-simple responsive class="webinar-table">
    <b-thead>
      <b-tr class="webinar-table-header">
        <b-th> Levels</b-th>
        <b-th>Webinars</b-th>
        <b-th>Language</b-th>
        <b-th></b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr v-for="i in 5">
        <b-th
          ><b-badge pill class="webinar-tag mb-2">For all levels</b-badge></b-th
        >
        <b-td class="past-webinar-title"> English Stock CFD Trading</b-td>
        <b-td
          ><b-badge pill class="webinar-tag mb-2 past-tag"
            >English</b-badge
          ></b-td
        >
        <b-td><a href="#" class="learn-more-btn">Learn More</a></b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<style>
.webinar-table > .b-table {
  color: #c9f73a !important;
  line-height: 1.2;
  font-family: "Nekst", sans-serif;
}
.webinar-table-header {
  font-weight: 400;
  font-size: 14px;
  color: white;
  line-height: 1.2;
  font-family: "Nekst", sans-serif;
}
tr {
  border-color: #c9f73a !important;
}
.learn-more-btn {
  text-transform: uppercase;
  color: #c9f73a;
  font-size: 14px;
}
.past-webinar-title {
  color: white;
  font-size: 14px;
}
.past-tag {
  color: white;
  border-color: white;
  background: transparent;
}
@media (min-width: 769px) {
  .webinar-table-header {
    font-size: 24px;
  }
  .past-webinar-title {
    font-size: 24px;
  }
  .learn-more-btn {
    font-size: 16px;
  }
}
</style>
