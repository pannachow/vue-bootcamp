<template>
  <div id="app">
    <h1>Counter App</h1>
    <p>Number: {{ count }}</p>
    <CounterButton @click.native="IncrementCounts" title="Increase">Increment count</CounterButton>
    <CounterButton @click.native="DecrementCounts" title="Decrease">Increment count</CounterButton>
    <CounterButton @click.native="ResetCounts" title="Reset">Reset count</CounterButton>
  </div>
</template>

<script>
import CounterButton from "./components/CounterButton.vue";

export default {
  name: "App",
  components: { CounterButton },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    HelloWorld() {
      console.log("Hello my coder friends!");
    },
    IncrementCounts() {
      this.count = this.count + 1;
    },
    DecrementCounts() {
      this.count = this.count - 1;
    },
    ResetCounts() {
      this.count = 0;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
