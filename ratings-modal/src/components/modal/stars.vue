<template>
  <div class="stars">
    <div class="stars__title">{{ $props.title }}</div>
    <div class="stars__items">
      <span class="stars__item" v-for="num in starsNumber" v-bind:key="num">
        <label
           class="modal-icon"
          v-bind:class="[$props.checked !== 0 && $props.checked >= num ? 'modal-icon_rate' : 'modal-icon_norate']"
        >
          <input
             type="checkbox"
             v-bind:value="num"
             v-bind:checked="num === $props.checked"
             v-on:change="$parent.addStar($props.index, num)"
          />
        </label>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'checked', 'index'],
    data() {
        return {
          starsNumber: 5
        }
    }
}
</script>
