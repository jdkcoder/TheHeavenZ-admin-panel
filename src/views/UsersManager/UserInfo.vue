<template>
    <div class="text-2xl font-medium mb-8">User's Details</div>
    <div class="row" id="basic-info">
        <ZCard class="grid-2-cols gap-y-4 gap-x-8" border>
            <div>
                <p>Username</p>
                <ZInput type="text" label="Username" v-model="username" />
            </div>
            <div>
                <p>Password</p>
                <ZInput type="password" label="Password" v-model="password" />
            </div>
            <div>
                <p>Email</p>
                <ZInput type="text" label="Password" v-model="email" />
            </div>
            <div>
                <p>Subscription</p>
                <ZSelect />
            </div>
        </ZCard>
        <ZCard class="flex flex-col justify-center space-y-6" border>
            <div>
                <p>Joined At</p>
                <strong>20/12/2022</strong>
            </div>
            <div>
                <p>Last Modified At</p>
                <strong>20/12/2022</strong>
            </div>
        </ZCard>
    </div>

    <div id="actions">
        <ZButton label="Save" />
        <ZButton label="Ban" />
    </div>

    <ZDivider />

    <div class="text-xl font-normal mb-8 text-center pt-5">Subscription History</div>
    <div id="subscriptions-history">
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const username = ref('JDK')
const password = ref('123456789')
const email = ref('jdk@jokerdarkknight.midnight')
</script>

<style scoped lang='sass'>
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