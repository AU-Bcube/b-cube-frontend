import axios from 'axios';

// API 호출을 위한 axios 인스턴스 (로그인 전에 사용)
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const formDataApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});