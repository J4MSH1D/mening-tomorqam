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
  });

  const pathOfImage = computed(() =>
    props.isSvg ? `/images/svg/${props.name}.svg` : `/images/png/${props.name}`
  );
</script>
<template>
  <img :src="pathOfImage" :alt="name" />
</template>
