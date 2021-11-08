<template>
  <div class="wid">No Data Found</div>
</template>

<script>
export default {
  name: "Repo",
  props: {
    msg: { type: Object },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wid {
  width: 100% !important;
  border: 2px;
  border-style: solid;
  border-color: #f8f8f8;
  border-radius: 3px;
  margin: 10px;
}
</style>
