<template>
  <div id="app">
    <button
        class="btn btn_fixed"
        @click="setShowModal"
    >Rate Us</button>
    <transition name="component-fade" mode="out-in">
      <Modal v-if="showModal" />
    </transition>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">@import "./style";</style>