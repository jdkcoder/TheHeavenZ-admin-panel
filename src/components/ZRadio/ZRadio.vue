<template>
    <label class="z-radio" :class="classes" :for="props.id" @click.prevent="onClick($event)">
        <input type="radio" :value="props.value" :name="props.name" :id="props.id" v-model="modelValue" :checked="props.checked" :disabled="props.disabled" :required="props.required" :tabindex="props.tabindex" />
        <div class="z-circle"></div>
        <span class="label">{{ props.label }}</span>
    </label>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const { modelValue } = defineModels<{
    modelValue?: any
}>()
const props = defineProps<{
    name?: string,
    id?: string,
    label?: string | number
    checked?: boolean
    disabled?: boolean
    invalid?: boolean
    required?: boolean
    value?: any
    tabindex?: number | string
}>()

const classes = ref({
    invalid: props.invalid,
    disabled: props.disabled
})

function onClick(e: MouseEvent) {
    const radioWrapper = e.target as HTMLLabelElement
    const radio = radioWrapper.querySelector('input[type="radio"]') as HTMLInputElement
    if (radio) radio.checked = true
    modelValue.value = props.value
}
</script>

<style lang='sass?intendedSyntax'>
@import './z-radio'
</style>