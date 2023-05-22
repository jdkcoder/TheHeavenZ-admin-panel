<template>
    <div class="row">
        <WelcomeCard />
        <DateTimeCard />
        <WeatherCard />
    </div>
</template>

<script setup lang='ts'>
import WelcomeCard from '../../components/Dashboard/WelcomeCard/WelcomeCard.vue';
import DateTimeCard from '../../components/Dashboard/DateTimeCard/DateTimeCard.vue';
import WeatherCard from '../../components/Dashboard/WeatherCard/WeatherCard.vue';
</script>

