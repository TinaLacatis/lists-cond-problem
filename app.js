const app = Vue.createApp({
  data() {
    return {
      givenTask: "",
      tasks: [],
      show: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.givenTask);
    },
    toggleBtn() {
      this.show = !this.show;
    },
  },
});
app.mount("#assignment");
