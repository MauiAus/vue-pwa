<template>
    <div class="profile">
        <!-- Search bar-->
        <div class="search-box">
            <a class="search-btn" href="#"><i class="fas fa-search fa-lg"></i></a>
            <input class="search-txt" type="text" name="" placeholder="Search">
            <a class="caret-down-btn" href="#"><i class="fas fa-caret-down fa-lg"></i></a>
        </div>
        <!--Profile info-->
        <div class="profile-info">
            <div class="left-pic">
                <img src="../assets/img/Profpic.jpg" /> 
            </div>
            <div class="right">
                <h1>Juan Dela Cruz</h1>
                <h2>@juandelacruz</h2>
                <p> Hi! I'm a 3rd grader from section-A. I hope my study sets can help you! </p>
                <a>34 following </a> 
                <b>301 followers </b>
            </div>
        </div>
        <!--Navigation-->
        <div class="navigation">
            <div class="nav-link">
                <a href="#">Study Sets</a>
            </div>
            <div class="nav-link">
                <a href="#">Saved</a>
            </div>
        </div>
        <!--Study set cards-->
        <div class="study-set-cards">
            <div class="card" id="algebra">
                <div id="upper">
                    <div id="course">
                        <a>Biology</a>
                        <a>Chapter 1 - 2</a>
                    </div>
                    <div id="bookmark">
                        <a href ="#"><i class="far fa-bookmark fa-2x"></i></a>
                    </div>
                </div>
                <div id="lower">
                    <h2>@juandelacruz</h2>
                    <p>This study set also contains answer keys from the previous exam. You're welcome!</p>
                    <div id="react-btns">
                        <div id="react">
                            <a href="#">1.1k<i class="fas fa-heart"></i></a>
                        </div>
                        <div id="react">
                            <a href="#">87<i class="fas fa-comment"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" id="biology">
                <div id="upper">
                    <div id="course">
                        <a>Algebra</a>
                        <a>Chapter 1 - 2</a>
                    </div>
                    <div id="bookmark">
                        <a href ="#"><i class="far fa-bookmark fa-2x"></i></a>
                    </div>
                </div>
                <div id="lower">
                    <h2>@juandelacruz</h2>
                    <p>This study set also contains answer keys from the previous exam. You're welcome!</p>
                    <div id="react-btns">
                        <div id="react">
                            <a href="#">4.1k<i class="fas fa-heart"></i></a>
                        </div>
                        <div id="react">
                            <a href="#">34<i class="fas fa-comment"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card" id="grammar">
                 <div id="upper">
                    <div id="course">
                        <a>Chemistry</a>
                        <a>Chapter 1 - 2</a>
                    </div>
                    <div id="bookmark">
                        <a href ="#"><i class="far fa-bookmark fa-2x"></i></a>
                    </div>
                </div>
                <div id="lower">
                    <h2>@juandelacruz</h2>
                    <p>This study set also contains answer keys from the previous exam. You're welcome!</p>
                    <div id="react-btns">
                        <div id="react">
                            <a href="#">1.0k<i class="fas fa-heart"></i></a>
                        </div>
                        <div id="react">
                            <a href="#">41<i class="fas fa-comment"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profile'
}
</script>

<style lang="scss" scoped>

.profile {
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
/*Profile info styles*/
.profile-info{
    display: flex;
    margin-top: 5%;
    margin-left: 15%;
    margin-right: 15%;
}

.profile-info .left-pic {
        float: left;
        position: relative;
        width: 30%;
        height: 100%;
}

.profile-info .left-pic img{
        border: 5px solid white;
        left: 20%;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        bottom: 0;
}

.profile-info .right{
    margin-left: 5%;
}

.profile-info .right h1{
    margin-top: 0%;
    margin-bottom: 0%;
    font-size: 24px;
    color: #404040;
}

.profile-info .right h2{
    margin-top: 0%;
    font-size: 20px;
    font-weight: 400;
    color: #404040;
}

.profile-info .right p{
    color: #404040;
}

.profile-info .right a{
    font-size: 20px;
    font-weight: 400;
    color: #404040;
}

.profile-info .right b{
    margin-left: 4%;
    font-size: 20px;
    font-weight: 400;
    color: #404040;
}

/*Navigation styles*/
.navigation {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 5%;

    .nav-link  {
        margin-right: 20px;
        border-bottom: 4px solid transparent;

        a {
            color: #afaeb3;
        }

        &:hover {
            color: #404040;
            border-color: #52c3a5;
            transition: border-color 0.4s ease-in;
        }
    }
}

/*Study set cards style*/
.study-set-cards {
    margin-top: 2%;

    .card {
        display: inline-block;
        min-height: 1vh * 40;
        border-radius: 15px;
    }
    #upper {
        margin-top: 0%;
        display: flex;
        justify-content: space-between;
        padding: 12px 16px 2px;
    }
    #course a{
        display: block;
        font-size: 16px;
        color: #80c3c2;
    }
    #bookmark a{
        color: #80c3c2;
    }
    #bookmark:hover a{
        color: #7ed8d7;
    }
    #lower{
        position: relative;
        height: 290px;
        border-radius: 15px;
        background: #eef0ef;
        margin: 14px;
        h2{
            padding-top: 12px;
            margin: 12px;
            font-weight: 500;
            font-size: 16px;
            color: #404040;
        }
        p {
            text-align: justify;
            margin: 12px;
            font: 16px;
            color: #404040;
        }
        a {
            border-bottom: 0%;
        }

        #react-btns {
            display: flex;
            position: absolute;
            bottom: 0;
            right: 0;
        }

        #react {
            margin: 5px;

            a {
                color: #404040;
            }

            .fas { 
                color: #80c3c2;
                margin: 0px 5px;
            }

            .fa-heart:hover {
                transition: color 0.3s ease-in-out;
                color: rgb(211, 78, 78);
            }
        }
    }
    #algebra {
        background: white;
    }
    #biology { 
        background: white;
    }
    #grammar { 
        background: white;
    }
}

@media (max-width: 768px) {
    .study-set-cards .card {
        width: 100%;
        margin: 15px 0;
    }
}

@media (min-width: 769px) {
    .study-set-cards .card {
        width: 30%;
        margin: (100% - (30% * 3)) / 6;
    }
}
</style>