export default defineAppConfig({
    ui: {
        button: {
            slots: {
                base: 'font-normal'
            },
        },
        dropdownMenu: {
            variants: {
                active: {
                    false: {
                        item: 'data-highlighted:before:bg-red-500'
                    }
                }
            }
        }
    }
})
