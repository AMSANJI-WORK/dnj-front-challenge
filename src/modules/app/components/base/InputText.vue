<template>
  <input
    class="peer h-10 w-full rounded-md px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-400"
    v-model="props.modelValue"
    @input="updateModelValue"
  />
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: "",
});
function updateModelValue(e) {
  emit("update:modelValue", e.target.value);
}
</script>
