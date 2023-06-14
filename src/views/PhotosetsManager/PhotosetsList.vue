<template>
    <div id="new">
        <ZButton label="New Photoset" @click.stop="callNewPhotosetModal" />
    </div>
    <ZTable ref="table" rowClass="photoset" :columns="columns" :data="photosets" perPage="10">
        <template #row="data">
            <div @mouseenter="setImgFollow($event)" @mouseleave="removeImgFollow($event)" class="table-row" v-for="(row, index) in data" :key="index">
                <div class="td-cell">{{ row?.name }}</div>
                <div class="td-cell">{{ row?.studio }}</div>
                <div class="td-cell">{{ row?.models[0]?.name }}</div>
                <div class="td-cell">VIP</div>
                <div class="td-cell">VIP</div>
                <img class="img-follow" :src="row.thumbnail" :style="`--x:${x}px;--y:${y}px`" />
            </div>
        </template>
        <!-- END -->
    </ZTable>
    <ZModal v-model="newPhotosetModal" id="new-photoset">
        <template #header>
            New Photoset
        </template>
        <template #content>
            <div class="flex items-center space-x-6">
                <div class="flex-1">
                    <p>Studio:</p>
                    <ZSelect v-model="studio" :options="studiosOnDropbox" />
                </div>
                <div class="flex-1">
                    <p>Models:</p>
                    <ZInput v-model="models" />
                </div>
            </div>
            <div class="my-6">
                <p>Photoset name:</p>
                <ZInput v-model="photosetName" label="Photoset name" />
            </div>
            <div>
                <p>Download link:</p>
                <ZInput v-model="downloadLink" label="Download link" />
            </div>
            <input @change="onFileChange($event)" type="file" multiple />
            <ZButton label="Upload" @click.prevent="uploadImages()" />
        </template>
    </ZModal>
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
const models = ref([])
const studio = ref()
const downloadLink = ref()
const photosetName = ref()
const columns = ref(['name', 'studio', 'models', 'type', ''])
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

const studiosOnDropbox = ref<any[]>([])

const photosets = ref([])




const images = ref([])
function onFileChange(e: Event) {
    //@ts-ignore
    images.value = [...e.target.files]
}

function uploadImages() {

}




onMounted(async () => {
});
</script>

<style lang='sass'>
#new
    max-width: 8.75rem
    font-weight: 700
    margin-bottom: 2rem


.img-follow
    position: fixed
    top: var(--y)
    left: var(--x)
    z-index: 999
    pointer-events: none
    height: 10rem
    transform: scale(var(--scale, 0))
    transition: transform .25s cubic-bezier(0.42,0,0.58,1)

    &.active
        --scale: 1
</style>