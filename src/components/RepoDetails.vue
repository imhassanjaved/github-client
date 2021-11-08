<template>
  <div class="container">
    <div class="inner-main">
      <div class="btn-back-container">
        <div>
          <base-button text="Back" @click="backHandler" />
        </div>
      </div>
      <div class="wd" v-if="selectedRepo.name">
        <div class="wd">
          <h3>{{ selectedRepo.name }}</h3>
          <h5>{{ selectedRepo.language || "Language not available" }}</h5>
          <div>
            <i class="material-icons">star</i>
            {{ selectedRepo.stargazers_count || "0" }}
          </div>
        </div>
        <div class="wd" v-if="chartData.length">
          <bar-chart :chartData="chartData"></bar-chart>
        </div>
        <div class="wd" v-if="participantsData.all">
          <line-chart :participantsData="participantsData" />
        </div>
        <div class="wd" v-if="contributorsData.length">
          <base-table :contributorsData="contributorsData" />
        </div>
      </div>
      <not-found v-if="!selectedRepo.name" />
    </div>
  </div>
</template>

<script>
import * as api from "../apiService";
import BarChart from "./BarChart.vue";
import BaseTable from "./BaseTable.vue";
import BaseButton from "./BaseButton.vue";
import LineChart from "./LineChart.vue";
import NotFound from "./NotFound.vue";

export default {
  name: "Repo",
  components: { BarChart, BaseTable, LineChart, BaseButton, NotFound },
  props: {
    repo: { type: Object },
  },
  data() {
    return {
      chartData: [],
      contributorsData: [],
      participantsData: {},
      repoName: "",
      ownerName: "",
      selectedRepo: {},
    };
  },
  mounted() {
    this.repoName = this.$route.params.reponame;
    this.ownerName = this.$route.params.username;

    if (this.repo && this.repo.owner) this.selectedRepo = this.repo;
    else this.getRepo();

    this.loadData();
  },
  methods: {
    loadData() {
      this.getRepoCommits();
      this.getRepoContributors();
      this.getRepoParticipations();
    },
    backHandler() {
      this.$router.go(-1);
    },
    async getRepo() {
      try {
        const { data } = await api.getRepo(this.ownerName, this.repoName);
        if (data) {
          this.selectedRepo = data;
        }
      } catch (err) {
        alert(err.message);
      }
    },
    async getRepoParticipations() {
      try {
        const { data } = await api.getRepoParticipations(
          this.ownerName,
          this.repoName
        );
        if (data) this.participantsData = data;
      } catch (err) {
        alert(err.message);
      }
    },
    async getRepoCommits() {
      try {
        const { data } = await api.getRepoCommits(
          this.ownerName,
          this.repoName
        );
        if (data && data.length) this.chartData = data;
      } catch (err) {
        alert(err.message);
      }
    },
    async getRepoContributors() {
      try {
        const { data } = await api.getRepoContributors(
          this.ownerName,
          this.repoName
        );

        if (data && data.length) {
          data.sort((a, b) => {
            return b.total - a.total;
          });
          data.length = 5;
          this.contributorsData = data;
        }
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 65%;
}
.wd {
  width: 100% !important;
  border: 2px;
  border-style: solid;
  border-color: #f8f8f8;
  border-radius: 3px;
  margin: 10px;
}
.inner-main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.btn-back-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 10px;
}
.main-details-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.inner-details-container {
  margin: 10px !important;
  border: 2px;
  border-style: solid;
  border-color: #f8f8f8;
  border-radius: 3px;
  min-width: 60%;
}

h3 {
  margin: 0px !important;
  color: #337ab7;
}
h5 {
  color: green;
}
</style>
