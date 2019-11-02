<template>
  <a-entity
    v-if="title.length > 0"
    :position="position"
    :rotation="rotation"
    shadow="receive: true"
  >
    <a-entity
      geometry="primitive: box; width: 5.25; depth: .1; height: 2.33"
      material="color: #0E0E0E; metalness:0.5; roughness: 0.8;"
      position="0 0 -.055"
      shadow="receive: true"
      sound="
          src: url(/audio/tv_emf_static.mp3);
          autoplay: true;
          loop: true;
          refDistance: .5;
          rolloffFactor: .5;
        "
    />
    <a-entity
      :geometry="screenGeometry"
      material="color: #0E0E0E"
      position="0 0 -.04"
    />
    <a-text
      :position="textPositioning"
      :value="title"
      :wrap-count="wrapCount"
      color="#1B03A3"
      baseline="top"
    />
    <a-entity
      light="
        type: spot;
        angle: 100;
        distance: 10;
        color: #87CEEB;
        penumbra: 2;
      "
      position="0 0 0.4"
      :rotation="lightRotation"
    />
  </a-entity>
</template>

<script>
import 'aframe';

export default {
  name: 'Screen',
  props: {
    index: {
      type: Number,
      required: true,
      default: 0,
    },
    title: {
      type: String,
      required: true,
      default: '',
    },
    position: {
      type: String,
      required: true,
      default: '0 1.6 -3',
    },
    rotation: {
      type: String,
      required: true,
      default: '0 0 0',
    },
  },
  data: () => ({
    msg: '',
    wrapCount: 25,
    baseHeight: 0.44,
    textTopPosition: 0.13,
    textPosition: [-2.5, 0.13, 0],
    geometryData: [
      ['primitive', 'box'],
      ['width', '5.2'],
      ['depth', '.001'],
    ],
  }),
  computed: {
    screenGeometry() {
      const cardHeight = this.calculateCardHeight(this.title);

      const processedGeometricData = [
        ...this.geometryData,
        ['height', cardHeight],
      ];

      const result = processedGeometricData.map(item => `${item[0]}:${item[1]}`);

      return result.join(';');
    },
    textPositioning() {
      return this.textPosition.join(' ');
    },
    lightRotation() {
      const rotation = [
        this.rotation[0],
        180,
        0,
      ];
      return rotation.join(' ');
    },
  },
  mounted() {
    if (this.title.length > 0) {
      const lines = Math.round(this.title.length / this.wrapCount);
      this.textPosition = [
        this.textPosition[0],
        this.textTopPosition * (lines ** 2),
        this.textPosition[2],
      ];
    }
  },
  methods: {
    // typeText() {
    //   for (let i = 0; i < this.text.length; i += 1) {
    //     setTimeout(() => {
    //       this.msg = this.text.substring(0, i + 1);
    //     }, 50 * i);
    //   }
    // },
    calculateCardHeight(text) {
      const lines = Math.round(text.length / this.wrapCount);

      const cardHeight = this.baseHeight * (lines ** 1.2);

      this.textPosition = [
        this.textPosition[0],
        this.textTopPosition * (lines ** 1.2),
        this.textPosition[2],
      ];

      return cardHeight;
    },
  },
};
// :text="'Google to buy Fitbit for $2.1bn in a bid to take on Apple'"
// :text="'01234567890123456789012345678901234567890'"
</script>
