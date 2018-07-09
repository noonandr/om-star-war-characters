<template>
  <div class="om-planets">
    <h1>Star Wars Planets</h1>

    <input type="text" v-model="search" v-on:input="searchForPlanet" placeholder="Search for planets"/>

    <PlanetsTable v-bind:planets="planets"/>

    <div class="pagination" v-if="showPagination">
      <button v-if="previousUrl" v-on:click="get_planets(previousUrl)">Previous</button>
      Page {{pageNumber}} of {{totalPages}}
      <button v-if="nextUrl" v-on:click="get_planets(nextUrl)">Next</button>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  import PlanetsTable from '@/components/PlanetsTable.vue'

  export default {
    name: 'app',
    components: {
      PlanetsTable
    },
    data () {
      return {
        planets: [],
        previousUrl: false,
        nextUrl: false,
        pageNumber: false,
        totalPages: false,
        showPagination: false,
        search: []
      }
    },
    methods: {
      get_planets: function (url) {

        return axios(url, {
          method: 'GET'
        }).then(response => {

          this.showPagination = false
          const resultsPerPage = 10

          // data from the query
          let data = response.data

          // total number of pages in result
          this.totalPages = Math.ceil(data.count/resultsPerPage)

          // pagination
          if (data.previous) {
            this.previous = true;
            this.previousUrl = data.previous
          } else {
            this.previous = false
          }

          if (data.next) {
            this.next = true;
            this.nextUrl = data.next
          } else {
            this.next = false
          }

          if (this.next) {
            this.pageNumber = this.nextUrl.match(/page=([^&]*)/)[1] -1;
          } else if (data.count === 0) {
            this.pageNumber = 1
          }

          if ((this.next && data.count) || (this.previous && data.count)) {
            this.showPagination = true
          }

          // array of planets from response
          this.planets = data.results
        })
      },
      searchForPlanet: function () {
        const baseUrl = 'https://swapi.co/api/planets/?search='
        let searchUrl = baseUrl + this.search

        this.get_planets(searchUrl)
      }
    },
    beforeMount(){
      const planetsUrl = 'https://swapi.co/api/planets'

      // run main function on load
      this.get_planets(planetsUrl)
    },
  }

</script>
