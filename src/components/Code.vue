<script setup lang="ts">
const props = defineProps<{
  code: object | null;
}>();
</script>

<template>
  <pre>
    {{ props.code }}
  </pre>
</template>
