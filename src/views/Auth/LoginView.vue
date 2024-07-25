<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="#"><b>Winna</b> Admin</a>
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form @submit.prevent="handleLogin">
                    <div class="input-group mb-3">
                        <input type="text" v-model="username" class="form-control" placeholder="Username" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" v-model="password" class="form-control" placeholder="Password" required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <div v-if="error" class="alert alert-danger mt-3">
                    {{ error }}
                </div>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
</template>

<script>
import http from "@/plugins/axios";

export default {
    data() {
        return {
            username: '',
            password: '',
            error: null
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await http.post('/login', {
                    username: this.username,
                    password: this.password
                });
                // Store the token in localStorage or Vuex
                localStorage.setItem('token', response.data.token);
                // Redirect or handle successful login
                console.log('Login successful:', response.data);
                this.$router.push('/dashboard'); // Example: Redirect to dashboard
            } catch (error) {
                console.error('Login failed:', error.response.data);
                this.error = error.response.data.message || 'An error occurred. Please try again.';
            }
        }
    }
};
</script>

<style scoped>
body {
    background-color: #6f42c1;
    /* Purple background for the entire page */
}

.login-box {
    width: 360px;
    margin: 7% auto;
    background-color: white;
    /* White background for the login box */
    padding: 20px;
    border-radius: 8px;
}

.card-body {
    padding: 20px;
}
</style>
