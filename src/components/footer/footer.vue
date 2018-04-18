<template>
    <div class="footer">
        {{text}}
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                text: '我是footer'
            }
        }
    };
</script>

<style lang="css">
    .footer {
        width:100%;
        height:40px;
        line-height:40px;
        background:rgba(0,0,0,.8);
        color:#fff;
    }
</style>