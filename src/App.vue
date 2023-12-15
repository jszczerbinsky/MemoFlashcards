<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <CardView :cardlist="cardlist" />
</template>

<script>
import CardView from './components/CardView.vue'

export default {
  name: 'App',
  data() {
    return {
      cardlist: [
        {title: "card 1", desc: "desc 1", correct: 0, wrong: 0},
        {title: "card 2", desc: "desc 2", correct: 0, wrong: 0},
        {title: "card 3", desc: "desc 3", correct: 0, wrong: 0},
      ]
    }
  },
  methods: {
    reviewDone() {
      this.cardlist.forEach(x => {console.log(x)});
    }
  },
  components: {
    CardView
  }
}
</script>

<style>
body{
  background-color: #444;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
  margin-top: 60px;
}
</style>
