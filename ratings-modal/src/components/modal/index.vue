<template>
  <div id="modal">
    <div class="modal-shape" v-on:click="$parent.showModal = false"></div>
    <div class="modal text-center">
        <span
          class="modal__close modal-icon modal-icon_close"
          v-on:click="$parent.showModal = false"
        ></span>
        <div class="modal__heading">
          <h2 class="modal__title">How did we do?</h2>
          <p class="modal__description">Please let us know how your food delievery was. It will really help us to keep improving our service!</p>
        </div>
        <div class="modal__content">
          <Stars
            v-for="(star,index) in starsContent"
            v-bind:title="star.title"
            v-bind:checked="star.checked"
            v-bind:index="index"
            v-bind:key="star.id"
          ></Stars>
        </div>
        <div class="modal__footer">
          <button
            class="btn"
            v-on:click="submit"
          >{{ sendData }}</button>
        </div>
      </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">@import "./style";</style>