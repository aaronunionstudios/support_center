<template>
    <nav class="menu">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'faq' }">FAQ</router-link>
        <div class="spacer"></div>
        <template v-if="$state.user">
            <a>{{ $state.user.username }}</a>
            <a @click="logout">Logout</a>
        </template>
        <router-link v-else :to="{name: 'login'}">Login</router-link>
        <router-link :to="{ name: 'tickets', meta: { private: true} }">Support Tickets</router-link>
    </nav>
</template>

<script>
export default {
    methods: {
        async logout () {
            const result = await this.$fetch('logout')
            if (result.status === 'ok') {
                this.$state.user = null
            }
        },
    },
}
</script>


<style lang="stylus" scoped>
@import '../style/imports';

.router-link-exact-active {
    border-bottom-color: $primary-color;
}
</style>