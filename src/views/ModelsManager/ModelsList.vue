<template>
    <div class="flex items-center justify-between">
        <div id="new-model">
            <ZButton label="New Model" @click.stop="callNewModelModal" />
        </div>

        <div id="filter-options">
            <ZInput type="search" label="Enter name to search" />
        </div>
    </div>
    <div id="models-list" class="grid-4-cols gap-6">
        <ZCard class="model">
            <div class="model-img">
                <img src="https://i.imgur.com/AVHvcx0.png" />
            </div>
            <div class="model-info">
                <strong class="model-name">Ye Eun</strong>
                <div class="flex justify-around mt-8">
                    <div class="nation">
                        <KRFlag />
                        <p>Korea</p>
                    </div>
                    <div class="photoset-count">
                        <CameraIcon />
                        <p>43</p>
                    </div>
                </div>
            </div>
        </ZCard>
        <ZCard class="model">
            <div class="model-img">
                <img src="https://i.imgur.com/T1E8k2q.png" />
            </div>
            <div class="model-info">
                <strong class="model-name">Inkyung</strong>
                <div class="flex justify-around mt-8">
                    <div class="nation">
                        <KRFlag />
                        <p>Korea</p>
                    </div>
                    <div class="photoset-count">
                        <CameraIcon />
                        <p>43</p>
                    </div>
                </div>
            </div>
        </ZCard>
        <ZCard class="model">
            <div class="model-img">
                <img src="https://i.imgur.com/HdznkB4.png" />
            </div>
            <div class="model-info">
                <strong class="model-name">Ahrin</strong>
                <div class="flex justify-around mt-8">
                    <div class="nation">
                        <KRFlag />
                        <p>Korea</p>
                    </div>
                    <div class="photoset-count">
                        <CameraIcon />
                        <p>43</p>
                    </div>
                </div>
            </div>
        </ZCard>
        <ZCard class="model">
            <div class="model-img">
                <img src="https://i.imgur.com/1BesGYe.png" />
            </div>
            <div class="model-info">
                <strong class="model-name">Ely</strong>
                <div class="flex justify-around mt-8">
                    <div class="nation">
                        <CNFlag />
                        <p>China</p>
                    </div>
                    <div class="photoset-count">
                        <CameraIcon />
                        <p>43</p>
                    </div>
                </div>
            </div>
        </ZCard>
    </div>
    <ZModal v-model="newModelModal" />
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import KRFlag from './icons/korea.svg'
import CNFlag from './icons/china.svg'
import CameraIcon from './icons/camera.svg'
const newModelModal = ref()
function callNewModelModal() {
    newModelModal.value?.showModal()
}
const models = ref([
    {
        avatar: 'https://i.imgur.com/ZvTYN2N.png',
        name: 'Inkyung',
        country: 'Korea'
    },
    {
        avatar: 'https://i.imgur.com/ZvTYN2N.png',
        name: 'Ahrin',
        country: 'Korea'
    }
])
const modelSchema = ref({
    name: 'string',
    country: 'string'
})

function edit(input: string) {
    alert('Editing ' + input)
}
// function newModel() { }
</script>

<style lang='sass'>
#new-model
    max-width: 8rem
    font-weight: 700

#models-list
    margin-top: 2rem
    pointer-events: none

    &:hover .model:not(:hover)
        filter: blur(2px) brightness(.7)

    .model
        position: relative
        padding: 0
        cursor: pointer
        height: 30.625rem
        pointer-events: auto
        border-radius: .75rem
        transition: all .4s ease-in-out

        &:hover
            --mask-scaleY: 1
            --model-img-scale: 1.07
            box-shadow: 2px 2px 12px 1px var(--purple-80)

            .model-info
                --model-info-o: 1
                --model-info-pe: auto
                transition: all .4s ease-in-out .3s

            .model-img::after
                background: rgba(0,0,0,.25)
                transition: all .4s ease-in-out .1s

        .model-img
            height: 100%
            width: 100%
            border-radius: inherit
            overflow: hidden
            position: relative

            img
                object-fit: cover
                object-position: center
                height: 100%
                width: 100%
                transition: all .4s ease-in-out .1s
                transform: scale(var(--model-img-scale, 1))

            &::after 
                content: ""
                position: absolute
                inset: 0
                z-index: 1
                background: rgba(0,0,0,.5)
                -webkit-mask-image: linear-gradient(to top,#000 0%,transparent 100%)
                transform: scaleY(var(--mask-scaleY, 0))
                transform-origin: bottom
                border-radius: inherit
                transition: background .4s ease-in-out .4s, transform .4s ease-in-out .2s

        .model-info
            position: absolute
            bottom: 0
            left: 0
            right: 0
            z-index: 2
            opacity: var(--model-info-o, 0)
            padding: 1.5rem
            pointer-events: var(--model-info-pe, none)
            color: #fff
            text-align: center
            backdrop-filter: blur(1px)
            background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.1) 100%)
            border-bottom-left-radius: inherit
            border-bottom-right-radius: inherit
            transition: all .25s ease-in-out .1s

            svg
                height: 2.5rem

            .model-name
                font-size: 1.625rem
                font-weight: 600
                color: #fff


</style>