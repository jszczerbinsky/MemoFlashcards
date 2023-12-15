<template>
  <div id="container">
    <div id="overflow-container">
      <div id="card" ref="card" @click="cardClick()" @mousedown="cardMouseDown" @touchstart="cardTouchDown">
        <header v-show="shown === true" className="card-text" ref="cardtitle"></header>
        <div v-show="shown === true" id="img-container"></div>
        <div v-show="shown === false" id="reverse">?</div>
        <p className="card-text" ref="carddesc"> </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardView',
  props: ['cardlist'],
  mounted () {
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
    nextCard() {
      this.currentCard++;

      if(this.currentCard === this.$props.cardlist.length)
        this.$parent.reviewDone();
      else
      {
        this.$refs.cardtitle.textContent = this.$props.cardlist[this.currentCard].title;
        this.$refs.carddesc.textContent = this.$props.cardlist[this.currentCard].desc;
        this.shown = false;
      }
    },
    cardClick() {
      if(!this.dragging)
      {
      if(!this.shown) this.shown = true;
      console.log("click")
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
      this.$refs.card.style.opacity = 1/(Math.abs(distance)/30);

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
          this.$props.cardlist[this.currentCard].wrong++;
        else
          this.$props.cardlist[this.currentCard].correct++;

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
#container {
  width: 100%;
  height: 400px;
}
#overflow-container{
  position: absolute;
  width: 100%;
  height: 400px;
  overflow: hidden;
  left: 0px;
}
#card {
  position: absolute;
  width: 300px;
  height: 350px;
  border: 2px solid black;
  border-radius: 10px 2px 10px 2px;
  left: calc(50% - 150px);
  overflow: hidden;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #666;
  font-size: 22px;
}
#card .card-text{
  padding: 5px;
  height: 100px;
  line-height: 50px;
  margin: 0px;
}
#card #img-container {
  height: calc(100% - 220px);
}
#card #reverse {
  height: 240px;
  line-height: 240px;
  font-size: 120px;
}
#card p {
}
</style>
