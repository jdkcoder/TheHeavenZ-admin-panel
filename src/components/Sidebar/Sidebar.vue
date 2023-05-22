<template>
    <aside>
        <div id="sidebar-content">
            <header id="header">
                <button id="elastic-btn">
                    <CollapseIcon class="stroke" />
                </button>
                <RouterLink to="/" id="logo">Z-Panel</RouterLink>
            </header>
            <nav id="nav-list">
                <RouterLink to="/" class="nav-item">
                    <div class="nav-icon">
                        <HomeIcon class="stroke" />
                    </div>
                    <span>dashboard</span>
                </RouterLink>
                <ZDivider />
                <div class="nav-group active">
                    <button class="group-title active" @click="toggleNavGroup($event)">
                        Users & Permissions
                    </button>
                    <div class="nav-group-inner">
                        <RouterLink to="/users" class="nav-item">
                            <div class="nav-icon">
                                <UsersIcon class="stroke" />
                            </div>
                            <span>users</span>
                        </RouterLink>
                        <RouterLink to="/" class="nav-item">
                            <div class="nav-icon">
                                <UsersIcon class="stroke" />
                            </div>
                            <span>subscriptions</span>
                        </RouterLink>
                    </div>
                </div>
                <ZDivider />
                <div class="nav-group active">
                    <button class="group-title" @click="toggleNavGroup($event)">
                        Resources
                    </button>
                    <div class="nav-group-inner">
                        <RouterLink to="/photosets" class="nav-item">
                            <div class="nav-icon">
                                <UsersIcon class="stroke" />
                            </div>
                            <span>photosets</span>
                        </RouterLink>
                        <RouterLink to="/studios" class="nav-item">
                            <div class="nav-icon">
                                <UsersIcon class="stroke" />
                            </div>
                            <span>studios</span>
                        </RouterLink>
                        <RouterLink to="/models" class="nav-item">
                            <div class="nav-icon">
                                <UsersIcon class="stroke" />
                            </div>
                            <span>models</span>
                        </RouterLink>
                        <RouterLink to="/categories" class="nav-item">
                            <div class="nav-icon">
                                <UsersIcon class="stroke" />
                            </div>
                            <span>categories</span>
                        </RouterLink>
                        <RouterLink to="/tags" class="nav-item">
                            <div class="nav-icon">
                                <TagsIcon class="fill" />
                            </div>
                            <span>tags</span>
                        </RouterLink>
                        <RouterLink to="/countries" class="nav-item">
                            <div class="nav-icon">
                                <UsersIcon class="stroke" />
                            </div>
                            <span>countries</span>
                        </RouterLink>
                    </div>
                </div>
                <ZDivider />
            </nav>
        </div>
    </aside>
</template>

<script setup lang='ts'>
import CollapseIcon from './icons/collapse.svg'
import HomeIcon from './icons/home.svg'
import UsersIcon from './icons/users.svg'
import TagsIcon from './icons/tags.svg'

function toggleNavGroup(e: MouseEvent) {
    const el = e.target as HTMLButtonElement //get HTML source của button có class là group-title
    const group = el.closest('.nav-group') as HTMLDivElement
    group.classList.toggle('active') //toggle class active cho .nav-group
}

</script>

<style lang='sass?intendedSyntax'>
@import './sidebar'
</style>