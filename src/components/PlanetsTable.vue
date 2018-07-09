<template>
  <table align="center" style="width:100%">
    <thead>
      <tr>
        <th>Name</th>
        <th>Climate</th>
        <th>Diameter</th>
        <th>Gravity</th>
        <th>Orbital Period</th>
        <th>Population</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="planet in planets" :key="planet.name">
        <td>
          {{ planet.name }}
        </td>
        <td>
          {{ planet.climate }}
        </td>
        <td>
          {{ planet.diameter }}
        </td>
        <td>
          {{ planet.gravity }}
        </td>
        <td>
          {{ planet.orbital_period }}
        </td>
        <td>
          {{ planet.population }}
        </td>
      </tr>
    </tbody>
  </table>
</template>


<script>

export default {
  name: 'PlanetsTable',
  props: {
    planets: Array
  }
}

</script>


<style scoped lang="scss">



</style>
