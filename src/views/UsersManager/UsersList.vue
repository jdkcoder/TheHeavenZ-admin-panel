<template>
    <div id="new-user">
        <ZButton @click.stop="callNewUserModal">
            New User
        </ZButton>
    </div>
    <div class="row" id="statistics-card">
        <ZCard>
            <p class="card-title">Total Users</p>
        </ZCard>
        <ZCard>
            <p class="card-title">V.I.P Users</p>
        </ZCard>
        <ZCard>
            <p class="card-title">Banned Users</p>
        </ZCard>
    </div>
    <ZTable :data="users" perPage="10" :searchSchema="usersSchema">
        <!-- Affecting to Column Names via slot name-->
        <template #joinedAtHeader> <!-- slot name: joinedAtHeader -->
            joined at <!-- changed name to render -->
        </template>
        <!-- END -->

        <!-- Turn on checkbox for a row via slot name -->
        <template #checkboxRow="data">
            <ZCheckbox v-model="selectedUsers" :value="data.username" name="username" />
        </template>
        <!-- END Turn on checkbox for a row via slot name -->

        <!-- Affecting to single value of data passed to ZTable that rendered -->
        <template #avatar="{ avatar }">
            <ZAvatar :src="avatar" />
        </template>

        <template #devices="{ devices }">
            {{ devices }} / 2
        </template>
        <!-- END -->

        <!-- Affecting to cell actions for a row -->
        <template #rowActions="data">
            <button @click="edit(data.username)">Edit</button>
        </template>
        <!-- END -->
    </ZTable>
    <ZModal v-model="newUserModal" id="add-new" @confirm="createUser($event)">
        <template #header>
            Add A New User
        </template>
        <template #content>
            <ZInput label="Username" />
            <ZInput type="email" label="Email" class="my-6" />
            <ZInput type="password" label="Password" class="mb-6" />
            <ZSelect />
        </template>
    </ZModal>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import ZInput from '../../components/ZInput/ZInput.vue';
const newUserModal = ref()
function callNewUserModal() {
    newUserModal.value?.showModal()
}
const users = ref([
    {
        avatar: 'https://i.imgur.com/ZvTYN2N.png',
        username: 'Joker',
        level: 0,
        joinedAt: `12/02/2023`,
        devices: 1
    },
    {
        avatar: 'https://i.imgur.com/ZvTYN2N.png',
        username: 'JDK',
        level: 0,
        joinedAt: `12/02/2023`,
        devices: 1
    }
])
const usersSchema = ref({
    username: 'string',
    level: 'number',
    joinedAt: 'string',
    devices: 'number'
})
const selectedUsers = ref([])


function edit(input: string) {
    alert('Editing ' + input)
}

function createUser(e: MouseEvent) {
    e.preventDefault()

    const el = e.target as HTMLButtonElement
    el.setAttribute('disabled', '')
    setTimeout(() => el.removeAttribute('disabled'), 3000);

}
</script>

<style lang='sass'>
#new-user
    max-width: 7rem
    font-weight: 700

#statistics-card
    margin: 2rem 0

    & > * + *
        margin-left: 1.5rem

    & > *
        position: relative
        width: 100%

    .card-title
        font-size: .875rem
        font-weight: 600
        color: rgba(229, 231, 235, 1)

#add-new
    max-width: 500px
    height: max-content
</style>