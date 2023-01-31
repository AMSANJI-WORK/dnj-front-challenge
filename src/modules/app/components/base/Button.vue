<template>
  <button
    class="font-medium text-sm hover:ring hover:ring-2 transition-all duration-300 hover:shadow-sm"
  >
    <slot />
    <span v-if="!$slots.default" class="uppercase">button</span>
  </button>
</template>
<script setup></script>
<style scoped></style>
