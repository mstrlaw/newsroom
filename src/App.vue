<template>
  <a-scene
    shadow="type: pcfsoft"
  >
    <a-assets>
      <img src="/grid.png" id="grid" crossorigin="anonymous">
      <img id="pilarTexture" src="/textures/metal_brushed.jpg">
      <!-- mixins -->
      <a-mixin
        id="pilarMaterial"
        material="src: #pilarTexture;
          transparent: false;
          metalness:0.7;
          roughness: 0.8;
          repeat: 4 40;"
        geometry="primitive: cylinder;
          radius: .22;
          height: 14;"
      />
    </a-assets>

    <a-entity
      camera
      look-controls
      wasd-controls="acceleration: 200"
      position="0 1.6 0"
    />

    <a-sky color="#080327"></a-sky>

    <!-- left-2 pillar -->
    <a-entity
      mixin="pilarMaterial"
      position="-10.6 7 -4.6"
      rotation="0 46 0"
    >
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.5;"
        position="0 -6 .9"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 -2.8 .78"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.5;"
        position="0 0.15 .7"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.1;"
        position="0 2.5 .77"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.3;"
        position="0 5 .7"
        rotation="0 90 90"
      />
    </a-entity>

    <!-- Left-1 Pilar -->
    <a-entity
      mixin="pilarMaterial"
      position="-6 7 -8"
      rotation="0 25 0"
    >
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.3;"
        position="0 -6 .8"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 -2.8 .7"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 0.15 .6"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.1;"
        position="0 2.5 .75"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 5 .7"
        rotation="0 90 90"
      />
    </a-entity>

    <!-- Central Pilar -->
    <a-entity
      mixin="pilarMaterial"
      position="0 7 -9"
    >
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1;"
        position="0 -6 .5"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1;"
        position="0 -2.8 .4"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1;"
        position="0 0.15 .4"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1;"
        position="0 2.5 .4"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1;"
        position="0 5 .45"
        rotation="0 90 90"
      />
    </a-entity>

    <!-- right-1 pillar -->
    <a-entity
      mixin="pilarMaterial"
      position="6 7 -8"
      rotation="0 -25 0"
    >
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.3;"
        position="0 -6 .75"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.3;"
        position="0 -2.8 .65d"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 0.15 .7"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 2.5 .7"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.1;"
        position="0 5 .7"
        rotation="0 90 90"
      />
    </a-entity>

    <!-- right-2 pillar -->
    <a-entity
      mixin="pilarMaterial"
      position="10.6 7 -4.6"
      rotation="0 -55 0"
    >
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.5;"
        position="0 -6 .85"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.3;"
        position="0 -2.8 .75"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 0.15 .78"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 2.5 .78"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 5 .75"
        rotation="0 90 90"
      />
    </a-entity>

    <router-view/>

    <!-- credits -->

    <a-entity
      animation="
        property: position;
        from: -15.2 1.6 11.3;
        to: -15.2 1.7 11.3;
        dir: alternate;
        loop: true;
        dur: 6000;
        easing: linear;
      "
      geometry="primitive: box; width: 3; height: 2; depth: .2"
      material="color: #000; metalness: 1;"
      rotation="0 100 0"
      position="-15.2 1.6 11.3"
    >
      <a-text
        position="-1.4 .8 .1"
        value="The Newsroom"
        wrap-count="25"
        color="#FFF"
        baseline="top"
      />
      <a-text
        position="-1.3 .4 .1"
        value="By @mstrlaw"
        wrap-count="50"
        color="#FFF"
        baseline="top"
      />
      <a-text
        position="-1.4 -0.1 .1"
        text="value: A VR room that displays the 1st headline from the top 25 world news clusters as retrieved from https://thoro.news; width: 3"
        wrap-count="30"
        color="#FFF"
        baseline="top"
      />
      <a-text
        position=".8 .1 -.1"
        rotation="0 180 0"
        value="Nothing on this side"
        wrap-count="50"
        color="#FFF"
        baseline="top"
      />
    </a-entity>

    <!-- main floor -->
    <!-- animation="property: rotation; to: -90 360 0; loop: true; dur: 360000; easing: linear" -->
    <a-entity
      geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0"
      material="src: #grid; repeat: 10000 10000; transparent: true; metalness:0.6;
      roughness: 0.4;"
    />
  </a-scene>
</template>

<script>
// import Servers from '@/components/Servers';
// import Lamp from '@/components/Lamp';

export default {
  // components: {
  //   Servers,
  //   Lamp,
  // },
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
