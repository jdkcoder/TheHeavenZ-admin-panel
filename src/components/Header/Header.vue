<template>
    <header id="right-header">
        <div id="breadcrumb">
            <RouterLink to="/" v-if='route.name !== "Dashboard"'>Dashboard</RouterLink>
            <a href="#!" v-if='route.name !== "Dashboard"'>{{ route.name }}</a>
        </div>
        <div id="right-corner">
            <ZInput type="search" label="Type something" v-model="keyword" />
            <button @click="toggleNotifications" class="toggle-notifications" count="9">
                <BellIcon />
            </button>
            <ZAvatar src="https://i.imgur.com/ZvTYN2N.png" username="Admin" @click.prevent="callUserMenu($event)" class="pointer" />
            <div id="user-menu" ref="userMenu">
                <strong class="item" id="username">
                    <div class="icon">
                        <CurrentUserIcon />
                    </div>
                    Admin
                </strong>
                <ZDivider noMargin />
                <button @click="logout" class="item">
                    <div class="icon">
                        <LogoutIcon />
                    </div>
                    <span>Logout</span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BellIcon from './icons/bell.svg'
import LogoutIcon from './icons/logout.svg'
import CurrentUserIcon from './icons/current-user.svg'
const route = useRoute();
const keyword = ref<string>()
const userMenu = ref<HTMLDivElement>()
function toggleNotifications() {

}

function logout() {

}

function callUserMenu(e: MouseEvent) {
    e.stopPropagation()
    userMenu.value?.classList.toggle('active')
}

onMounted(() => {
    document.addEventListener("click", (e: MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
        const dimensions = userMenu.value?.getBoundingClientRect()
        if (dimensions) {
            if (x < dimensions.left || x > dimensions.right || y < dimensions.top || y > dimensions.bottom) {
                userMenu.value?.classList.remove('active')
            }
        }
    })
})
</script>

<style lang='sass?intendedSyntax'>
@import './header'
</style>