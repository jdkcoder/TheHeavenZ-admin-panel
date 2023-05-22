<template>
    <div class="z-input" :class="classes">
        <input :type="props.type" v-model="modelValue" :name="props.name" :id="props.id" :required="props.required" :disabled="props.disabled" :readonly="props.readonly" :autocomplete="props.autocomplete ? props.autocomplete.toString() : undefined" placeholder=" " :tabindex="props.tabindex" />
        <label v-if='props.label && !props.placeholder'>{{ props.label }} <i>{{ props.disabled ? '(Disabled)' : '' }}</i></label>
        <label v-if='props.placeholder && !props.label'>{{ props.placeholder }} <i>{{ props.disabled ? '(Disabled)' : '' }}</i></label>
        <SearchIcon class="search-icon" v-if='props.type === "search"' />
        <slot />
        <small>{{ props.hint }}</small>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import SearchIcon from './icons/search.svg?component'
const { modelValue } = defineModels<{
    modelValue?: any
}>()
const props = defineProps<{
    name?: string,
    id?: string,
    label?: string | number
    floating?: boolean
    placeholder?: string | number
    type?: string
    disabled?: boolean
    readonly?: boolean
    hint?: string | number
    invalid?: boolean
    autocomplete?: boolean | string
    capitalize?: boolean
    required?: boolean
    tabindex?: number | string
}>()
const classes = ref({
    'floating-label': props.floating,
    'normal': !props.floating,
    'invalid': props.invalid,
    'capitalize': props.capitalize,
    'disabled': props.disabled
})
</script>

<style lang='sass?intendedSyntax'>
@import './z-input'
</style>