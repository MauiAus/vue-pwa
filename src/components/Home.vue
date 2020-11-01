<template>
    
    <div class="home">
        <!-- Search bar-->
        <SearchBar />

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
            <a id="more-classes-btn" href="#">
                More
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!--Classes cards-->
        <div class="cards">
            <div class="card" id="math">
                <div id="upper">
                    <div id="section"><h2>A2</h2></div>
                    <div id="course">
                        <a>MATH-4</a>
                        <a>Algebra</a>
                    </div>
                </div>
                <p>You have accomplished 80% of this module. Keep up the good work!</p>
            </div>
            <div class="card" id="grammar">
                <div id="upper">
                    <div id="section"><h2>A2</h2></div>
                    <div id="course">
                        <a>MATH-4</a>
                        <a>Algebra</a>
                    </div>
                </div>
                <p>You have accomplished 80% of this module. Keep up the good work!</p>
            </div>
            <div class="card" id="biology">
                <div id="upper">
                    <div id="section"><h2>A2</h2></div>
                    <div id="course">
                        <a>MATH-4</a>
                        <a>Algebra</a>
                    </div>
                </div>
                <p>You have accomplished 80% of this module. Keep up the good work!</p>
            </div>
        </div>

        <!--Your materials and more-->
        <div class="more-materials">
            <div id="your-materials">
                Your Materials
            </div>
            <a id="more-materials-btn" href="#">
                More
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!--Material cards-->
        <div class="cards">
            <div class ="card" id="math-4-reviewer">
                <div id="upper">
                    <div id="section"><h2>MR</h2></div>
                    <div id="course">
                        <a>MATH-4</a>
                        <a>Reviewer</a>
                    </div>
                </div>
            </div>
            <div class ="card" id="sci-3-reviewer">
                <div id="upper">
                    <div id="section"><h2>SR</h2></div>
                    <div id="course">
                        <a>SCI-3</a>
                        <a>Reviewer</a>
                    </div>
                </div>
            </div>
            <div class="card" id="eng-5-assessment">
                <div id="upper">
                    <div id="section"><h2>EA</h2></div>
                    <div id="course">
                        <a>ENG-5</a>
                        <a>Assessment</a>
                    </div>
                </div>
            </div>
        </div>

        <!--Recommended for you and more-->
        <div class="recommended-for-you">
            <div id="recommended">
                Recommended for you
            </div>
            <a id="recommended-btn" href="#">
                More
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!--Recommended for you cards-->
        <div class="cards">
            <div class ="card" id="literature">
                <div id="upper">
                    <div id="section"><h2>LI</h2></div>
                    <div id="course">
                        <a>LIT-7</a>
                        <a>English Literature</a>
                    </div>
                </div>
            </div>
            <div class ="card" id="geology">
                <div id="upper">
                    <div id="section"><h2>SG</h2></div>
                    <div id="course">
                        <a>SCI-6</a>
                        <a>Geology</a>
                    </div>
                </div>
            </div>
            <div class="card" id="history">
                <div id="upper">
                    <div id="section"><h2>SH</h2></div>
                    <div id="course">
                        <a>SOC-5</a>
                        <a>History</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
    name: 'Home',
    components: {
        SearchBar
    }
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
    flex-direction: row;
    flex-wrap: nowrap;
    color: #404040;
    
    #your-classes {
        flex-grow: 6;
    }

    #more-classes-btn {
        justify-content: right;
        color: #404040;

        &:hover {
            color: #52c3a5;        
        }
    }
}

/* Card Style: Class cards and Material cards */
.cards {
    // calculate space between cards according to width
    $card-width: 30%;
    $card-spacing: (100% - ($card-width * 3)) / 6;

    .card {
        display: inline-block;
        margin: $card-spacing;
        width: 30%;
        min-height: 1vh * 55;
        border-radius: 15px;

        #upper {
            display: flex;

            #section {
                margin: 15% 5% 0 10%;
                width: 70px;
                height: 70px;
                border-radius: 10px;

                h2 {
                    text-align: center;
                    font-weight: 500;
                    color: white;
                }
            }

            #course {
                margin-top: 15%;

                a {
                    display: block;
                    color: white;
                }
            }
        }

        p {
            color: white;
            margin: 200px 10% 0 10%;
            text-align: justify;
            text-justify: inter-word;
        }
    }

    &:hover {
        transition: 0.2s;
    }

    /*
        This segment can still be refactored.
        Try playing with CSS filters, then use Sass to simplify it.
    */
    #math { 
        background: #f47c61;

        #section { background: #f28d77 }
        
        &:hover {
            background: #fc7d60;
            transition: 0.2s;
        }
    }

    #grammar { 
        background: #3b72c4;

        #section { background: #4f84d4 }

        &:hover {
            background: #3f79d0;
            transition: 0.2s;
        }
    }

    #biology { 
        background: #fdc648;

        #section { background: #fad06c }

        &:hover {
            background: #fece61;
            transition: 0.2s;
        }
    }

    #math-4-reviewer {
        background: #53bd5b;

        #section { background: #62d367 }

        &:hover {
            background: #5aca62;
            transition: 0.2s;
        }
    }

    #sci-3-reviewer {
        background: #ca5254;

        #section { background: #e06061 }

        &:hover {
            background: #d7595b;
            transition: 0.2s;
        }
    }

    #eng-5-assessment {
        background: #af52c6;

        #section { background: #c35ddc }

        &:hover {
            background: #b95ed0;
            transition: 0.2s;
        }
    }

    #literature {
        background: #dc76c0;

        #section { background: #e882cc }

        &:hover {
            background: #e775c8;
            transition: 0.2s;
        }
    }

    #geology {
        background: #57c4c2;

        #section { background: #64d0ce }

        &:hover {
            background: #57cbc9;
            transition: 0.2s;
        }
    }

    #history {
        background: #fdc648;

        #section { background: #fad06c }

        &:hover {
            background: #fece61;
            transition: 0.2s;
        }
    }
}

/*Your materials and more styles*/
.more-materials {
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #404040;

    #your-materials {
        flex-grow: 6;
    }

    #more-materials-btn {
        justify-content: right;
        color: #404040;

        &:hover {
            color: #52c3a5;
        }
    }
}

/*Recommended for you and more styles*/
.recommended-for-you {
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #404040;

    #recommended {
        flex-grow: 6;
    }

    #recommended-btn {
        justify-content: right;
        color: #404040;

        &:hover {
            color: #52c3a5;
        }
    }
}

</style>