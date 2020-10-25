<template>
    <div class="home">
        <div id="welcome-box">
            <div id="left">
                <p>Welcome Back Juan!</p>
            </div>
            <div id="right">
                <img src="../assets/img/Welcome.png" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss" scoped>

.home {
    padding: 3.75%;
}

#welcome-box {
    background-color: #b9e8d4;
    height: 14vw;
    border-radius: 12px;

    #left {
        float: left;
        width: 70%;
        
        p {
            margin: 8vh;
            color: #52c3a5;
            font-size: 2.75vw;
            font-weight: 700;
        }
    }

    #right {
        float: right;
        position: relative;
        width: 30%;
        height: 100%;

        img {
            right: 20%;
            max-height: 100%;
            position: absolute;
            bottom: 0;
        }
    }
}

</style>