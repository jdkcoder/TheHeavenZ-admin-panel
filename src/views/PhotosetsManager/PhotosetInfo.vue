<template>
    <ZCard id="preview">
        <div class="thumbnail">
            <img src="https://i.imgur.com/KJZcIxi.jpg" alt="" />
        </div>
        <div id="photoset-name">
            <span> {{ name }} </span>
        </div>
    </ZCard>
    <div class="text-2xl font-medium my-8">Photoset's Details</div>
    <ZCard class="" border>
        <div>
            <p>Name</p>
            <ZInput type="text" label="Name" v-model="name" />
        </div>
        <div class="grid-3-cols gap-x-8 gap-y-4 my-4">
            <div>
                <p>Models</p>
                Multiselect
            </div>
            <div>
                <p>Studio</p>
                SingleSelect
            </div>
            <div>
                <p>Type</p>
                SingleSelect
            </div>
        </div>
        <div>
            <p>Download Link</p>
            <ZInput type="text" label="Download Link" v-model="downloadLink" />
        </div>
    </ZCard>

    <div id="actions">
        <ZButton label="Save" />
        <ZButton label="Ban" />
    </div>

    <ZDivider />

    <div class="text-xl font-normal mb-8 text-center">Images Inside</div>
    <div id="subscriptions-history">
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const name = ref('EXC #146')
const downloadLink = ref('https://google.com')
</script>

<style scoped lang='sass'>
#preview
    margin: 0 auto
    width: 500px
    height: 281px
    padding: 0
    box-shadow: 0 0 0 1.5px var(--purple-80)
    position: relative

    &::after, &::before
        --s: 8rem
        content: ""
        position: absolute
        transform: translateX(var(--x, 0)) translateY(var(--y, 0))
        height: var(--s)
        width: var(--s)
        border-radius: 100%
        background: var(--purple-80)
        z-index: -1
        filter: blur(4rem)
        transition: all .4s ease-in-out

    &::after
        --y: 30%
        --x: 40%
        right: 0
        bottom: 0

    &::before
        --y: -30%
        --x: -40%
        left: 0
        top: 0

    &:hover
        --o: 0
        --scale: 1.1

        &::after
            --x: 0%
            --y: -130%

        &::before
            --x: 0%
            --y: 130%

    #photoset-name
        position: absolute
        left:0
        bottom: 0
        z-index: 1
        width: 100%
        height: 3rem
        display: grid
        align-items: center
        padding: 0 1.5rem
        background: rgba(0,0,0,.3)
        backdrop-filter: blur(8px)
        color: #fff
        opacity: var(--o, 1)
        border-bottom-left-radius: inherit
        border-bottom-right-radius: inherit
        font-size: 1.125rem
        transition: opacity .4s ease-in-out

        span
            display: -webkit-box
            font-weight: 500
            -webkit-line-clamp: 1
            -webkit-box-orient: vertical
            overflow: hidden

    .thumbnail
        position: absolute
        inset: 0
        border-radius: inherit
        overflow: hidden

        img
            width: 100%
            height: 100%
            object-fit: cover
            transform: scale(var(--scale, 1))
            transition: transform .4s ease-in-out

#basic-info
    display: grid
    grid-auto-flow: column
    width: 100%

    & > * + *
        margin-left: 1.5rem

#basic-info-grid
    display: grid
    grid-template-columns: repeat(2, 1fr)
    gap: 1rem 2rem

strong
    font-weight: 500
    color: #fff

p
    font-size: .875rem
    
#actions
    display: flex
    gap: 1.25rem
    margin-inline: auto
    margin-top: 1rem
    margin-bottom: 1.5rem
    max-width: 300px
</style>