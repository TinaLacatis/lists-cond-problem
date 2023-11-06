const app = Vue.createApp({
  data() {
    return {
      givenTask: "",
      tasks: [],
      show: true,
    };
  },
  computed: {
    btnCaption() {
      return this.show ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.givenTask);
    },
    toggleList() {
      this.show = !this.show;
    },
  },
});
app.mount("#assignment");
