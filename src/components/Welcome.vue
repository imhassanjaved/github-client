<template>
  <div>
    <div>
      <img alt="GitHub logo" class="logo" src="./../assets/github.png" />
      <div class="container">
        <base-input
          placeholder="Enter github username"
          @input="handleInput"
          @onPressEnter="findRepos"
        />
        <base-button text="Find" @click="findRepos" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import * as api from "../apiService";

export default {
  components: {
    BaseInput,
    BaseButton,
  },
  name: "Welcome",
  data() {
    return {
      username: "",
      selectedRepo: {},
      repos: [],
    };
  },
  methods: {
    async findRepos() {
      if (this.username) {
        try {
          const { data } = await api.getRepos(this.username);
          if (data && data.length) {
            this.$router.push({
              name: "repos-list",
              params: { username: this.username, repos: data },
            });
          } else alert("No repo found!");
        } catch (err) {
          alert(err.message);
        }
      }
    },
    handleInput(value) {
      this.username = value;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-top: 20px;
}
input {
  margin-right: 10px;
}
.logo {
  width: 50%;
}
</style>
