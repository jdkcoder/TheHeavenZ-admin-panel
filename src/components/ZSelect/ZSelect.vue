<template>
    <div class="z-select">
        <ZInput v-model="modelValue" @click="onClick($event)" readonly />
        <div class="z-options" :class="{ active: isActive }" ref="optionsEL">
            <div class="z-option" v-for="(option, index) in props.options" :key="index" @click.prevent="select(option)">
                {{ option.label || option }}
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
const { modelValue } = defineModels<{
    modelValue?: any
}>()
const props = defineProps<{
    options?: any[]
}>()
const optionsEL = ref<HTMLDivElement>()
let isActive = ref<boolean>(false)
function onClick(e: MouseEvent) {
    e.stopPropagation()
    isActive.value = true
}
const emit = defineEmits<{
    (e: 'select', value: any): void
}>()

function select(option: any) {
    modelValue.value = option.value ? option.value : option
    emit('select', modelValue.value)
    isActive.value = false
}

onMounted(() => {
    document.addEventListener("click", (e: MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
        const dimensions = optionsEL.value?.getBoundingClientRect()
        if (dimensions) {
            if (x < dimensions.left || x > dimensions.right || y < dimensions.top || y > dimensions.bottom) {
                optionsEL.value?.classList.remove('active')
            }
        }
    })
})
</script>

<style lang='sass?intendedSyntax'>
@import './z-select'
</style>