<template>
  <GridLayout class="btn-quiz" @loaded="onButtonLoaded" columns="auto,*" rows="*">
    <Label row="0" col="0" class="label-index" :text="'#' + item.id"/>
    <Label row="0" col="1" class="label-text" :text="item.name"/>
  </GridLayout>
</template>

<script>
export default {
  props: {
    item: Object,
    onLoadedEvent: Function
  },
  mounted() {},
  data() {
    return {
      //hasBeenPressed: false
    };
  },
  methods: {
    onButtonLoaded() {
      //this.hasBeenPressed = false;
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
</style>
