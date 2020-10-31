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

/*Responsive Profie.vue 101*/
@media (min-width: 1700px) {
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

@media (max-width: 1699px) {
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

@media (max-width: 1699px) {
    .study-set-cards .card {
        width: 100%;
        margin: 15px 0;
    }
}

@media (min-width: 1700px) {
    .study-set-cards .card {
        width: 30%;
        margin: (100% - (30% * 3)) / 6;
    }
}

</style>