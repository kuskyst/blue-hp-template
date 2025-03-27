<template>
  <div class="w-100 pa-0 ma-0">
    <div class="top-image" />
    <div class="bg-mylightblue">
      <line-topic class="pa-16" :en="'What’s ○○××'" :ja="'○○××○○××○○××'" />
      <div class="text-center text-h6 pa-4">
        ○○××○○××○○××○○××<span class="yellow-underline">○○××○○××○○××○○</span>××、<br>
        <span class="yellow-underline">○○××○○××○○</span>××○○××<span class="yellow-underline">○○××○○××○○××○○××</span>○○××。
      </div>
      <v-img class="mt-6" height="240" src="@/assets/images/whats_img.png" />
    </div>
  </div>
</template>

<style>
.top-image {
  width: 100%;
  height: 560px;
  background-repeat: repeat;
  background-image: url("@/assets/images/samplesukashi-illust15.png");
}
.yellow-underline {
  background:  linear-gradient(transparent 60%, #FC9B31 60%);
}
</style>