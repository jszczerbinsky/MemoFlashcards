<template>
  <div id="logo">MemoFlashcards</div>
  <AddCards v-if="action === 'edit'" />
  <SetList v-if="action === 'menu'" />
  <CardView v-if="action === 'review'" />
</template>

<script>
import CardView from './components/CardView.vue'
import SetList from './components/SetList.vue'
import AddCards from './components/AddCards.vue'

const configTemplate = {
  sets: []
};

const setTemplate = {
  name: 'Unnamed set',
  cardlist: []
}

export default {
  name: 'App',
  created(){
    if(!localStorage.config)
      localStorage.config = JSON.stringify(configTemplate);

    this.appdata = JSON.parse(localStorage.config);
  },
  data() {
    return {
      action: "menu",
      selectedSet: 0,
      appdata: JSON.parse(JSON.stringify(configTemplate))
    }
  },
  methods: {
    pushEmptySet() {
      this.appdata.sets.push(JSON.parse(JSON.stringify(setTemplate)));
      this.syncData();
    },
    getSelectedSet() {
      return this.appdata.sets[this.selectedSet];
    },
    syncData() {
      localStorage.config = JSON.stringify(this.appdata);
    }
  },
  components: {
    CardView,
    SetList,
    AddCards
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Rubik+Doodle+Shadow&display=swap');
#logo {
  font-family: 'Rubik Doodle Shadow', sans-serif;
  font-size: 32px;
  margin-bottom: 30px;
}
* {
  font-family: 'Poppins', sans-serif;
}
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
.yellow-btn:active{
  background: #98a621;
}
.yellow-btn{
  background: #7c871b;
}
.green-btn {
 background: #29871b;
}
.green-btn:active {
 background: #33a322;
}
.red-btn:active {
  background: #a62121;
}
.red-btn {
  background: #941c1c;
}
.btn:active {
  border: 1px solid black;
}
.btn {
  border: 1px solid rgba(0,0,0,0);
  align-items:center;
  justify-content:center;
  font-size: 17px;
  border-radius: 2px;
}
</style>
