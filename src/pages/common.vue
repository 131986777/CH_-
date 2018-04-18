<template>
    <div>
        <button @click="goto_login()" style="margin-bottom:20px">跳转到登录页</button>
        <plug-header></plug-header>
        <ul>
            <li><router-link to="/index/home">首页</router-link></li>
            <li><router-link to="/index/land">土地</router-link></li>
        </ul>
        <keep-alive>
            <router-view ></router-view>
        </keep-alive>
        <plug-footer></plug-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import plug_header from 'components/header/header.vue';
    import plug_footer from 'components/footer/footer.vue';

    export default {
        data () {
            return {
                test: ''
            }
        },
        methods:{
            goto_login(){
                this.$router.push({ path: '/login' });
            }
        },
        components: {
            'plug-header': plug_header,
            'plug-footer': plug_footer
        }
    };
</script>

<style lang="css">

</style>

