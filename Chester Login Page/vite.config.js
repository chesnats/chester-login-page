import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import inkline from '@inkline/plugin/vite';

const inklineConfig = {
    outputDir: 'src/css/variables'
};

export default defineConfig({
    base: '/chesnats/',
    plugins: [inkline(inklineConfig), vue()]
});
