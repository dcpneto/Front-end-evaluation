const NewComponent = {
    name: 'NewComponent',

    props: {
        id: {
            type: String,
            default: 'bb9d3de9-5b2f-4189-90da-e3b292c5e3a5'
        }
    },
    template: ` <h1> Hello {{id}}</h1>`
}