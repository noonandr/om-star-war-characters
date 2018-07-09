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
      <tr v-for="character in characters" :key="character.name">
        <td>
          {{ character.name }}
        </td>
        <td>
          {{ character.climate }}
        </td>
        <td>
          {{ character.diameter }}
        </td>
        <td>
          {{ character.gravity }}
        </td>
        <td>
          {{ character.orbital_period }}
        </td>
        <td>
          {{ character.population }}
        </td>
      </tr>
    </tbody>
  </table>

</div>
</template>


<script>

export default {
  name: 'CharactersTable',
  props: {
    characters: Array
  }
}

</script>


<style scoped lang="scss">



</style>
