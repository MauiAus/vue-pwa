<template>
    
    <div class="home">
        <!-- Search bar-->
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

        <!--Your classes and more-->
        <div class="more-classes">
            <div id="your-classes">
                Your Classes
            </div>
            <a class="more-classes-btn" href="#">
                More
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!--Classes cards-->
        <div class = "classes">
            <div class ="A1">
                <div class = "upper-texts-1">
                    <div class = "section-1">
                        <h2>A2</h2>
                    </div>
                    <div class = "course-1">
                        <a>MATH-4</a>
                        <a>Algebra</a>
                    </div>
                </div>
                <p>You have accomplished 80% of this module. Keep up the good work!</p>
            </div>
            <div class ="A2">
                <div class = "upper-texts-2">
                    <div class = "section-2">
                        <h2>A2</h2>
                    </div>
                    <div class = "course-2">
                        <a>ENG-3</a>
                        <a>Grammar</a>
                    </div>
                </div>
                <p>You have accomplished 50% of this module. Good job!</p>
            </div>
            <div class ="A3">
                 <div class = "upper-texts-3">
                    <div class = "section-3">
                        <h2>A1</h2>
                    </div>
                    <div class = "course-3">
                        <a>SCI-3</a>
                        <a>Biology</a>
                    </div>
                </div>
                <p>You have accomplished 27% of this module. Continue learning!</p>
            </div>
        </div>

        <!--Your materials and more-->
        <div class="more-materials">
            <div id="your-materials">
                Your Materials
            </div>
            <a class="more-materials-btn" href="#">
                More
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!--Material cards-->
        <div class = "materials">
            <div class ="B1">
                <div class = "upper-texts-4">
                    <div class = "section-4">
                        <h2>MR</h2>
                    </div>
                    <div class = "course-4">
                        <a>MATH-4</a>
                        <a>Reviewer</a>
                    </div>
                </div>
            </div>
            <div class ="B2">
                <div class = "upper-texts-5">
                    <div class = "section-5">
                        <h2>SR</h2>
                    </div>
                    <div class = "course-5">
                        <a>SCI-3</a>
                        <a>Reviewer</a>
                    </div>
                </div>
            </div>
            <div class ="B3">
                 <div class = "upper-texts-6">
                    <div class = "section-6">
                        <h2>EA</h2>
                    </div>
                    <div class = "course-6">
                        <a>ENG-5</a>
                        <a>Assessment</a>
                    </div>
                </div>
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

/*Your classes and more styles*/
.more-classes {
    margin-top: 2%;
    display: flex;
    color: #404040;
}

.more-classes-btn{
    color: #404040;
    margin-left: 700px;
}

.more-classes-btn:hover{
    color: #52c3a5;
}

/*Class cards style*/
.classes{
    display: flex;
    margin-top: 1%;
    margin-left: 20px;
    margin-right: 20px;
    $card-width: 30%;
    $card-spacing: (100% - ($card_width * 3)) / 6;
}

.A1 {
    width:35%;
    min-height: 1vh * 55;
    border-radius: 15px;
    background: #f47c61;
    margin-right: 20px;

    .upper-texts-1 {
        display: flex;
        .section-1 {
            margin-top: 10%;
            margin-left: 10%;
            margin-right: 5%;
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background: #f28d77;
            h2 {
                text-align: center;
                font-weight: 500;
                color: white;
            }
        }
        .course-1 {
            margin-top: 15%;
            a {
                display: block;
                color: white;  
            }
        }
    }

    p {
        color: white;
        margin-top: 200px;
        margin-left: 10%;
        margin-right: 10%;
        text-align: justify;
        text-justify: inter-word;
    }
}

.A1:hover {
    background: #fc7d60;
    transition: 0.2s;
}

.A2 {
    width:35%;
    min-height: 1vh * 55;
    border-radius: 15px;
    background: #3b72c4;
    margin-right: 20px;

    .upper-texts-2 {
        display: flex;
        .section-2 {
            margin-top: 10%;
            margin-left: 10%;
            margin-right: 5%;
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background: #4f84d4;
            h2 {
                text-align: center;
                font-weight: 500;
                color: white;
            }
        }
        .course-2 {
            margin-top: 15%;
            a {
                display: block;
                color: white;  
            }
        }
    }

    p {
        color: white;
        margin-top: 200px;
        margin-left: 10%;
        margin-right: 10%;
        text-align: justify;
        text-justify: inter-word;
    }
}

.A2:hover {
    background: #3f79d0;
    transition: 0.2s;
}

.A3 {
    width:35%;
    min-height: 1vh * 55;
    border-radius: 15px;
    background: #fdc648;

    .upper-texts-3 {
        display: flex;
        .section-3 {
            margin-top: 10%;
            margin-left: 10%;
            margin-right: 5%;
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background: #fad06c;
            h2 {
                text-align: center;
                font-weight: 500;
                color: white;
            }
        }
        .course-3 {
            margin-top: 15%;
            a {
                display: block;
                color: white;  
            }
        }
    }

    p {
        color: white;
        margin-top: 200px;
        margin-left: 10%;
        margin-right: 10%;
        text-align: justify;
        text-justify: inter-word;
    }
}

.A3:hover {
    background: #fece61;
    transition: 0.2s;
}

/*Your materials and more styles*/
.more-materials {
    margin-top: 2%;
    display: flex;
    color: #404040;
}

.more-materials-btn{
    color: #404040;
    margin-left: 686px;
}

.more-materials-btn:hover{
    color: #52c3a5;
}

/*Materials cards style*/
.materials{
    display: flex;
    margin-top: 1%;
    margin-left: 20px;
    margin-right: 20px;
    $card-width: 30%;
    $card-spacing: (100% - ($card_width * 3)) / 6;
}

.B1 {
    width:35%;
    min-height: 1vh * 55;
    border-radius: 15px;
    background: #53bd5b;
    margin-right: 20px;

    .upper-texts-4 {
        display: flex;
        .section-4 {
            margin-top: 10%;
            margin-left: 10%;
            margin-right: 5%;
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background: #62d367;
            h2 {
                text-align: center;
                font-weight: 500;
                color: white;
            }
        }
        .course-4 {
            margin-top: 15%;
            a {
                display: block;
                color: white;  
            }
        }
    }
}

.B1:hover {
    background: #5aca62;
    transition: 0.2s;
}

.B2 {
    width:35%;
    min-height: 1vh * 55;
    border-radius: 15px;
    background: #ca5254;
    margin-right: 20px;

    .upper-texts-5 {
        display: flex;
        .section-5 {
            margin-top: 10%;
            margin-left: 10%;
            margin-right: 5%;
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background: #e06061;
            h2 {
                text-align: center;
                font-weight: 500;
                color: white;
            }
        }
        .course-5 {
            margin-top: 15%;
            a {
                display: block;
                color: white;  
            }
        }
    }
}

.B2:hover {
    background: #d7595b;
    transition: 0.2s;
}

.B3 {
    width:35%;
    min-height: 1vh * 55;
    border-radius: 15px;
    background: #af52c6;

    .upper-texts-6 {
        display: flex;
        .section-6 {
            margin-top: 10%;
            margin-left: 10%;
            margin-right: 5%;
            width: 70px;
            height: 70px;
            border-radius: 10px;
            background: #c35ddc;
            h2 {
                text-align: center;
                font-weight: 500;
                color: white;
            }
        }
        .course-6 {
            margin-top: 15%;
            a {
                display: block;
                color: white;  
            }
        }
    }
}

.B3:hover {
    background: #b95ed0;
    transition: 0.2s;
}

</style>