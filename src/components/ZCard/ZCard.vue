<template>
    <div class="z-card" :class="classes">
        <slot />
    </div>
</template>

<script setup lang='ts'>
import {ref} from 'vue'
const props = defineProps<{border: boolean}>()
const classes = ref({
    'border': props.border
})
</script>
<style lang='sass?intendedSyntax'>
@import './z-card'
</style>