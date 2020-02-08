<template>
  <button class="CounterButton">{{ title }}</button>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.CounterButton {
  background: pink;
}
</style>
