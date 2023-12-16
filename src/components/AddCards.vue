<template>
  <div id="container">
    <input v-model="visible" type="textbox" placeholder="Visible side" />
    <input v-model="invisible" type="textbox" placeholder="Invisible side" />
    <div class="main-button-container">
      <button id="exit-btn" class="btn red-btn" @click="() => {$parent.action='menu'}">Exit</button>
      <button id="add-btn" class="btn green-btn" @click="() => {pushNewCard()}">Add</button>
    </div>
    <div id="cardlist">
      <div v-for="(card, index) in $parent.getSelectedSet().cardlist" v-bind:key="card.name" class="card wnd" @click="() => selectedIndex = index">
        <header class="bold">{{ card.invisible }}</header>
        <header :class="{nodisplay: (selectedIndex != index)}">{{ card.visible }}</header>
        <div :class="{nodisplay: (selectedIndex != index)}" class="button-container">
          <button className="btn yellow-btn" @click="() => {editVisible(index)}">Edit visible</button>
          <button className="btn yellow-btn" @click="() => {editInvisible(index)}">Edit invisible</button>
          <button className="btn red-btn delete-btn" @click="() => {deleteCard(index)}">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const cardTemplate = {
  correct: 0,
  wrong: 0,
  hideUntil: new Date(0),
  learned: false
}

export default {
  name: 'AddCards',
  mounted () {
  },
  data() {
    return {
      invisible: "",
      visible: "",
      selectedIndex: 0
    }
  },
  methods: {
    editVisible(i) {
      const res = prompt("Change name", this.$parent.getSelectedSet().cardlist[i].visible);
      if(res !== null)
      {
        this.$parent.getSelectedSet().cardlist[i].visible = res;
        this.$parent.syncData();
      }
    },
    editInvisible(i) {
      const res = prompt("Change name", this.$parent.getSelectedSet().cardlist[i].invisible);
      if(res !== null)
      {
        this.$parent.getSelectedSet().cardlist[i].invisible = res;
        this.$parent.syncData();
      }
    },
    deleteCard(i) {
      if(window.confirm("Are you sure, that you want to delete this card?"))
      {
        this.$parent.getSelectedSet().cardlist.splice(i,1);
        this.$parent.syncData();
      }
    },
    pushNewCard() {
      let card = JSON.parse(JSON.stringify(cardTemplate));
      card.invisible = this.invisible;
      card.visible = this.visible;
      if(this.invisible && this.visible)
      {
        this.$parent.getSelectedSet().cardlist.push(card);
        this.$parent.syncData();
      }
    }
  }
}
</script>

<style scoped>
#container{
  width: 300px;
  margin-left: calc(50% - 150px);
}
input {
  width: 292px;
}
input {
  margin-bottom: 20px;
  height: 40px;
}
.card {
  margin-bottom: 10px;
}
.button-container {
  padding: 5px;
  grid-template-columns: 140px 140px;
  grid-template-rows: 60px 60px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  display: grid;
  grid-template-areas: 
    ". ."
    "bottom bottom"; 
}
.delete-btn {
  grid-area: bottom;
}
.main-button-container {
  margin-bottom: 20px;
  grid-template-columns: 145px 145px;
  grid-template-rows: 60px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  display: grid;
}
.nodisplay {
  display: none;
}
.bold {
  font-weight: bold;
}
</style>
