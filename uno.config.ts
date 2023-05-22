import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
    presets: [
        presetAttributify(),
        presetUno(),
    ],
    rules: [
        [/^grid-([\.\d]+)-cols$/, ([_, num]) => ({ display: `grid`, 'grid-template-columns': `repeat(${num}, minmax(0, 1fr))` })],
    ],
    shortcuts: {
        'flex-center': 'flex items-center justify-center',
        'grid-center': 'grid place-items-center'
    }
})