<template>
  <a-entity
    :position="position"
    :rotation="rotation"
    scale="0.002 0.002 0.002"
    obj-model="obj: url(/objects/lamp/lamp.obj);
      mtl: url(/objects/lamp/lamp.mtl)"
  />
</template>

<script>
export default {
  name: 'Lamp',
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
