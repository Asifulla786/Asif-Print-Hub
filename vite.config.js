import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

export default defineConfig({
  // GitHub Pages serves the app from /Asif-Print-Hub/, while Vercel serves it from /
  base: isGitHubPages ? '/Asif-Print-Hub/' : '/',
  plugins: [react()],
})
