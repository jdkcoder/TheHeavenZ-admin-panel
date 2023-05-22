<template>
    <label class="z-checkbox" :class="classes" :for="props.id" @click.prevent="onClick($event)">
        <input type="checkbox" :value="props.value" :name="props.name" :id="props.id" :required="props.required" :checked="props.checked" :disabled="props.disabled" :tabindex="props.tabindex" />
        <div class="z-square"></div>
        <span class="label">{{ props.label }} </span>
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
    boolean?: boolean
}>()

const classes = ref({
    'invalid': props.invalid,
    'disabled': props.disabled
})

function onClick(e: MouseEvent) {
    const wrapper = e.target as HTMLLabelElement
    const checkbox = wrapper.querySelector('input[type="checkbox"]') as HTMLInputElement
    if (checkbox) {
        checkbox.checked = !checkbox.checked
        if (!props.boolean) {
            if (checkbox.checked) modelValue.value.push(props.value)
            if (!checkbox.checked) modelValue.value = modelValue.value.filter((v: any) => v !== props.value)
        } else {
            modelValue.value = checkbox.checked
        }
    }
}
</script>

<style lang='sass?intendedSyntax'>
@import './z-checkbox'
</style>