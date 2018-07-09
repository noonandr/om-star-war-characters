<template>
  <div class="om-characters">
    <h1>Star Wars Characters</h1>

    <input type="text" v-model="search" v-on:input="searchForPlanet" placeholder="Search for planets"/>

    <CharactersTable v-bind:characters="characters"/>

    <div class="pagination" v-if="showPagination">
      <button v-if="previousUrl" v-on:click="get_characters(previousUrl)">Previous</button>
      Page {{pageNumber}} of {{totalPages}}
      <button v-if="nextUrl" v-on:click="get_characters(nextUrl)">Next</button>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  import CharactersTable from '@/components/CharactersTable.vue'

  export default {
    name: 'app',
    components: {
      CharactersTable
    },
    data () {
      return {
        characters: [],
        previousUrl: false,
        nextUrl: false,
        pageNumber: false,
        totalPages: false,
        showPagination: false,
        search: []
      }
    },
    methods: {
      get_characters: function (url) {

        return axios(url, {
          method: 'GET'
        }).then(response => {

          this.showPagination = false

          let previous = false
          let next = false

          const resultsPerPage = 10

          // data from the query
          let data = response.data

          // total number of pages in result
          this.totalPages = Math.ceil(data.count/resultsPerPage)

          // pagination
          if (data.previous) {
            this.previous = true;
            this.previousUrl = data.previous
          }

          if (data.next) {
            this.next = true;
            this.nextUrl = data.next
          }

          if (this.next) {
            this.pageNumber = this.nextUrl.match(/page=([^&]*)/)[1] -1;
          } else if (data.count = 0) {
            this.pageNumber = 1
          }

          if ((this.next && data.count !== 0) || (this.previous && data.count !== 0)) {
            this.showPagination = true
          }

          // array of characters from response
          this.characters = data.results
        })
      },
      searchForPlanet: function () {
        const baseUrl = 'https://swapi.co/api/planets/?search='
        let searchUrl = baseUrl + this.search

        this.get_characters(searchUrl)
      }
    },
    beforeMount(){
      const planetsUrl = 'https://swapi.co/api/planets'

      // run main function on load
      this.get_characters(planetsUrl)
    },
  }

</script>
