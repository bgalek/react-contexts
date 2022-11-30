import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        dts({
            insertTypesEntry: true,
        }),
        eslintPlugin()
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/providers/UserSettings/UserSettingsProvider.tsx'),
            name: '@bgalek/react-contexts',
            fileName: 'react-contexts',
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'react'
                }
            }
        }
    },
    test :{
        environment: "jsdom",
        setupFiles: "./vitest.ts"
    }
})
