<template>
  <div class="z-select">
    <div @click="onClick($event)">
      <ZInput v-model="modelValue" readonly />
    </div>
    <div class="z-options" :class="{ active: isActive }">
      <div class="input-field" ref="optionsEL">
        <input v-model.trim="keyword" type="text" class="input" placeholder="Search for an option..." />
        <Find class="find-icon" />
      </div>
      <div class="z-option" v-for="(option, index) in filteredOptions" :key="index" @click.prevent="select(option)">
        {{ option.label || option }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import Find from "./icon/find.svg?component";

const { modelValue } = defineModels<{
  modelValue?: any;
}>();

const props = defineProps<{
  options: any[];
}>();

//closing the dropdown by clicking outside of it
const optionsEL = ref<HTMLDivElement>(); //// Ref for the options element

// Event listener to handle the click outside the dropdown and close it
onMounted(() => {
  document.addEventListener("click", (e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const dimensions = optionsEL.value?.getBoundingClientRect();
    if (dimensions) {
      if (x < dimensions.left || x > dimensions.right || y < dimensions.top || y > dimensions.bottom) isActive.value = false;
    }
  });
});

let isActive = ref<boolean>(false);

// Function to handle the click event and toggle the dropdown
function onClick(e: MouseEvent) {
  e.stopPropagation();
  isActive.value = !isActive.value;
}
const emit = defineEmits<{
  (e: "select", value: any): void;
}>();

const keyword = ref("");
// Ref to hold the filtered options based on the search text
const filteredOptions = computed(() => props.options?.filter((option) => option.label?.toLowerCase()?.includes(keyword.value.toLowerCase())) || props.options || []);



// Function to select an option
function select(option: any) {
  modelValue.value = option.value ? option.value : option;
  emit("select", modelValue.value);
  isActive.value = false;
}
</script>

<style lang="sass">
@import './z-select'
</style>
