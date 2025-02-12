<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  isSvg: {
    type: Boolean,
    required: false,
    default: false,
  },
  isSvgRaw: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const svgRawPath = ref("");

if (props.isSvgRaw) {
  const res = await import(`~/public/images/svg/${props.name}.svg?raw`);
  svgRawPath.value = res.default;
}

const pathOfImage = computed(() => {
  if (props.isSvg) return `/images/svg/${props.name}.svg`;
  else return `/images/png/${props.name}`;
});
</script>
<template>
  <div :alt="name" v-if="isSvgRaw" v-html="svgRawPath" />
  <img :src="pathOfImage" :alt="name" v-else />
</template>
