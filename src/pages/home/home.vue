<template>
    <div class="home">
        首页
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                test: ''
            }
        },
        methods:{
            queryData(){
                /*this.$http.post('http://www.baidu.com', {}, {
                    headers: {

                    },
                    emulateHTTP:true
                }).then(function(res) {
                    // 这里是处理正确的回调
                    console.log(res.data);
                }, function(res) {
                    // 这里是处理错误的回调
                    console.log(res.status);
                });*/
            }
        },
        mounted() {
            this.queryData();
        },
    };
</script>

<style lang="css">

</style>

<!--
<style lang="sass" scoped>
@import 'test.scss';
</style>-->
