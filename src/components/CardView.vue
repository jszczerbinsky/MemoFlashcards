<template>
  <div>
    <div id="container">
      <div id="overflow-container">
        <div id="card-back" className="card"></div>
        <div id="card-front" className="card" ref="card" @click="cardClick()" @mousedown="cardMouseDown" @touchstart="cardTouchDown">
          <header v-show="shown === true" className="card-text" ref="cardtitle"></header>
          <div v-show="shown === true" id="img-container"></div>
          <div v-show="shown === false" id="reverse">?</div>
          <p className="card-text" ref="carddesc"> </p>
        </div>
      </div>
    </div>
    <div id="button-container">
      <button className="yellow-btn" @click="() => {hideFor(1)}">Hide for 1 day</button>
      <button className="yellow-btn" @click="() => {hideFor(3)}">Hide for 3 days</button>
      <button className="green-btn" @click="() => {getCurrentCard().learned = true; nextCard()}">Mark as learned</button>
      <button className="red-btn" @click="() => {$parent.action='menu'}">Exit</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardView',
  mounted () {
    this.shuffleCards();
    this.nextCard();
  },
  data() {
    return {
      shown: false,
      answer: null,
      currentCard: -1,
      dragging: false,
      baseXPos: 0
    }
  },
  methods: {
    hideFor(days){
      let now = new Date(Date.now());
      now.setDate(now.getDate()+days);
      this.getCurrentCard().hideUntil = now.toISOString();
      this.nextCard();
    },
    shuffleCards(){
      this.$parent.getSelectedSet().cardlist.sort(() => Math.random() - 0.5);
    },
    getCurrentCard() {
      return this.$parent.getSelectedSet().cardlist[this.currentCard];
    },
    isHidden(card) {
      const date = new Date(card.hideUntil);
      const now = new Date(Date.now());

      return now < date || card.learned;
    },
    nextCard() {
      this.$parent.syncData();
      
      if(this.$parent.getSelectedSet().cardlist.find(x => !this.isHidden(x)) === undefined)
        return this.$parent.action='menu';
      
      do{
        this.currentCard++;

        if(this.currentCard === this.$parent.getSelectedSet().cardlist.length)
        {
          this.currentCard = 0;
          this.shuffleCards();
        }
      } while(this.isHidden(this.getCurrentCard()));
      
      this.$refs.cardtitle.textContent = this.getCurrentCard().title;
      this.$refs.carddesc.textContent = this.getCurrentCard().desc;
      this.shown = false;
    },
    cardClick() {
      if(!this.dragging)
      {
        if(!this.shown) this.shown = true;
      }
    },
    getScreenCenter(){
      return window.innerWidth/2;
    },
    handleMovement(xMov) {
      let offset = this.baseXPos-this.getScreenCenter();
      let x = xMov-150-offset;
      this.$refs.card.style.left = x+"px";

      let distance = (this.getScreenCenter()-150-x);
      if(Math.abs(distance) < 1) distance = 1;
      this.$refs.card.style.opacity = 1/(Math.abs(distance)/50);

      if(Math.abs(distance) > this.getScreenCenter()/2) {
        if(distance > 0) this.answer = "left";
        else this.answer = "right";
      } else {
        this.answer = null
      }
    },
    mouseMove(event) {
      this.handleMovement(event.clientX);
      this.dragging = true;
    },
    touchMove(event) {
      var evt = (typeof event.originalEvent === 'undefined') ? event : event.originalEvent;
      let touch = evt.touches[0] || evt.changedTouches[0];
      this.handleMovement(touch.pageX);
    },
    handleDown() {
      this.$refs.card.classList.remove('fadein');

      this.$el.addEventListener('mousemove', this.mouseMove);
      this.$el.addEventListener('touchmove', this.touchMove);
      this.$el.addEventListener('mouseup', this.cardMouseUp);
      this.$el.addEventListener('touchend', this.cardMouseUp);
    },
    cardMouseDown(event) {
      this.baseXPos = event.clientX;
      this.handleDown();
    },
    cardTouchDown(event) {
      var evt = (typeof event.originalEvent === 'undefined') ? event : event.originalEvent;
      let touch = evt.touches[0] || evt.changedTouches[0];
      this.baseXPos = touch.pageX;
      this.handleDown();
    },
    cardMouseUp() {
      this.$el.removeEventListener('mousemove', this.mouseMove);
      this.$el.removeEventListener('touchmove', this.touchMove);
      this.$el.removeEventListener('mouseup', this.cardMouseUp);
      
      if(this.answer !== null)
      {
        if(this.answer === "left")
          this.getCurrentCard().wrong++;
        else
          this.getCurrentCard().correct++;

        this.$refs.card.classList.add('fadein');
        this.nextCard();
      }     
      this.baseXPos = this.getScreenCenter();
      this.handleMovement(this.getScreenCenter());

      setTimeout(() => this.dragging = false)
    },
  }
}
</script>

<style scoped>
*{
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#container {
  width: 100%;
  height: 350px;
}
#overflow-container{
  position: absolute;
  width: 100%;
  height: 400px;
  overflow: hidden;
  left: 0px;
}
.card {
  position: absolute;
  width: 300px;
  height: 350px;
  border: 2px solid black;
  border-radius: 10px 2px 10px 2px;
  left: calc(50% - 150px);
  overflow: hidden;
  background-color: #666;
  font-size: 22px;
}
#card-front .card-text{
  padding: 5px;
  height: 100px;
  line-height: 50px;
  margin: 0px;
}
#card-front #img-container {
  height: calc(100% - 220px);
}
#card-front #reverse {
  height: 240px;
  line-height: 240px;
  font-size: 120px;
}
#card-back {
  background: #444;
}
.fadein {
  animation: 1s card-fadein;
}
@keyframes card-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
#button-container {
  width: 300px;
  height: 120px;
  grid-template-columns: 150px 150px;
  grid-template-rows: 60px 60px;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  display: grid;
  margin-top: 20px;
  margin-left: calc(50% - 150px);
}
button:active {
  border: 1px solid black;
}
button {
  border: 1px solid rgba(0,0,0,0);
  align-items:center;
  justify-content:center;
  font-size: 17px;
  border-radius: 2px;
}
</style>
