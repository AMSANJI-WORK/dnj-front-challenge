<template>
  <div class="flex flex-col">
    <TransitionGroup name="list" tag="DiscussionItem">
      <DiscussionItem
        v-for="(item, index) in data"
        :key="index"
        :data="item"
        :index-item="index"
      />
    </TransitionGroup>
  </div>
</template>

<script setup>
import DiscussionItem from "@/modules/discussion/components/item/Card.vue";
const props = defineProps({
  data: Array,
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease-in-out;
}
.list-enter-from {
  transform: translateX(30px);
}
</style>
