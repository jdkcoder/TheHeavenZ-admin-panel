<template>
    <ZCard id="weather-card">
        <div id="location">
            {{ location?.name }}, {{ location?.country }} <span v-if='current?.temp_c'>{{ current?.temp_c }}°C</span>
        </div>
        <div id="humidity" v-if='current?.humidity'>
            Humidity: {{ current?.humidity }}%
        </div>
        <div id="feel-like" v-if='current?.feelslike_c'>{{ current?.feelslike_c.toFixed(0) }}°C</div>
        <div id="co-rate" v-if='current?.air_quality?.co'>CO Rate: {{ current?.air_quality?.co }}</div>
        <img :src="current?.condition?.icon" v-if='current?.condition?.icon' class="icon-condition" draggable="false" />
    </ZCard>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import umi from 'umi-request'
const location = ref()
const current = ref()

onMounted(async () => {
    await umi.get('https://api.weatherapi.com/v1/current.json?key=56e1a8576f0c482280d84625230905&q=Hanoi&aqi=yes').then(res => {
        current.value = res.current
        location.value = res.location
    }).catch(err => console.log(err))

})
</script>

<style lang='sass?intendedSyntax'>
@import './weather-card'
</style>