<template>
  <div class="om-characters">
    <CharactersTable/>
  </div>
</template>

<script>
import CharactersTable from '@/components/CharactersTable.vue'

export default {
  name: 'home',
  components: {
    CharactersTable
  }
}
</script>
