<template>
    <main>
        <Sidebar />
        <Header />
        <div id="dynamic-content">
            <slot />
        </div>
    </main>
</template>

<script setup lang='ts'>
import Sidebar from '../components/Sidebar/Sidebar.vue';
import Header from '../components/Header/Header.vue';

</script>

<style lang='sass?intendedSyntax'>
@import './dashboard-layout'
</style>