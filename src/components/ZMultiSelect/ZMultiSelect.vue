<template>
  <div class="z-multiselect">
    <div class="selected-items-wrapper" @click="toggleMultiSelectDropdown($event)">
      <div class="selected-items"> <!-- check the number of selected items --> <!-- less than or equal to maxSelectedDisplay, display individual selected items -->
        <div class="no-selected-items" v-if="modelValue?.length === 0">Select options... </div>
        <div v-if="modelValue?.length <= Number(maxSelectedDisplay)" class="selected-item" v-for="(item, index) in modelValue" :key="index">
          <span>{{ item }}</span> <!-- <span @click="removeItem(index)">x</span> -->
        </div> <!-- number of selected items exceeds maxSelectedDisplay, show the text "{{ modelValue.length }} items selected" -->
        <div v-if="modelValue?.length > Number(maxSelectedDisplay)" class="selected-item">
          <span>{{ modelValue?.length }} items selected</span>
        </div>
      </div>

      <div class="down-arrow">›</div>
    </div>
    <div class="options-wrapper" v-show="isActive" ref="optionsWrapperEL">
      <div class="select-all">
        <ZCheckbox v-model="isCheckedAll" label="Select all" boolean :checked="isCheckedAll" @click="handleCheckAll" />
        <div class="close-dropdown">
          <Close @click="isActive = false" />
        </div>
      </div>
      <ZDivider />
      <div class="search-input">
        <ZInput v-model.trim="keyword" label="Search options" />
        <Find class="find-icon" />
      </div>
      <div class="filtered-options">
        <ZCheckbox v-model="modelValue" v-for="(option, index) in filteredOptions" @click="onHandleSeclection(option, index, $event)" :label="option.label" :value="option.value" :checked="option.checked" class="option" :key="index" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import Close from "./icons/close.svg";
import Find from "./icons/find.svg?component";

const { modelValue } = defineModels<{ modelValue: any[] }>()

const props = defineProps<{
  // value?: any
  options?: any[]
  optionLabel?: string
  maxSelectedDisplay?: number | string
}>();
const { maxSelectedDisplay = 4 } = props //declare the default value for maxSelectedDisplay

const emit = defineEmits<{ //declare emits for event in component: @select
  'select': [data: any, index: number, e: MouseEvent]
}>()

const keyword = ref<string>('');
const isActive = ref<boolean>(false);
const isCheckedAll = ref<boolean>(false)
const optionsWrapperEL = ref<HTMLDivElement>(); //// Ref for the options element
const filteredOptions = computed(() => props.options?.filter((option) => option.label.toLowerCase().includes(keyword.value.toLowerCase())) || props.options || []);


// Function to handle the click event and toggle the dropdown
function toggleMultiSelectDropdown(e: MouseEvent) {
  e.stopPropagation();
  isActive.value = !isActive.value;
}

function onHandleSeclection(option: any, index: number, e: MouseEvent) {
  option.checked = !option.checked
  if (!option.checked) {
    modelValue.value = modelValue.value.filter(value => value !== option.value)
    isCheckedAll.value = false
  }
  if (modelValue.value.length === props.options?.length) isCheckedAll.value = true

  console.warn = () => { };
  emit('select', option, index, e)
}

function handleCheckAll() {
  isCheckedAll.value = !isCheckedAll.value

  if (isCheckedAll.value) {
    filteredOptions.value.forEach((option) => {
      option.checked = true
      if (!modelValue.value.includes(option.value)) modelValue.value.push(option.value)
    })
  }
  else {
    modelValue.value = []
    filteredOptions.value.forEach((option) => option.checked = false)
  }
}

watch(filteredOptions, (currentVal) => currentVal.every((option) => option.checked) ? isCheckedAll.value = true : isCheckedAll.value = false)

onMounted(() => {
  document.addEventListener("click", (e: MouseEvent) => {  // Event listener to handle the click outside the dropdown and close it
    const x = e.clientX;
    const y = e.clientY;
    const dimensions = optionsWrapperEL.value?.getBoundingClientRect();
    if (dimensions && (x < dimensions.left || x > dimensions.right || y < dimensions.top || y > dimensions.bottom)) isActive.value = false;
  });
});

</script>

<style scoped lang="sass">
@import "./z-multiSelect"
</style>
