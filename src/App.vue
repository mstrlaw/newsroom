<template>
  <a-scene>
    <a-assets>
      <img src="/grid.png" id="grid" crossorigin="anonymous">
    </a-assets>
    <a-entity camera look-controls wasd-controls position="0 4 0"></a-entity>
    <a-sky color="#000000"></a-sky>
    <router-view/>
    <a-entity
      animation="property: rotation; to: -90 360 0; loop: true; dur: 360000; easing: linear"
      geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0"
      material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6;
      roughness: 0.4;"></a-entity>
  </a-scene>
</template>

<script>
export default {
  mounted() {
    this.initAudio();
  },
  methods: {
    initAudio() {
      document.querySelector('body').click();
      setTimeout(() => {
        const audio = new Audio('/audio/formless_by_igneous_flame.mp3');
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise.then(() => {
            audio.addEventListener('ended', () => {
              audio.currentTime = 0;
              audio.play();
            }, false);
          }).catch(() => {
            audio.play();
          });
        }
      }, 2500);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
