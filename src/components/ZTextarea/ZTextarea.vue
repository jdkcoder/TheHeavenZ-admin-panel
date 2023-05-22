<template>
    <div class="z-textarea" :class="classes">
        <textarea v-model="modelValue" placeholder=" " :name="props.name" :id="props.id" :required="props.required" :tabindex="props.tabindex" :disabled="props.disabled" :readonly="props.readonly"></textarea>
        <label v-if='props.label && !props.placeholder'>{{ props.label }} <i>{{ props.disabled ? '(Disabled)' : '' }}</i></label>
        <label v-if='props.placeholder && !props.label'>{{ props.placeholder }} <i>{{ props.disabled ? '(Disabled)' : '' }}</i></label>
        <slot />
        <small>{{ props.hint }}</small>
    </div>
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
    floating?: boolean
    placeholder?: string | number
    disabled?: boolean
    readonly?: boolean
    hint?: string | number
    invalid?: boolean
    autocomplete?: boolean | string
    required?: boolean
    tabindex?: number | string
}>()
const classes = ref({
    'floating-label': props.floating,
    'normal': !props.floating,
    'invalid': props.invalid,
    'disabled': props.disabled
})
</script>

<style lang='sass?intendedSyntax'>
@import './z-textarea'
</style>