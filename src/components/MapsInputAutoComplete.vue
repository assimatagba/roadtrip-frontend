<template>
    <section :class="sectionClasses">
        <b-field :label="label">
            <b-autocomplete
            rounded
                :data="data"
                :placeholder="placeholder"
                field="description"
                icon="magnify"
                
                :loading="isFetching"
                :check-infinite-scroll="true"
                @typing="getAsyncData"
                @select="onOptionSelected"
                @infinite-scroll="getMoreAsyncData">

                <template slot-scope="props">
                    <div class="media">

                        <div class="media-small">
                             <b-icon
                icon="map-marker"
                size="is-small"
                type="is-danger">
            </b-icon>
                        </div>
                        
                        <div class="media-content">
                            {{ props.option.description }}
                            <br>
                            <!-- <small>
                                Released at {{ props.option.release_date }},
                                rated <b>{{ props.option.vote_average }}</b>
                            </small> -->
                        </div>
                    </div>
                </template>
                <template #footer>
                    <span v-show="page > totalPages" class="has-text-grey"> Thats it! No more places found. </span>
                </template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
    import debounce from 'lodash/debounce'
    import PlacesMetier from '../../metier/domain/places'
    export default {
        props: ["placeholder","sectionClasses","label","onSelectCallback"],
        data() {
            return {
                data: [],
                selected: null,
                isFetching: false,
                name: '',
                page: 1,
                totalPages: 1
            }
        },
        mounted(){
        },
        methods: {
            onOptionSelected(option) {
            this.onSelectCallback(option)
            },
            getAsyncData : debounce(async function (name) {
                // String update
                if (this.name !== name) {
                    this.name = name
                    this.data = []
                    // this.page = 1
                    // this.totalPages = 1
                }
                // String cleared
                if (!name.length) {
                    this.data = []
                    // this.page = 1
                    // this.totalPages = 1
                    return
                }
                // Reached last page
                // if (this.page > this.totalPages) {
                //     return
                // }
                this.isFetching = true

                try {
                    const data = await PlacesMetier.getInputSuggestions(name)
                    data.predictions.forEach((item) => this.data.push(item))
                    
                } catch (error) {   
                        throw error
                    
                } finally{
                    this.isFetching = false
                }

                    // axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${name}&page=${this.page}`)
                    // .then(({ data }) => {
                    //     data.results.forEach((item) => this.data.push(item))

                    //     this.page++
                    //     this.totalPages = data.total_pages
                    // })
                    // .catch((error) => {
                    //     throw error
                    // })
                    // .finally(() => {
                    //     this.isFetching = false
                    // })
            }, 500),
            getMoreAsyncData: debounce(function () {
                this.getAsyncData(this.name)
            }, 250),
            
        }
    }
</script>