<template>
<div>
    <Button type="primary">Primary</Button>
</div>
</template>

<script>
import {
    Button
} from 'iview'
export default {
    data() {
        return {}
    },
    components: {
        Button
    },
    mounted() {
        this.test()
    },
    methods: {
        // 测试一下
        test() {
            var that=this;
           that
                    .$http("post", that.$store.state.baseUrl + "api/Task/Apply", {})
                    .then(function (res) {
                        if (res.data.code != "00") {
                           
                        } else {
                            
                        }
                    });
        }
    }
}
</script>

<style scoped>

</style>
