<template>
  <div class="hello">
    <div v-for="(character, index) in characters" :key="character.id">

      <div class="item">
        <div class="details">
          <div class="country"><span class="label">Planet name: </span><span class="value">{{ character.name }}</span></div>
        </div>
      </div>

    </div>
  </div>

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
