<template>
  <pre><code ref="codeEl" :class="`language-${language}`"><slot /></code></pre>
</template>

<script setup lang="ts">
import Prism from "prismjs";

defineProps<{ language: string }>();

const codeEl = ref<HTMLElement | null>(null);

onMounted(() => {
  if (codeEl.value) Prism.highlightElement(codeEl.value);
});
</script>
