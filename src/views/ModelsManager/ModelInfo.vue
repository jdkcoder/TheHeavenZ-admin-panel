<template>
    <div class="text-2xl font-medium mb-8">Model's Details</div>
    <ZCard class="relative" border>
        <strong class="text-xl">Basic Info</strong>
        <div id="photo-count">
            <CameraIcon /> 43
        </div>
        <div class="w-max mx-auto relative">
            <span id="sys-rating">10.0</span>
            <ZAvatar src="https://i.imgur.com/62EkWzC.jpg" id="model-avt" />
            <span id="user-rating">9.5</span>
        </div>
        <div class="grid-3-cols gap-x-8 mt-6">
            <div>
                <p>Model's Avatar</p>
                <ZInput type="text" label="Avatar Link" v-model="username" />
            </div>
            <div>
                <p>Model's Name</p>
                <ZInput type="text" label="Username" v-model="username" />
            </div>
            <div>
                <p>Country</p>
                <ZInput type="text" label="Password" v-model="password" />
            </div>
        </div>
    </ZCard>
    <ZCard class="mt-12" border>
        <strong class="text-xl">Social Networks</strong>
        <div class="grid-2-cols gap-y-4 gap-x-8 mt-6">
            <div>
                <p>Instagram</p>
                <ZInput type="text" label="Username" v-model="username" />
            </div>
            <div>
                <p>Twitter</p>
                <ZInput type="text" label="Password" v-model="password" />
            </div>
        </div>
    </ZCard>

    <div id="actions">
        <ZButton label="Save" />
        <ZButton label="Ban" />
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import CameraIcon from './icons/camera.svg'
const username = ref('JDK')
const password = ref('123456789')
</script>

<style scoped lang='sass'>
#model-avt
    height: 8rem
    width: 8rem
    margin: 0 auto

strong
    color: #fff

#sys-rating, #user-rating
    --space: 1rem
    position: absolute
    top: 50%
    font-weight: 500
    font-size: 1.125rem
    user-select: none

#sys-rating
    transform: translate(calc(-100% -  var(--space)), -50%)
    left: 0
    color: var(--red-100)
    text-shadow: 0 0 0.125rem red

#user-rating
    transform: translate(calc(100% + var(--space)), -50%)
    right: 0
    color: var(--blue-100)
    text-shadow: 0 0 0.125rem blue

#photo-count
    position: absolute
    top: 1rem
    right: 1.5rem
    display: flex
    align-items: center
    font-size: 1.0625rem

    svg
        height: 1.5rem
        margin-right: .5rem
    
#actions
    display: flex
    gap: 1.25rem
    margin-inline: auto
    margin-top: 1rem
    margin-bottom: 1.5rem
    max-width: 300px


</style>