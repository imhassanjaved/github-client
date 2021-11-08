<template>
  <div class="repo-main-container" @click="selectItem(repo)">
    <div class="title-container">
      <h3>{{ repo.name || "Not available" }}</h3>
    </div>
    <div class="details-container">
      <h5>{{ repo.language || "Not available" }}</h5>
      <div>
        <i class="material-icons">star</i>
        {{ repo.stargazers_count || "0" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repo",
  data() {
    return {};
  },
  props: {
    repo: { type: Object },
  },
  methods: {
    selectItem(repo) {
      this.$emit("onItemSelect", repo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.repo-main-container {
  border: 2px;
  border-style: solid;
  border-color: #f4f4f4;
  border-radius: 3px;
  margin: 5px;
  width: 100%;
}
.title-container {
  margin: 10px !important;
  display: flex;
  justify-content: flex-start;
}
.details-container {
  margin: 10px !important;
  display: flex;
  justify-content: space-between;
}
h3 {
  margin: 0px !important;
  color: #337ab7;
}
h5 {
  color: green;
}
.star {
  height: 10px !important;
}
</style>
