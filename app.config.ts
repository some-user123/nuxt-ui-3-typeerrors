export default defineAppConfig({
    ui: {
        button: {
            slots: {
                base: 'font-normal'
            },
            variants: {
                size: {
                    lg: 'px-4 py-2',
                }
            },
            compoundVariants: [
                {
                    color: 'error',
                    variant: 'link',
                    class: 'text-lg'
                }
            ]
        },
        dropdownMenu: {
            variants: {
                active: {
                    false: 'data-highlighted:before:bg-red-500',
                }
            }
        }
    }
})