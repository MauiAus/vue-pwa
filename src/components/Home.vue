<template>
    
    <div class="home">
        <!-- Search bar -->
        <div class="search-box">
            <a class="search-btn" href="#">
                <i class="fas fa-search fa-lg"></i>
            </a>
            <input class="search-txt" type="text" name="" placeholder="Search">
            <a class="caret-down-btn" href="#">
                <i class="fas fa-caret-down fa-lg"></i>
            </a>
        </div>

        <!-- Home content -->
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

/*Search bar styles*/
.search-box{
    margin-top: 0%;
    margin-bottom: 2%;
    left: 50%;
    background: #e1e3e2;
    height: 24px;
    border-radius: 40px;
    padding: 10px;
}

.search-box:hover{
    background: #b9e8d4;
}

.search-btn{
    color: #52c3a5;
    margin-left: 10px;
    margin-right: 20px;
}

.search-btn:hover {
    color: white;
}

.search-txt{
    border: none;
    background: none;
    outline: none;
    padding: 0;
    color: #404040;
    font-size: 16px;
    transition: 0.4s;
    line-height: 20px;
    width: 650px;
}

.caret-down-btn{
    color: #52c3a5;
    float: right;
    margin-right: 10px;
}

.caret-down-btn:hover {
    color: white;
}

/*Home content styles*/
#welcome-box {
    margin-top: 0%;
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