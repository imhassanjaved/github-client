<template>
  <div class="main-container">
    <div v-if="repositories && repositories.length" class="inner-container">
      <div class="btn-reset-container">
        <h3>{{ repositories.length || "0" }} Repositories</h3>
        <base-button text="Reset" @click="reset" />
      </div>

      <div class="repos-list-container">
        <div class="repos-list">
          <repo
            v-for="(repo, index) in repositories"
            :repo="repo"
            :key="index"
            @onItemSelect="selectRepo(repo)"
          />
        </div>
      </div>
    </div>
    <not-found v-if="!repositories || !repositories.length" />
  </div>
</template>

<script>
import Repo from "./Repo.vue";
import BaseButton from "./BaseButton.vue";
import NotFound from "./NotFound.vue";
import * as api from "../apiService";

export default {
  name: "ReposList",
  components: { Repo, BaseButton, NotFound },
  props: {
    repos: { type: Array },
  },
  data() {
    return {
      repositories: {},
    };
  },
  mounted() {
    if (this.repos && this.repos.length) this.repositories = this.repos;
    else this.getRepos();
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods: {
    reset() {
      this.$router.go(-1);
    },
    selectRepo(selectedRepo) {
      this.$router.push({
        name: "repo-details",
        params: {
          username: this.username,
          reponame: selectedRepo.name,
          repo: selectedRepo,
        },
      });
    },
    async getRepos() {
      try {
        const { data } = await api.getRepos(this.username);
        if (data && data.length) this.repositories = data;
        else alert("No repo found!");
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.inner-container {
  width: 60%;
}

.btn-reset-container {
  display: flex;
  justify-content: space-between;
}

.repos-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
h3 {
  margin: 0px !important;
}
</style>
