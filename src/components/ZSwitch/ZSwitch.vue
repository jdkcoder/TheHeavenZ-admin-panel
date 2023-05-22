<template>
    <div class="z-switch-wrapper">
        <span v-if="props.showOptions" :class="{ chosen: modelValue === option1 }">{{ option1 }}</span>
        <label class="z-switch" @click.prevent="onClick($event)" :tabindex="props.tabindex">
            <ZCheckbox v-model="modelValue" />
            <span></span>
        </label>
        <span v-if="props.showOptions" :class="{ chosen: modelValue === option2 }">{{ option2 }}</span>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
const { modelValue } = defineModels<{
    modelValue?: any
}>()
const props = defineProps<{
    options: any[]
    showOptions?: boolean
    tabindex?: number | string
}>()
let option1 = ref(props.options[0])
let option2 = ref(props.options[1])

function onClick(e: MouseEvent) {
    const el = e.target as HTMLLabelElement
    if (el.classList.contains('active')) {
        el.classList.remove('active')
        modelValue.value = option1.value
    } else {
        el.classList.add('active')
        modelValue.value = option2.value
    }
}
onMounted(() => {
    option1.value = props.options[0]
    option2.value = props.options[1]
    modelValue.value = option1.value
})


</script>

<style lang='sass?intendedSyntax'>
@import './z-switch'
</style>