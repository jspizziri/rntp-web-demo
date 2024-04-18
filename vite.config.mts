import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactNativeWeb from 'vite-plugin-react-native-web'

export default defineConfig(() => ({
    root: './src',
    build: {
        rollupOptions: {
            input: './src/index.html',
        },
    },
    // optimizeDeps: {
    //     include: ['shaka-player/dist/shaka-player.ui'],
    // },
    plugins: [
        react(),
        reactNativeWeb(),
    ],
}))