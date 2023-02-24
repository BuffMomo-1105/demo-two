<template>
  <main>
    <nav class="section-nav">
      <ol class="bullet-list">
        <li v-for="item in items">
          <a :href="item.id">{{ item.title }}</a>
        </li>
      </ol>
    </nav>
    <div class="table-lists">
      <section v-for="item in items" :id="item.id.slice(1)">
        <h2>
          {{ item.title }}
          <span>({{ item.data.length }})</span>
        </h2>
        <Table :data="item.data" :title="item.title"/>
      </section>
    </div>
  </main>
</template>

<script>
import Table from "./Table.vue";
import { data } from "../../../assets/data/index";
export default {
  components: { Table },
  data() {
    return {
      observer: null,
      items: [
        {
          title: "Forex",
          id: "#forex",
          data: data.forexMargin,
        },
        {
          title: "Spot Metals",
          id: "#spot-metals",
          data: data.spotMetal,
        },
        {
          title: "Indices",
          id: "#indices",
          data: data.indicesData,
        },
        {
          title: "Spot Energies",
          id: "#spot-energy",
          data: data.spotEnergy,
        },
        {
          title: "Crypto CFD",
          id: "#crypto-CFD",
          data: data.cryptoCFD,
        },
        {
          title: "ETFs CFD",
          id: "#ETFs-CFD",
          data: data.eftsCFD,
        },
        {
          title: "Shares USA CFD",
          id: "#shares-usa-cfd",
          data: data.sharesUsaCFD,
        },
        {
          title: "Shares EU CFD",
          id: "#shares-eu-cfd",
          data: data.sharesEuCFD,
        },
        {
          title: "Shares Asia CFD",
          id: "#shares-asia-cfd",
          data: data.sharesAsiaCFD,
        },
      ],
    };
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.$el,
      threshold: 0.22,
    });
  },
  mounted() {
    this.$el.querySelectorAll("section[id]").forEach((section) => {
      this.observer.observe(section);
    });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    onElementObserved(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        const id = target.getAttribute("id");
        if (isIntersecting) {
          this.$el
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.add("active");
        } else {
          this.$el
            .querySelector(`nav li a[href="#${id}"]`)
            .parentElement.classList.remove("active");
        }
      });
    },
  },
};
</script>
<style scoped>
.table-lists section {
  display: block !important;
  padding-top: 8rem;
}
.table-lists section h2 {
  position: relative;
  font: 32px/36px "Nekst", sans-serif;
  font-weight: 700;
  padding: 10px;
  border-bottom: 4px solid #c9f73a;
  width: fit-content;
  max-width: 100%;
  color: #c9f73a;
}
/* Sidebar Navigation */
.section-nav {
  margin-top: 7rem;
  padding-left: 0;
  background-color: black;
  color: white;
}

.section-nav a {
  text-decoration: none;
  display: block;
  padding: 0.125rem 0;
  color: white;
  transition: all 50ms ease-in-out;
}

.section-nav a:hover,
.section-nav a:focus {
  color: #666;
}

.section-nav li {
  padding: 2rem;
}
.section-nav li.active > a {
  color: #c9f73a;
  font-size: 20px;
  border-left: 2px solid #c9f73a;
  font-weight: 500;
}

/* Sticky Navigation */
main > nav {
  position: sticky;
  top: 8rem;
  align-self: start;
}

ul.bullet-list,
ol.bullet-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin-left: 1rem;
}

/** page layout **/
main {
  display: grid;
  grid-template-columns: 15em 1fr;
  max-width: 100%;
  width: 90%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section-nav {
    display: none;
  }
  main {
    display: block;
  }
}
</style>
