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
import { useFileDialog } from '@vueuse/core'

const configTemplate = {
  sets: []
};

const setTemplate = {
  name: 'Unnamed set',
  cardlist: [],
  visibleVoice: "",
  invisibleVoice: "",
}

export default {
  name: 'App',
  created(){
    if(!localStorage.config)
      localStorage.config = JSON.stringify(configTemplate);

    this.appdata = JSON.parse(localStorage.config);
  },
  mounted() {
    window.speechSynthesis.cancel();
    setTimeout(() => {
      this.voices = window.speechSynthesis.getVoices();
    }, 1000)
  },
  data() {
    return {
      action: "menu",
      selectedSet: 0,
      appdata: JSON.parse(JSON.stringify(configTemplate)),
      voices: []
    }
  },
  methods: {
    downloadTextFile(name, content) {
      let element = document.createElement('a');
      element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(content));
      element.setAttribute('download', name);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);  
    },
    uploadTextFile(){
      return new Promise((resolve) => {
        const { open, onChange } = useFileDialog({
          accept: 'text/*',
          directory: false
        })

        onChange((files) => {
          if(files.length === 1) {
            const reader = new FileReader();
            reader.onload = (res) => {
              resolve(res.target.result);
            };
            reader.onerror = (err) => console.log(err);
            reader.readAsText(files[0]);
          }
        })

        open();
      });
    },
    isHidden(card) {
      const date = new Date(card.hideUntil);
      const now = new Date(Date.now());

      return now < date || card.learned;
    },
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
  background-color: rgb(68, 68, 68); 
  background-image: linear-gradient(30deg, rgb(78, 78, 78) 12%, transparent 12.5%, transparent 87%, rgb(78, 78, 78) 87.5%, rgb(78, 78, 78)), linear-gradient(150deg, rgb(78, 78, 78) 12%, transparent 12.5%, transparent 87%, rgb(78, 78, 78) 87.5%, rgb(78, 78, 78)), linear-gradient(30deg, rgb(78, 78, 78) 12%, transparent 12.5%, transparent 87%, rgb(78, 78, 78) 87.5%, rgb(78, 78, 78)), linear-gradient(150deg, rgb(78, 78, 78) 12%, transparent 12.5%, transparent 87%, rgb(78, 78, 78) 87.5%, rgb(78, 78, 78)), linear-gradient(60deg, rgba(78, 78, 78, 0.467) 25%, transparent 25.5%, transparent 75%, rgba(78, 78, 78, 0.467) 75%, rgba(78, 78, 78, 0.467)), linear-gradient(60deg, rgba(78, 78, 78, 0.467) 25%, transparent 25.5%, transparent 75%, rgba(78, 78, 78, 0.467) 75%, rgba(78, 78, 78, 0.467)); 
  background-size: 80px 140px; 
  background-position: 0px 0px, 0px 0px, 40px 70px, 40px 70px, 0px 0px, 40px 70px;
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
.wnd {
  background-color: #444;
  border: 2px solid black;
}
</style>
