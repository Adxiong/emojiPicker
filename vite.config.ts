/*
 * @Description: 
 * @version: 
 * @Author: Adxiong
 * @Date: 2022-03-15 23:15:28
 * @LastEditors: Adxiong
 * @LastEditTime: 2022-03-16 12:17:04
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 3001
  }
})
