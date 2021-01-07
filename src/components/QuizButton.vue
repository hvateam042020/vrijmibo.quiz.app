<template>
  <GridLayout class="btn-quiz" @loaded="onButtonLoaded" columns="auto,*" rows="*">
    <Label row="0" col="0" class="label-index" v-bind:class="{ green : isValid, red : (isValid != null && !isValid) }" :text="'#' + id"/>
    <Label row="0" col="1" class="label-text" :text="text"/>
  </GridLayout>
</template>

<script>
export default {
  props: {
    id: String,
    text: String,
    onLoadedEvent: Function,
    isValid: null
  },
  mounted() {},
  data() {
    return {
    };
  },
  methods: {
    onButtonLoaded() {
      if (this.onLoadedEvent != null) this.onLoadedEvent();
    }
  },
  components: {
  }
};
</script>

<style lang="scss"  scoped>
@import "../app.scss";

.btn-quiz {
  border-radius: 5;
  border-width: 0;
  android-elevation: 5;
  height: 50;
  margin-bottom: 10;
  margin-left: 5;
  margin-right: 5;
  background-color: $clr-primary;
}

.label-index {
  border-top-left-radius: 5;
  border-bottom-left-radius: 5;
  background-color: $clr-blue;
  padding: 15 20 15 20;
  color: $clr-primary;
}

.label-text {
  padding: 15 0 15 10;
  color: $clr-text-normal;
}

.red {
  background-color: $clr-red;
}

.green {
  background-color: $clr-green;
}
</style>
