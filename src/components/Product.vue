<template>
    <div class="flex items-center my-6">
        <img src="/img/drive_icon.png" class="w-12 h-12 mr-4" alt="">
        <div>
            <a href=""><h2 class="text-lime-500 text-lg hover:underline">{{title}}</h2></a>
            <p class=" text-gray-500 text-sm">{{desc}}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
  }
}
</script>