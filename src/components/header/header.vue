<template>
    <div class="header">
        {{text}}
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                text: '我是header'
            }
        }
    };
</script>

<style lang="css">
    .header{
        width:100%;
        height:40px;
        line-height:40px;
        background:#00B355;
        color:#fff;
    }
</style>