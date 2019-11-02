<template>
  <a-entity>
    <Card
      v-for="(cluster, index) in clusters"
      :key="index"
      :index="index"
      v-bind="cluster"
    />
  </a-entity>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card';
import { debounce } from '@/utilities';

export default {
  name: 'home',
  data: () => ({
    baseWidth: 5.2,
    textPosition: [-2.5, 0, 0],
    baseGeometryData: [
      ['primitive', 'box'],
      ['width', '5.2'],
      ['depth', '.05'],
    ],
    clusters: [
      {
        // title: '[0,1]',
        title: '',
        position: '0 7.0 -8',
        rotation: '0 0 0',
      },
      {
        // title: '[0,0]',
        title: '',
        position: '0 4.2 -8',
        rotation: '0 0 0',
      },
      {
        // title: '[0,-1]',
        title: '',
        position: '0 1.6 -8',
        rotation: '-10 0 0',
      },
      {
        // title: '[-1,0]',
        title: '',
        position: '-5.305 4.2 -6.842',
        rotation: '0 25 0',
      },
      {
        // title: '[1,0]',
        title: '',
        position: '5.253 4.2 -6.905',
        rotation: '0 -25 0',
      },
      {
        // title: '[-1,1]',
        title: '',
        position: '-5.305 7.0 -6.842',
        rotation: '0 25 0',
      },
      {
        // title: '[1,1]',
        title: '',
        position: '5.253 7.0 -6.905',
        rotation: '0 -25 0',
      },
      {
        // title: '[-1,-1]',
        title: '',
        position: '-5.305 1.6 -6.842',
        rotation: '-15 25 0',
      },
      {
        // title: '[1,-1]',
        title: '',
        position: '5.253 1.6 -6.905',
        rotation: '-15 -25 0',
      },
      {
        // title: '[0,2]',
        title: '',
        position: '0 9.5 -8',
        rotation: '0 0 0',
      },
      {
        // title: '[-1,2]',
        title: '',
        position: '-5.305 9.5 -6.842',
        rotation: '0 25 0',
      },
      {
        // title: '[1,2]',
        title: '',
        position: '5.253 9.5 -6.905',
        rotation: '0 -25 0',
      },
      {
        // title: '[0,3]',
        title: '',
        position: '0 12 -8',
        rotation: '10 0 0',
      },
      {
        // title: '[-1,3]',
        title: '',
        position: '-5.305 12 -6.842',
        rotation: '10 25 0',
      },
      {
        // title: '[1,3]',
        title: '',
        position: '5.253 12 -6.905',
        rotation: '10 -25 0',
      },
      {
        // title: '[-2,1]',
        title: '',
        position: '-9.517 7.0 -3.579',
        rotation: '0 50 0',
      },
      {
        // title: '[2,1]',
        title: '',
        position: '9.473 7.0 -3.662',
        rotation: '0 -50 0',
      },
      {
        // title: '[-2,0]',
        title: '',
        position: '-9.517 4.2 -3.579',
        rotation: '0 50 0',
      },
      {
        // title: '[2,0]',
        title: '',
        position: '9.473 4.2 -3.662',
        rotation: '0 -50 0',
      },
      {
        // title: '[-2,-1]',
        title: '',
        position: '-9.517 1.6 -3.579',
        rotation: '-20 50 0',
      },
      {
        // title: '[2,-1]',
        title: '',
        position: '9.473 1.6 -3.662',
        rotation: '-20 -50 0',
      },
      {
        // title: '[-2,2]',
        title: '',
        position: '-9.517 9.5 -3.579',
        rotation: '0 50 0',
      },
      {
        // title: '[2,2]',
        title: '',
        position: '9.473 9.5 -3.662',
        rotation: '0 -50 0',
      },
      {
        // title: '[-2,3]',
        title: '',
        position: '-9.517 12 -3.579',
        rotation: '10 50 -2',
      },
      {
        // title: '[2,3]',
        title: '',
        position: '9.473 12 -3.662',
        rotation: '10 -50 2',
      },
    ],
  }),
  components: {
    Card,
  },
  mounted() {
    this.debouncedPlayAudio = debounce(this.debouncedPlayAudio, 10);
    this.loadClusters();
  },
  methods: {
    loadClusters() {
      this.$store
        .dispatch('getClusters')
        .then((res) => {
          const clusters = res.data;
          let maxSize = this.clusters.length;
          if (clusters.length < maxSize) {
            maxSize = clusters.length;
          }
          for (let i = 0; i < maxSize; i += 1) {
            this.$store
              .dispatch('getArticle', clusters[i].articles[0])
              .then((article) => {
                const {
                  title,
                } = article.data[0];
                this.clusters[i].title = title.length > 100 ? `${title.substring(0, 95)}...` : title;
                this.debouncedPlayAudio();
              });
          }
          this.clusters.splice(maxSize);
        });
    },
    debouncedPlayAudio() {
      const audio = new Audio('/audio/message.wav');
      audio.play();
    },
  },
};
</script>
