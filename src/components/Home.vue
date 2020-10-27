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
        <div class="classes">
            <div class="class" id="algebra">
            </div>
            <div class="class" id="grammar">
            </div>
            <div class="class" id="biology">
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
            max-width: 100%;
            max-height: 100%;
            position: absolute;
            bottom: 0;
        }
    }
}

.classes {
    // calculate space between cards according to their width
    $card-width: 30%;
    $card-spacing: (100% - ($card_width * 3)) / 6;

    .class {
        display: inline-block;
        width: 30%;
        margin: $card-spacing;
        min-height: 1vh * 55;
        border-radius: 15px;
    }

    #algebra { background-color: #f47c61; }
    #grammar { background-color: #3b72c4; }
    #biology { background-color: #fdc648; }
}

</style>