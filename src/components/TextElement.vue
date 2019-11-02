<template>
  <a-entity
    :position="position"
    :rotation="rotation"
  >
    <a-entity
      :geometry="screenGeometry"
      material="color: #121010"
      position="0 0 -.04"
    />
    <a-text
      :position="textPositioning"
      :value="msg"
      :wrap-count="wrapCount"
      color="white"
      baseline="top"
    />
  </a-entity>
</template>

<script>
import 'aframe';

export default {
  name: 'TextElement',
  props: {
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
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
  data: () => ({
    msg: '',
    wrapCount: 25,
    height: 0.5,
    textTopPosition: 0.13,
    textPosition: [-2.5, 0, 0],
    geometryData: [
      ['primitive', 'box'],
      ['width', '5.2'],
      ['depth', '.05'],
    ],
  }),
  computed: {
    screenGeometry() {
      const result = this.geometryData.map(item => `${item[0]}:${item[1]}`);

      // console.log(result.join(';'));

      return result.join(';');
    },
    textPositioning() {
      console.log(this.textPosition.join(' '));
      return this.textPosition.join(' ');
    },
  },
  mounted() {
    // 40 chars ~= width: 1
    if (this.text.length > 0) {
      const lines = Math.round(this.text.length / this.wrapCount);

      console.log(this.text.length);
      console.log(lines);

      const height = this.height * (lines ** 1.2);
      console.log(this.textTopPosition * (lines ** 1.2));


      this.textPosition = [
        this.textPosition[0],
        this.textTopPosition * (lines ** 1.2),
        this.textPosition[2],
      ];

      console.log(this.textPosition);

      this.geometryData.push(['height', height]);

      for (let i = 0; i < this.text.length; i += 1) {
        setTimeout(() => {
          this.msg = this.text.substring(0, i + 1);
        }, 50 * i);
      }
    }
  },
};
</script>
