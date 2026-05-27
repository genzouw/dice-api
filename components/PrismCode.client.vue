<template>
  <pre><code :class="`language-${language}`"><slot /></code></pre>
</template>

<script setup lang="ts">
import Prism from 'prismjs';

defineProps<{ language: string }>();

onMounted(() => {
  Prism.highlightAll();
});
</script>
