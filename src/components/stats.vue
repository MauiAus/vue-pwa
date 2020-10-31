<template>
    <div class="tracker-title">
        <div id="tracker-box">
            <div id="left">
                <p>Track Your Progress!</p>
            </div>
            <div id="right">
                <img src="../assets/img/progress-icon.png"/>
            </div>
        </div>
        <div class="overview">
            <p>Overview</p>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="aveBar">
            <ve-bar :data="chartData"></ve-bar>
            <p>Based on the data given, you should work on Science 1. Go to the library to find study materials or create your own study set.</p>
        </div>
        <div class="cards">
            <h1>Subjects</h1>
            <br/>
            <br/>
            <div class ="card" id="divisions">
                <div id="upper">
                    <div id="section"><h2>GEO</h2></div>
                    <div id="course">
                        <a>GEO - 1</a>
                        <a>Geology: Mother Earth</a>
                    </div>
                </div>
                <div id="upper">
                    <div id="section"><h2>SCI</h2></div>
                    <div id="course">
                        <a>SCI-1</a>
                        <a>Science: The Fundamentals</a>
                    </div>
                </div>
                <div id="upper">
                    <div id="section"><h2>ART</h2></div>
                    <div id="course">
                        <a>ARTS - 1</a>
                        <a>Arts: Filipino Paintings</a>
                    </div>
                </div>
                <div id="upper">
                    <div id="section"><h2>MTH</h2></div>
                    <div id="course">
                        <a>ALG - 2</a>
                        <a>Math: Intermediate Algebra</a>
                    </div>
                </div>
                <div id="upper">
                    <div id="section"><h2>ENG</h2></div>
                    <div id="course">
                        <a>ENG - 3</a>
                        <a>Communication Fundamentals</a>
                    </div>
                </div>
            </div>
            <div class="graph">
                    <h3>Your test scores in SCI - 1</h3>
                    <ve-bar 
                        :data="scienceData" 
                        height="500px" 
                        width="725px"
                        >
                    </ve-bar>
            </div>
            <br/>
            <br/>

            <p>Based on the data given, you should work on Homework 1. Go to the library to find study materials or create your own study set.</p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'stats',
    data() {
        return {
            chartData: {
                columns: ['subject', 'Average Percentage of Scores'],
                rows: [
                    {'subject': 'English 3', 'Average Percentage of Scores': 84 },
                    {'subject': 'Algebra 2', 'Average Percentage of Scores': 79 },
                    {'subject': 'Arts 1', 'Average Percentage of Scores': 87 },
                    {'subject': 'Science 1', 'Average Percentage of Scores': 70 },
                    {'subject': 'Geology 1', 'Average Percentage of Scores': 90 }
                ]
            },

            scienceData:{
                columns: ['Test', 'Score Percentage'],
                rows: [
                    {'Test': 'Quiz 1', 'Score Percentage': 69},
                    {'Test': 'Quiz 2', 'Score Percentage': 80},
                    {'Test': 'Quiz 3', 'Score Percentage': 65},
                    {'Test': 'Seatwork 1', 'Score Percentage': 74},
                    {'Test': 'Seatwork 2', 'Score Percentage': 69},
                    {'Test': 'Homework 1', 'Score Percentage': 57},
                    {'Test': 'Homework2 ', 'Score Percentage': 76}
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tracker-title {
    padding: 2%
}
#tracker-box {
    background-color: #b9e8d4;
    height: 5vw;
    min-height: 100%;
    width: 57.5vw;
    border-radius: 12px;

    #left {
        float: left;
        width: 80%;
        p{
            margin: 1vh;
            color: #52c3a5;
            font-size: 3vw;
            font-weight: 700;
            text-align: center;
        }

    }

    #right {
        float: right;
        position: relative;
        width: 20%;
        height: 100%;

        img {
            right: 20%;
            max-width:100%;
            max-height: 100%;
            position: relative;
            bottom: 0;
        }
    }
}

.overview {
    p{
        margin: 1vh;
        color: #52c3a5;
        font-size: 1.5vw;
        font-weight: 700;
        text-align: left;
        position: absolute;
        width: 100%;
    }
}

.aveBar{
    p{
        color: #e48186
    }
}
.cards {
    // calculate space between cards according to width
    $card-width: 30%;
    $card-spacing: (100% - ($card-width * 3)) / 6;
    h1{
        margin: 1vh;
        color: #52c3a5;
        font-size: 1.25vw;
        font-weight: 700;
        text-align: left;
        position: absolute;
        width: 100%;
    }

    .graph{
        float: right;
        h3 {
            color: #52c3a5;
        }

    }
    p{
        color: #e48186
    }

    .card {
        display: inline-block;
        margin: $card-spacing;
        width: 30%;
        min-height: 1vh * 52;
        border-radius: 15px;

        #upper {
            display: flex;

            #section {
                margin: 7% 2% 0% 5%;
                width: 70px;
                height: 70px;
                border-radius:15px;

                h2 {
                    text-align: center;
                    font-weight: 500;
                    color: rgb(255, 255, 255);
                }
            }

            #course {
                margin-top: 9%;

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


}

    

#divisions {
        background-color: #c3e2dd;

        #section { background: #c7c7bb }    
           

    }


</style>