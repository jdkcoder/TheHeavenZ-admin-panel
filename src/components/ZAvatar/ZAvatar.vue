<template>
    <div class="z-avatar">
        <img :src="props.src" :alt="props.username" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    src: string
    username?: string
}>()
</script>

<style lang='sass?intendedSyntax'>
@import './z-avatar'
</style>