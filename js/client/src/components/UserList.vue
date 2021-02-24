<template>
    <input
      v-model="title"
      type="text"
      class="form-control"
      placeholder="Search by email"
    >
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="searchByEmail"
      >
        Search
      </button>
  <h4>Tutorials List</h4>
  <ul class="list-group">
    <li
      v-for="(user, index) in users"
      :key="index"
      class="list-group-item"
      :class="{ active: index == currentIndex }"
      @click="setActiveUser(user, index)"
    >
      {{ user.email + ' | ' + user.password }}
    </li>
  </ul>

  <button
    class="m-3 btn btn-sm btn-danger"
    @click="removeAllUsers"
  >
    Remove All
  </button>
  <div v-if="currentUser">
    <h4>Tutorial</h4>
    <div>
      <label><strong>Title:</strong></label> {{ currentUser.title }}
    </div>
    <div>
      <label><strong>Description:</strong></label> {{ currentUser.description }}
    </div>
    <div>
      <label><strong>Status:</strong></label>
      {{ currentUser.published ? "Published" : "Pending" }}
    </div>

    <a
      class="badge badge-warning"
      :href="'/users/' + currentUser.id"
    >
      Edit
    </a>
  </div>
  <div v-else>
    <br>
    <p>Please click on a user...</p>
  </div>
</template>

<script>
import UserDataService from '../services/UserDataService';
import { Console } from '../commons';

export default {
  name: 'TutorialsList',
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      email: '',
    };
  },
  mounted() {
    this.retrieveUsers();
  },
  methods: {
    retrieveUsers() {
      UserDataService.getAll()
        .then((res) => {
          this.users = res.data;
          Console.log(res.data);
        })
        .catch((e) => {
          Console.log(e);
        });
    },

    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },

    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = index;
    },

    removeAllUsers() {
      UserDataService.unregisterAll()
        .then((res) => {
          Console.log(res.data);
          this.refreshList();
        })
        .catch((e) => {
          Console.log(e);
        });
    },

    searchByEmail() {
      UserDataService.search(this.email)
        .then((res) => {
          this.users = res.data;
          Console.log(res.data);
        })
        .catch((e) => {
          Console.log(e);
        });
    },
  },
};
</script>

<style>
</style>
