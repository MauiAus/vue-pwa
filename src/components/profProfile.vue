<template>
    <div class="profile">
        <!-- Search bar-->
        <SearchBar />

        <!--Profile info-->
        <div class="profile-info">
            <div class="left-pic">
                <img src="../assets/img/Profpic.jpg" /> 
            </div>
            <div class="right">
                <h1>Juan Dela Cruz</h1>
                <h2>@juandelacruz</h2>
                <p> Hi! I'm a gradeschool teacher teaching Sciences and Math. I hope you enjoy being in one of my classes. </p>
                <a>34 following </a> 
                <b>301 followers </b>
            </div>
        </div>
        <!--Navigation-->
        <div class="navigation">
            <div class="nav-link">
                <a href="#">Classes</a>
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
                        <a>Science 3</a>
                        <a>Animals and Plants</a>
                    </div>
                    <div id="bookmark">
                        <a href ="#"><i class="far fa-bookmark fa-2x"></i></a>
                    </div>
                </div>
                <div id="lower">
                    <h2>@juandelacruz</h2>
                    <p>This subject is about the different animals and plants around the world, as well as the ecosystem.</p>
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
                        <a>Math 1</a>
                        <a>Basic Arithmetic 1</a>
                    </div>
                    <div id="bookmark">
                        <a href ="#"><i class="far fa-bookmark fa-2x"></i></a>
                    </div>
                </div>
                <div id="lower">
                    <h2>@juandelacruz</h2>
                    <p>This subject is about the practical use of addition and subtraction, as well as basic measurements.</p>
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
                        <a>Math 4</a>
                        <a>Advanced Arithmetic 1</a>
                    </div>
                    <div id="bookmark">
                        <a href ="#"><i class="far fa-bookmark fa-2x"></i></a>
                    </div>
                </div>
                <div id="lower">
                    <h2>@juandelacruz</h2>
                    <p>This subject is about the introduction of fraction arithmetic and basic geometry.</p>
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
import SearchBar from '@/components/SearchBar.vue'

export default {
    name: 'profile',
    components: {
        SearchBar
    }
}
</script>

<style lang="scss" scoped>

.profile {
    padding: 3.75%;
}

/*Profile info styles*/
.profile-info {
    margin: 5% 0;

    .left-pic img {
        border: 5px solid white;
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }

    .right {
        color: #404040;

        h1 {
            margin: 0;
            font-size: 24px
        }

        h2 {
            margin-top: 0%;
            font-size: 20px;
            font-weight: 400;
        }

        a {
            font-size: 20px;
            font-weight: 400;
        }

        b {
            margin-left: 4%;
            font-size: 20px;
            font-weight: 400;
        }
    }
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
            text-align: left;
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

/*Responsive Profie.vue 101*/
@media (min-width:870px) {
    .profile-info {
        display: flex;

        .left-pic {
            width: 40%;
            float: left;
        }

        .left-pic img {
            float: right;
        }

        .right {
            width: 60%;
            float: right;
            margin-left: 5%;
        }
    }
}

@media (max-width:869px) {
    .profile-info {
        display: block;

        .left-pic {
            text-align: center;
        }

        .right {
            text-align: center;
        }
    }

}

@media (max-width: 1049px) {
    .study-set-cards .card {
        width: 100%;
        margin: 15px 0;
    }
}

@media (min-width: 1050px) {
    .study-set-cards .card {
        width: 30%;
        margin: (100% - (30% * 3)) / 6;
    }
}

</style>