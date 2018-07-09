<template>
  <div class="om-characters">
    <h1>Star Wars Characters</h1>

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
        showPagination: false
      }
    },
    methods: {
      get_characters: function (url) {

        return axios(url, {
          method: 'GET'
        }).then(response => {
          let previous = false
          let next = false
          const resultsPerPage = 10

          let data = response.data
          const numberOfResults = data.count

          this.totalPages = Math.ceil(numberOfResults/resultsPerPage)
          if (url.match('=')) {
            this.pageNumber = url.substr(url.indexOf('=') + 1)
          } else {
            this.pageNumber = 1
          }

          if (data.previous) {
            this.previous = true;
            this.previousUrl = data.previous
          }

          if (data.next) {
            this.next = true;
            this.nextUrl = data.next
          }

          if (this.next || this.previous) {
            this.showPagination = true
          }

          // array of characters from get
          this.characters = data.results
        })
      }
    },
    beforeMount(){
      const planetsUrl = 'https://swapi.co/api/planets'

      // run main function on load
      this.get_characters(planetsUrl)
    },
  }

</script>
