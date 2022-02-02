<template>
    <main class="login">
        <h1>Please login to continue</h1>
        <form>
            <form-input
                name="username"
                :value="username"
                v-model="username"
                placeholder="Username" />
        </form>
    </main>
</template>

<script>
export default {
    data () {
        return {
            mode: 'login',
            username: '',
            password: '',
            password2: '',
            email: '',
        }
    },
    computed: {
        title () {
            switch (this.mode) {
                case 'login' : return 'Login'
                case 'signup' : return 'Create a new account'
            }
        },
        retypePasswordError () {
            return this.password2 && this.password !== this.password2
        },
        signupValid () {
            return this.password2 && this.email && !this.retypePasswordError
        },
        valid () {
            return this.username && this.password && (this.mode !== 'signup' || this.signupValid)
        },
    },
    methods: {
        async operation() {
            awaitthis[this.mode] ()
        },
        async login () {
            // todo
        },
        async signup () {
            //todo
        },
    }
}
</script>
