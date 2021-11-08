<template>
  <div>
    <div class="title-container">
      <h1>Top Contributors</h1>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">PHOTO</th>
          <th scope="col">USERNAME</th>
          <th scope="col">COMMITS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contributor, index) in contributorsData" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <th>
            <img
              class="rounded-circle"
              :src="contributor.author.avatar_url"
              width="30"
            />
          </th>
          <th>{{ contributor.author.login }}</th>
          <th>{{ contributor.total }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  data() {
    return {};
  },
  props: {
    contributorsData: { type: Array },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-container {
  margin: 20px !important;
  display: flex;
  justify-content: center;
}
h1 {
  color: goldenrod;
}
th {
  color: grey;
}
img {
  margin-right: 5px;
}
</style>
