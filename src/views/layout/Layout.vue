<template>
  <div>
      <menu></menu>
      <app-main></app-main>
  </div>
</template>

<script>
import Menu from './Menu'
import AppMain from './AppMain'

export default {
  components: { Menu ,AppMain},
}
</script>