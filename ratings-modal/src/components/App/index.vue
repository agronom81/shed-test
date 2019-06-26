<template>
  <div id="app">
    <div class="position-center btn-width">
      <button
          class="btn"
          @click="setShowModal"
      >Rate Us</button>
      <div 
        class="result"
        v-if="result"        
      ><code><pre v-html="syntaxHighlight(result)"></pre></code></div>
      
    </div>
    
    <transition name="component-fade" mode="out-in">
      <Modal v-if="showModal" />
    </transition>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">@import "./style";</style>