<template>
  <b-input-group>
    <b-input-group-prepend>
      <b-button
        class="text-white py-0"
        size="lg"
        @click="valueChange(value - 1)"
      >
        -
      </b-button>
    </b-input-group-prepend>

    <b-form-input
      id="id"
      size="md"
      v-model="currentValue"
      class="border-secondary text-center text-white"
    />

    <b-input-group-append>
      <b-button
        class="text-white py-0"
        size="lg"
        @click="valueChange(value + 1)"
      >
        +
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: "TheFormSpinbuttonWithInput",
  props: {
    id: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      required: false,
      default: "md",
      validator: function (value) {
        return ["sm", "md", "lg"].includes(value);
      },
    },

    value: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    currentValue: 1.0,
  }),
  watch: {
    value(val) {
      if (val) {
        this.currentValue = val;
      } else {
        this.currentValue = this.value;
      }
    },
  },
  methods: {
    valueChange(newValue) {
      if (newValue <= 0) {
        this.$emit("input", 0);
      } else {
        this.$emit("input", newValue);
      }
    },
  },
};
</script>

<style scoped>
/* Remove up and down arrows inside number input */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
