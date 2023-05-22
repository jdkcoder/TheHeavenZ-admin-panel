<template>
    <div class="z-paginator">
        <div class="arrows" v-if='Number(currentIndex) !== 1'>
            <div class="double-arrow-btn" @click="toFirst">
                <DoubleArrowLeftIcon />
            </div>
            <div class="single-arrow-btn" @click="previous($event)">
                <ArrowLeftIcon />
            </div>
        </div>
        <button v-for="(i, index) in Number(props.totalPages)" @click="onClick($event, i)" :class="{ active: index === 0 }">{{ i }}</button>
        <div class="arrows" v-if='Number(currentIndex) !== Number(props.totalPages)'>
            <div class="single-arrow-btn" @click="next($event)">
                <ArrowRightIcon />
            </div>
            <div class="double-arrow-btn" @click="toLast">
                <DoubleArrowRightIcon />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import ArrowRightIcon from './icons/arrow-right.svg'
import ArrowLeftIcon from './icons/arrow-left.svg'
import DoubleArrowLeftIcon from './icons/double-arrow-left.svg'
import DoubleArrowRightIcon from './icons/double-arrow-right.svg'
const props = defineProps<{ totalPages: number | string }>()
const currentIndex = ref<number>(1)
const emit = defineEmits<{
    (e: 'onPage', page: number): void
}>()
function onClick(e: MouseEvent, i: number) {
    e.preventDefault()
    emit('onPage', i)
    const el = e.target as HTMLButtonElement
    const wrapper = el.closest('.z-paginator') as HTMLDivElement
    wrapper.querySelectorAll('button').forEach((btn: HTMLButtonElement) => btn.classList.remove('active'))
    el.classList.add('active')
    currentIndex.value = i
}

function next(e: MouseEvent) {
    e.preventDefault()
    const el = e.target as HTMLButtonElement
    const wrapper = el.closest('.z-paginator') as HTMLDivElement
    if (currentIndex.value < Number(props.totalPages)) {
        currentIndex.value++
        wrapper.querySelectorAll('button').forEach((btn: HTMLButtonElement) => btn.classList.remove('active'))
        wrapper.querySelectorAll('button')[currentIndex.value - 1].classList.add('active')
    }
}
function previous(e: MouseEvent) {
    e.preventDefault()
    const el = e.target as HTMLButtonElement
    const wrapper = el.closest('.z-paginator') as HTMLDivElement
    if (currentIndex.value > 1) {
        currentIndex.value--
        wrapper.querySelectorAll('button').forEach((btn: HTMLButtonElement) => btn.classList.remove('active'))
        wrapper.querySelectorAll('button')[currentIndex.value - 1].classList.add('active')
    }
}

function toFirst() {
    currentIndex.value = 1
    const wrapper = document.querySelector('.z-paginator') as HTMLDivElement
    wrapper.querySelectorAll('button').forEach((btn: HTMLButtonElement) => btn.classList.remove('active'))
    wrapper.querySelectorAll('button')[currentIndex.value - 1].classList.add('active')
}
function toLast() {
    currentIndex.value = Number(props.totalPages)
    const wrapper = document.querySelector('.z-paginator') as HTMLDivElement
    wrapper.querySelectorAll('button').forEach((btn: HTMLButtonElement) => btn.classList.remove('active'))
    wrapper.querySelectorAll('button')[currentIndex.value - 1].classList.add('active')
}
</script>

<style lang='sass?intendedSyntax'>
@import './z-paginator'
</style>