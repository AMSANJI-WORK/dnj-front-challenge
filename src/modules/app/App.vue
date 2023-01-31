<script setup>
import { RouterView } from "vue-router";
import AppHeader from "../app/components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <div class="max-w-[49rem] mx-auto bg-white">
    <RouterView />
  </div>
</template>
