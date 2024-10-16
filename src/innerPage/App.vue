<template>
  <div>
    {{ wel }}
    <div class="videoRef"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wel: 'Welcome innerPage!',
    }
  },
  mounted() {
    var videoObject = {
      container: '.videoRef', //容器的ID或className
      plug: 'flv.js',//设置使用flv插件
      video: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv'
    };
    new window.ckplayer(videoObject)
  }
}
</script>

<style lang="css" scoped>
.videoRef {
  height: 500px;
}
</style>