<template>
    <section id="login-page">
        <div id="login-card">
            <h2>Login</h2>
            <div id="login-form" ref="loginForm">
                <ZInput v-model="username" type="text" label="Username" tabindex="1" @keyup.enter="enterToLogin" />
                <ZInput v-model="password" type="password" label="Password" tabindex="2" @keyup.enter="enterToLogin" />
                <ZCheckbox v-model="isRememberMe" boolean label="Remember me" tabindex="3" />
                <ZButton loading label="Login" @click.prevent="login" id="login-btn" tabindex="4" />
            </div>
        </div>
    </section>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import axios from 'axios'
const username = ref<string>('jdk');
const password = ref<string>('password');
const isRememberMe = ref<boolean>(false)
const loginForm = ref<HTMLDivElement>()

async function enterToLogin(e: KeyboardEvent) {
    e.preventDefault()
    const form = loginForm.value
    const loginBtn = form?.querySelector<HTMLButtonElement>('#login-btn')

    if (username.value && password.value) loginBtn?.click()
    else alert('Please fill in the username and password')
}

async function login() {
    await axios.post('http://localhost/oauth/token', {
        client_secret: '6XQooY0HBIQIZlS87DmmDl3RzGlQg7GnpO6EvmiD',
        client_id: 2,
        username: username.value,
        password: password.value,
        grant_type: 'password'
        // isRememberMe: isRememberMe.value
    }).then(res => {
        console.log(res.data)
    })
}
</script>

<style lang="sass?intendedSyntax">
@import './login.sass'
</style>