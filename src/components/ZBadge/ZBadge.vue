<template>
    <div class="z-badge" :mode="props.mode" :class="classes">
        {{ props.data }}
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const props = defineProps<{
    data?: any
    mode?: string
    capitalize?: boolean
    noWrap?: boolean
}>()
const classes = ref({
    capitalize: props.capitalize,
    nowrap: props.noWrap
})
</script>

<style lang='sass?intendedSyntax'>
@import './z-badge'
</style>