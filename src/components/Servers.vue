<template>
  <a-entity
    :position="position"
    :rotation="rotation"
    shadow="receive: true"
    obj-model="obj: url(/objects/server/server.obj);mtl: url(/objects/server/server.mtl)"
    scale="0.005 0.005 0.005"
  />
</template>

<script>
export default {
  name: 'Servers',
  props: {
    position: {
      type: String,
      required: false,
      default: '0 0 0',
    },
    rotation: {
      type: String,
      required: false,
      default: '0 0 0',
    },
  },
};
</script>
