<template>
  <div id="container">
    <button className="btn green-btn" id="create-btn" @click="() => {this.$parent.pushEmptySet()}">Create new set</button>
    <div className="set-container wnd" v-for="(set, index) in $parent.appdata.sets" v-bind:key="set.name">
      <div className="header-bar">
        <header>{{ set.name }}</header>
        <img @click="() => {editName(index)}" src="../assets/edit.svg" />
      </div>
      <p>Cards to review today: {{ set.cardlist.filter(x => !isHidden(x)).length || '0' }}</p>
      <p>Total cards: {{ set.cardlist.length || '0' }}</p>
      <div className="button-container">
        <button className="btn yellow-btn" @click="() => {editCards(index)}">Edit cards</button>
        <button className="btn red-btn" @click="() => {deleteSet(index)}">Delete</button>
        <button className="btn review-btn green-btn" @click="() => {reviewSet(index)}">Review</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SetList',
  mounted () {
  },
  data() {
    return {
      renaming: false
    }
  },
  methods: {
    isHidden(card) {
      return this.$parent.isHidden(card);
    },
    editCards(i) {
      this.$parent.selectedSet = i;
      this.$parent.action = 'edit';
    },
    editName(i) {
      const res = prompt("Change name", this.$parent.appdata.sets[i].name);
      if(res !== null)
      {
        this.$parent.appdata.sets[i].name = res;
        this.$parent.syncData();
      }
    },
    reviewSet(i) {
      this.$parent.selectedSet = i;
      this.$parent.action = 'review';
    },
    deleteSet(i) {
      if(window.confirm("Are you sure, that you want to delete '"+this.$parent.appdata.sets[i].name+"' set?"))
      {
        this.$parent.appdata.sets.splice(i, 1);
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
.header-bar img:hover {
  background-color: #666;
}
.header-bar img {
  width: 20px;
  height: 20px;
  display: inline-block;
}
.header-bar header {
  width: calc(100% - 20px);
  margin: 0px;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
}
.header-bar{
  padding: 10px;
}
.set-container {
  margin-top: 20px;
}
.set-container p {
  text-align: left;
  margin-left: 15px;
}
.button-container {
  padding: 5px;
  grid-template-columns: 140px 140px;
  grid-template-rows: 60px 60px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-template-areas: 
    ". ."
    "bottom bottom"; 
  display: grid;
}
.review-btn {
  grid-area: bottom;
}
#create-btn {
  height: 60px;
  width: 300px;
  font-size: 17px;
}
</style>
