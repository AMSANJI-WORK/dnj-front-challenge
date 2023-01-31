<template>
  <Discussions :data="discussionStore.list" />
</template>

<script setup>
import { useDiscussionStore } from "../store";
import Discussions from "@/modules/discussion/components/List.vue";
const props = defineProps({
  data: Array,
});
const discussionStore = useDiscussionStore();
</script>

<style lang="scss" scoped></style>
