<template>
  <button class="btn btn-primary" @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: String,
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
