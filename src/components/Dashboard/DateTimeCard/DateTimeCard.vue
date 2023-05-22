<template>
    <ZCard id="date-time">
        <div id="date" class="pointer">
            {{ moment(today).format('dddd, Do MMM YYYY') }}
        </div>
        <div id="time" class="pointer">
            <span v-if='currentTimeIsLoaded'>
                {{ hours }}:{{ minutes }}:{{ seconds }}
            </span>
        </div>
        <ClockIcon id="clock-icon" />
    </ZCard>
</template>

<script setup lang='ts'>
import { onBeforeMount } from 'vue'
import ClockIcon from './icons/clock.svg'
import moment from "moment"

const today = new Date()

let hours = $ref<string>()
let minutes = $ref<string>()
let seconds = $ref<string>()
let currentTimeIsLoaded = $ref<boolean>(false)
function currentTime() {
    const now = new Date();
    hours = now.getHours().toString().padStart(2, '0');
    minutes = now.getMinutes().toString().padStart(2, '0');
    seconds = now.getSeconds().toString().padStart(2, '0');
    currentTimeIsLoaded = true
}

onBeforeMount(() => {
    setInterval(currentTime, 1000);

})
</script>

<style lang='sass?intendedSyntax'>
@import './date-time-card'
</style>