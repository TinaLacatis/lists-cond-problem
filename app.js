const app = Vue.createApp({
  data() {
    return {
      givenTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.givenTask);
    },
  },
});
app.mount("#assignment");
