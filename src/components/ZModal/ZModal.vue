<template>
    <Teleport to="body">
        <dialog ref="modelValue" :id="props.id">
            <div class="modal-header">
                <slot name="header" />
            </div>
            <div class="modal-content">
                <slot name="content" />
            </div>
            <div class="modal-actions">
                <ZButton v-if='!$slots.actions' label="Confirm" @click="onConfirm($event)" />
                <ZButton v-if='!$slots.actions' label="Cancel" outline />
                <slot name="actions" />
            </div>
        </dialog>
    </Teleport>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
const { modelValue } = defineModels<{
    modelValue: HTMLDialogElement
}>()
const props = defineProps<{ id: string }>()

const emit = defineEmits<{
    (e: 'confirm', data: MouseEvent): void
}>()

function onConfirm(e: MouseEvent) {
    emit('confirm', e)
    modelValue.value.setAttribute('inert', '')
    modelValue.value.close()
    setTimeout(() => {
        modelValue.value.removeAttribute('inert')
        modelValue.value.style.transition = 'none'
        modelValue.value.removeAttribute('style')
    }, 300);
}
onMounted(() => {
    document.addEventListener("click", (e: MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
        const dimensions = modelValue.value.getBoundingClientRect()
        if (dimensions) {
            if (x < dimensions.left || x > dimensions.right || y < dimensions.top || y > dimensions.bottom) {
                modelValue.value.setAttribute('inert', '')
                modelValue.value.close()
                setTimeout(() => {
                    modelValue.value.removeAttribute('inert')
                    modelValue.value.style.transition = 'none'
                    modelValue.value.removeAttribute('style')
                }, 300);
            }
        }
    })
})
</script>

<style lang='sass'>
@import './z-modal'
</style>