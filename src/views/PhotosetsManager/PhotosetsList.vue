<template>
    <div id="new">
        <ZButton label="New Photoset" @click.stop="callNewPhotosetModal" />
    </div>
    <ZTable ref="table" rowClass="photoset" :columns="columns" :data="photosets" perPage="10">
        <template #row="data">
            <div @mouseenter="setImgFollow($event)" @mouseleave="removeImgFollow($event)" class="table-row" v-for="(row, index) in data" :key="index">
                <div class="td-cell">{{ row.name }}</div>
                <div class="td-cell">{{ row.studio }}</div>
                <div class="td-cell">{{ row.models[0].name }}</div>
                <div class="td-cell">{{ row.type }}</div>
                <img class="img-follow" :src="row.thumbnail" :style="`--x:${x}px;--y:${y}px`" />
            </div>
        </template>

        <!-- END -->
    </ZTable>
    <ZModal v-model="newPhotosetModal" />
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useMouseInElement } from '@vueuse/core'

const table = ref()
const { x, y } = useMouseInElement(table)
const newPhotosetModal = ref()
function callNewPhotosetModal() {
    newPhotosetModal.value?.showModal()
}

const columns = ref(['name', 'studio', 'models', 'type'])
// const imgFollowCursor = ref('')
const firstTime = ref(false)
function setImgFollow(e: MouseEvent) {
    const tr = e.target as HTMLTableRowElement
    const imgEl = tr.querySelector('img') as HTMLImageElement
    if (!firstTime.value) {
        firstTime.value = true
        imgEl.classList.add('active')
    } else {
        setTimeout(() => {
            imgEl.classList.add('active')
        }, 400);
    }
}
function removeImgFollow(e: MouseEvent) {
    const tr = e.target as HTMLTableRowElement
    const imgEl = tr.querySelector('img') as HTMLImageElement
    imgEl.classList.remove('active')
}

const photosets = ref([
    {
        thumbnail: 'https://i.imgur.com/H7fGgD6.png',
        name: 'EXC #146',
        studio: 'Espacia',
        models: [
            {
                avatar: '',
                name: 'Saika',
                country: 'Korea'
            },
        ],
        type: "V.I.P",
    },
    {
        thumbnail: 'https://i.imgur.com/xyw00ux.png',
        name: 'EXC #146',
        studio: 'Espacia',
        models: [
            {
                avatar: '',
                name: 'Saika',
                country: 'Korea'
            },
        ],
        type: "V.I.P",
    }
])

onMounted(() => {
});
</script>

<style lang='sass'>
#new
    max-width: 8.75rem
    font-weight: 700
    margin-bottom: 2rem


.img-follow
<<<<<<< HEAD
    // position: fixed
    // top: var(--y)
    // left: var(--x)
    z-index: 999
    pointer-events: none
    height: 10rem
    // transform: scale(var(--scale, 0))
=======
    position: fixed
    top: var(--y)
    left: var(--x)
    z-index: 999
    pointer-events: none
    height: 10rem
    transform: scale(var(--scale, 0))
>>>>>>> parent of e973990 (update)
    transition: transform .25s cubic-bezier(0.42,0,0.58,1)

    &.active
        --scale: 1
</style>