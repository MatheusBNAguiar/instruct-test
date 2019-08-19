<template>
  <Card class="col-md-6 col-xs-12">
    {{user.name}}
    <br />
    {{user.username}}
    <br />
    {{user.phone}}
  </Card>
</template>

<script>
import Card from "../Card/Card";

export default {
  components: { Card },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
