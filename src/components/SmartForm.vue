<template>
    <main class="login">
        <h1>Please login to continue</h1>
        <SmartForm 
        class="form" 
        :title="title" 
        :operation="operation" 
        :valid="valid">
            <FormInput 
            name="username"
            v-model="username"
            placeholder="Username" 
            />
            <FormInput 
            name="password"
            type="password"
            v-model="password"
            placeholder="Password" 
            />
            <template v-if="mode === 'signup'">
                <FormInput 
                name="verify-password"
                type="password"
                v-model="password2"
                placeholder="Retype Password" 
                :invalid="retypePasswordError" 
                />
                <FormInput 
                name="email"
                type="email"
                v-model="email"
                placeholder="Email" 
                />
            </template>
            <template slot="actions">
                <template v-if="mode === 'login'">
                    <button
                    type="button"
                    class="secondary"
                    @click="mode = 'signup'">
                    Sign up
                    </button>
                    <button
                    type="submit"
                    :disabled="!valid">
                    Login
                    </button>
                </template>
                <template v-else-if="mode === 'signup'">
                    <button
                    type="button"
                    class="secondary"
                    @click="mode = 'login'">
                    Back to Login
                    </button>
                    <button
                    type="submit"
                    :disabled="!valid">
                    Create account
                    </button>
                </template>
            </template>
        </SmartForm>
    </main>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        operation: {
            type: Function,
            required: true,
        },
        valid: {
            type: Boolean,
            required: true,
        },
    },
    data () {
        return {
            error: null,
            busy: false,
        }
    },
    methods: {
        async submit () {
            if (this.valid && !this.busy) {
                this.error = null
                this.busy = true
                try {
                    await this.operation()
                } catch (e) {
                    this.error = e.message
                }
                this.busy = false
            }
        },
    },
}
</script>
