<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  confirmPassword?: string
}

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const errors = ref<FormErrors>({})
const submitted = ref(false)

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = (): boolean => {
  errors.value = {}

  if (!formData.value.firstName.trim()) {
    errors.value.firstName = 'First name is required'
  }

  if (!formData.value.lastName.trim()) {
    errors.value.lastName = 'Last name is required'
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!validateEmail(formData.value.email)) {
    errors.value.email = 'Please enter a valid email'
  }

  if (!formData.value.password) {
    errors.value.password = 'Password is required'
  } else if (formData.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
  }

  if (!formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Please confirm your password'
  } else if (formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = (): void => {
  if (validateForm()) {
    submitted.value = true
    console.log('Form submitted:', formData.value)
    // Here you would typically send the data to your backend
    setTimeout(() => {
      submitted.value = false
      // Reset form
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }, 2000)
  }
}

const resetForm = (): void => {
  formData.value = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  errors.value = {}
}
</script>

<template>
  <div class="signup-container">
    <div class="signup-card">
      <h1>Create Account</h1>
      <p class="subtitle">Join us today</p>

      <div v-if="submitted" class="success-message">
        <p>✓ Account created successfully!</p>
      </div>

      <form v-else @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            id="firstName"
            v-model="formData.firstName"
            type="text"
            placeholder="John"
            :class="{ 'input-error': errors.firstName }"
          />
          <span v-if="errors.firstName" class="error-text">{{ errors.firstName }}</span>
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            id="lastName"
            v-model="formData.lastName"
            type="text"
            placeholder="Doe"
            :class="{ 'input-error': errors.lastName }"
          />
          <span v-if="errors.lastName" class="error-text">{{ errors.lastName }}</span>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="john@example.com"
            :class="{ 'input-error': errors.email }"
          />
          <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            placeholder="••••••••"
            :class="{ 'input-error': errors.password }"
          />
          <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            v-model="formData.confirmPassword"
            type="password"
            placeholder="••••••••"
            :class="{ 'input-error': errors.confirmPassword }"
          />
          <span v-if="errors.confirmPassword" class="error-text">
            {{ errors.confirmPassword }}
          </span>
        </div>

        <div class="button-group">
          <button type="submit" class="btn-submit">Sign Up</button>
          <button type="button" class="btn-reset" @click="resetForm">Reset</button>
        </div>
      </form>

      <p class="login-link">
        Already have an account? <a href="#">Log in</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.signup-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: 40px;
  max-width: 400px;
  width: 100%;
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 10px;
  font-size: 28px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
}

.success-message {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  color: #333;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
}

input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  transition: all 0.3s ease;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 5px rgba(102, 126, 234, 0.3);
}

input.input-error {
  border-color: #dc3545;
  background-color: #fff5f5;
}

.error-text {
  color: #dc3545;
  font-size: 12px;
  margin-top: 5px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

button {
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.btn-submit {
  flex: 1;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-submit:active {
  transform: translateY(0);
}

.btn-reset {
  flex: 1;
  background-color: #f0f0f0;
  color: #333;
}

.btn-reset:hover {
  background-color: #e0e0e0;
}

.login-link {
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-top: 20px;
}

.login-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.login-link a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .signup-card {
    padding: 30px 20px;
  }

  h1 {
    font-size: 24px;
  }

  .button-group {
    flex-direction: column;
  }
}
</style>
