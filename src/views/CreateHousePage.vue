<template>
    <page-layout>
        <section class="py-4 bg-teal-dark">
            <div class="container">
                <form class="form">
                <div class="form__field relative">
                    <i class="input-icon material-icons absolute text-grey-darker">search</i>
                    <input
                    class="input__search"
                    id="where"
                    type="text"
                    placeholder="Mexico City, Mexico">
                </div>
                </form>
            </div>
        </section>
        <section class="section__create py-6">
            <div class="container">
                <h1 class="text-3xl">Publish a new room</h1>
                <form>
                    <div class="mb-4">
                        <label class="input__label">Titulo</label>
                        <input v-model="publication.title" type="text" class="input__field" placeholder="Bruce Wayne" />
                    </div>
                    <div class="mb-4">
                        <label class="input__label">Description</label>
                        <textarea v-model="publication.description" rows="10" class="input__field" placeholder="Bruce Wayne" > </textarea>
                    </div>
                    <div class="mb-4">
                        <label class="input__label">Featured Image</label>
                        <input v-model="publication.featuredImage" type="text" class="input__field" placeholder="..." />
                    </div>
                    <div class="mb-4">
                    <button @click.prevent="save" class="w-full bg-yellow-dark text-yellow-darker font-semibold py-3 px-6 rounded">
                        Publish
                    </button>
                    </div>
                </form>
            </div>
        </section>
    </page-layout>
</template>

<script>
import PageLayout from '@/layouts/PageLayout.vue'
import { METHODS } from 'http'
export default {
    name: 'CreateHousePage',
    data(){
        return{
            publication:{
                title: '',
                description: '',
                featuredImage: '',
            },
        }
    },
    components:{
        PageLayout,
    },
    methods:{
        save(){
            const { title, description, featuredImage} = this.publication

            const room = {
                title,
                description,
                featured_image: featuredImage,
                publishedAt: Date.now(),
            }
            this.$store.dispatch('CREATE_ROOM', room).then(() =>{
                this.$router.push({name: 'SearchPage'})
            })
        }
    }
}
</script>