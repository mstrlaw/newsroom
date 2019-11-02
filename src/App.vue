<template>
  <a-scene
    shadow="type: pcfsoft"
    physics
  >
    <a-assets>
      <img src="/grid.png" id="grid" crossorigin="anonymous">
      <img id="groundTexture" src="/textures/metal_plate2.jpg">
      <img id="pilarTexture" src="/textures/metal_brushed.jpg">
      <img id="wallTexture" src="/textures/plaster.jpg">
      <img id="wallTexture2" src="/textures/concrete_wall2.jpg">
      <img id="ceilingTexture" src="/textures/tiles.jpg">
      <img id="metalFloor" src="/textures/metal_plate3.jpeg">
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

    <a-entity
      light="type: ambient; intensity: .1; distance: 5; decay: 2"
      position="0 12 0"
    />

    <a-sky color="#000"></a-sky>

    <!-- left-2 pillar -->
    <a-entity
      mixin="pilarMaterial"
      position="-10.6 7 -4.6"
      rotation="0 46 0"
      shadow="receive: true"
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
      shadow="receive: true"
      position="-6 7 -8"
      rotation="0 25 0"
    >
      <a-entity
        mixin="pilarMaterial"
        shadow="receive: true"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.3;"
        position="0 -6 .8"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        shadow="receive: true"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 -2.8 .7"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        shadow="receive: true"
        geometry="primitive: cylinder;
          radius: .12;
          height: 1.2;"
        position="0 0.15 .6"
        rotation="0 90 90"
      />
      <a-entity
        mixin="pilarMaterial"
        shadow="receive: true"
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
      shadow="receive: true"
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

    <!-- right wall -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 30; height: 40;"
      rotation="0 -90 0"
      position="15 20 0"
      material="src: #wallTexture;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 8 8;
      "
    />
    <!-- left wall -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 30; height: 40;"
      rotation="0 90 0"
      position="-15 20 0"
      material="src: #wallTexture;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 8 8;
      "
    />
    <!-- front wall -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 30; height: 40;"
      rotation="0 0 0"
      position="0 20 -15"
      material="src: #wallTexture;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 8 8;
      "
    />
    <!-- back walls -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 5; height: 40; depth: 0.2;"
      rotation="0 -180 0"
      position="-2.5 23.8 15"
      material="src: #pilarTexture;
        metalness:0.3;
        roughness: 0.8;
        repeat: 4 4;
      "
    />
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 30; height: 40; depth: 0.2;"
      rotation="0 -180 0"
      position="15 20 15"
      material="src: #wallTexture;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 8 8;
      "
    />
    <!-- back walls -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 30; height: 40; depth: 0.2;"
      rotation="0 -180 0"
      position="-20 20 15"
      material="src: #wallTexture;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 8 8;
      "
    />

    <!-- main floor -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: plane; width: 30; height: 30;"
      rotation="-90 0 0"
      material="src: #groundTexture;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 8 8;
      "
    />
    <!-- ceiling -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 30; height: 30;"
      position="0 40 0"
      rotation="90 180 0"
      material="src: #ceilingTexture;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 8 8;
      "
    />

    <!-- SERVER ROOM -->
    <!-- floor -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: plane; width: 10; height: 10;"
      rotation="-90 0 0"
      position="0 0 20"
      material="src: #metalFloor;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 20 20;
      "
    />
    <!-- ceiling -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: plane; width: 10; height: 10;"
      rotation="90 180 0"
      position="0 4 20"
      material="src: #ceilingTexture;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 2 2;
      "
    />
    <!-- lights -->
    <a-entity
      light="
        type: spot;
        intensity: 0.2;
        angle: 55"
      rotation="-90 90 0"
      position="-.3 3.5 20"
    />
    <a-entity
      light="
        type: spot;
        intensity: 0.2;
        angle: 55"
      rotation="-90 90 0"
      position="-.3 3.5 22"
    />
    <Lamp
      :rotation="'0 0 0'"
      :position="'0 3.5 20'"
    />
    <!-- front wall -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 5; height: 4; depth: 0.2;"
      rotation="0 -180 0"
      position="2.5 2 15.2"
      material="src: #wallTexture2;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 2 1;
      "
    />
    <!-- right wall -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 10; height: 4; depth: 0.2;"
      rotation="0 -90 0"
      position="5 2 20.2"
      material="src: #wallTexture2;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 3 1;
      "
    />
    <!-- back wall -->
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 10; height: 4; depth: 0.2;"
      rotation="0 0 0"
      position="0 2 25"
      material="src: #wallTexture2;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 3 1;
      "
    />
    <a-entity
      static-body
      shadow="receive: true"
      geometry="primitive: box; width: 10; height: 4; depth: 0.2;"
      rotation="0 90 0"
      position="-5.1 2 20"
      material="src: #wallTexture2;
        transparent: false;
        metalness:0.3;
        roughness: 0.8;
        repeat: 3 1;
      "
    />
    <!-- 1st row -->
    <Servers
      :position="'2.9 0 15.85'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'2.9 1 15.85'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'2.9 2 15.85'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'.5 0 15.85'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'.5 1 15.85'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'.5 2 15.85'"
      :rotation="'0 -90 0'"
    />

    <!-- 2nd row -->
    <Servers
      :position="'4.3 0 19.5'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'4.3 1 19.5'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'4.3 2 19.5'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'2.4 0 19.5'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'2.4 1 19.5'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'2.4 2 19.5'"
      :rotation="'0 90 0'"
    />
    <a-entity
      geometry="primitive: box; width: 0.001; depth: 0.001; height: 0.001"
      position="2.4 2 19.5"
      sound="
          src: url(/audio/server_hum.wav);
          autoplay: true;
          loop: true;
          refDistance: .4;
          rolloffFactor: 1;
          volume: .2;
        "
    />

    <!-- 3rd row -->
    <Servers
      :position="'2.9 0 20.5'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'2.9 1 20.5'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'2.9 2 20.5'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'.7 0 20.5'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'.7 1 20.5'"
      :rotation="'0 -90 0'"
    />
    <Servers
      :position="'.7 2 20.5'"
      :rotation="'0 -90 0'"
    />

    <!-- 4th row -->
    <Servers
      :position="'4.6 0 24.3'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'4.6 1 24.3'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'4.6 2 24.3'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'2.4 0 24.3'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'2.4 1 24.3'"
      :rotation="'0 90 0'"
    />
    <Servers
      :position="'2.4 2 24.3'"
      :rotation="'0 90 0'"
    />

    <!-- animation="property: rotation; to: -90 360 0; loop: true; dur: 360000; easing: linear" -->
    <!--a-entity
      geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0"
      material="src: #grid; repeat: 10000 10000; transparent: true; metalness:0.6;
      roughness: 0.4;"
    -->
  </a-scene>
</template>

<script>
import Servers from '@/components/Servers';
import Lamp from '@/components/Lamp';

export default {
  components: {
    Servers,
    Lamp,
  },
  mounted() {
    // this.initAudio();
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
