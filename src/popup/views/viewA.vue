<template>
  <div class="view-a">
    <!-- 我是A页面 -->
    Page A
    <button @click="onGetCustomUa">
      <!-- 获取自定义ua -->
      Get customized customs UA
    </button>
  </div>
</template>

<script>
export default {
  name: 'viewA',
  methods: {
    onGetCustomUa () {
      chrome.runtime.sendMessage({type: 'getCustomUserAgent'}, function(response) {
        alert(JSON.stringify(response))
      })
    }
  }
}
</script>

<style lang="less">
.view-a{
  background-color: cadetblue;
  height: 100%;
  font-size: 60px;
}
</style>