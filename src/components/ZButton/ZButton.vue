<template>
    <button class="z-btn" @click.prevent="onClick($event)" :tabindex="props.tabindex" :class="classes">
        <LoadingIcon :class="{ active: isLoading }" class="loading-icon" v-if='!$slots._' />
        <span v-if='!$slots._'>{{ isLoading && props.loadingText ? props.loadingText : props.label }}</span>
        <slot />
    </button>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import LoadingIcon from './LoadingIcon.vue';
let isLoading = ref(false)
const props = defineProps({
    label: {
        type: String,
    },
    loadingText: {
        type: String,
    },
    loading: {
        type: Boolean,
    },
    loadingTime: {
        type: Number,
        default: 3
    },
    tabindex: {
        type: String || Number,
    },
    link: {
        type: Boolean,
        default: false
    },
    rounded: {
        type: Boolean,
        default: false
    },
    textOnly: {
        type: Boolean,
        default: false,
    },
    outline: {
        type: Boolean,
        default: false,
    },

})

const classes = ref({
    link: props.link,
    rounded: props.rounded,
    'text-only': props.textOnly,
    outline: props.outline
})
const emit = defineEmits<{
    (e: 'click', data: MouseEvent): void
}>()

function onClick(e: MouseEvent) {
    e.preventDefault()
    emit('click', e)
    const el = e.target as HTMLButtonElement
    if (props.loading) {
        el.setAttribute('disabled', 'true')
        isLoading.value = true
    }
    setTimeout(() => {
        if (props.loading) isLoading.value = false
        el.removeAttribute('disabled')
    }, props.loadingTime * 1000)
}
</script>

<style lang='sass?intendedSyntax'>
@import './z-btn'
</style>