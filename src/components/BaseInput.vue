<template>
  <input
    type="text"
    class="form-control"
    :placeholder="placeholder"
    :value="value"
    v-on:input="updateValue($event.target.value)"
    @keypress.enter="handleKeyEnter"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    placeholder: String,
    value: String,
  },
  methods: {
    handleKeyEnter(evt) {
      this.$emit("onPressEnter", evt);
    },
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
