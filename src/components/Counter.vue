<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Props {
  message?: string;
}
const { message } = withDefaults(defineProps<Props>(), {
  message: "Default message",
});

const count = ref(0);

onMounted(() => {
  console.log("load : " + message);
});
</script>

<template>
  <div>
    <span>Counter ({{ message }}) : </span>
    <button @click="count--">-</button>
    <input v-model="count" type="number" />
    <button @click="count++">+</button>
  </div>
</template>
