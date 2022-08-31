import axios from 'axios'

export const baseUrl = 'http://localhost:3000/api'
export * from './source'

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: { Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwOTYzNjQ1LCJpYXQiOjE2NjA3NDc2NDUsImp0aSI6IjUxMTg1NGJkOTM1MTQzYjNiNGQwNmQyOWVlMzI0Njc5IiwidXNlcl9pZCI6MX0.Rf0qc_HqDrvEgnfh7wgj9ENrPgh9tIR9yvmCn7RZsD0' },
})

export default axiosInstance
