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
        <div id="topBox">
            <div id = "gradeBox">
                    <p id= "overview">Dashboard</p>
                <div id="aveBar">
                    <ve-bar 
                        :data="chartData" 
                        height="350px" 
                        width="750px"
                        >
                    </ve-bar>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class ="card">
                <div id="upper">
                    <ul>
                        <li v-for="subj in subjectsList" :key="subj.index">
                            <div id="cardBox">
                            <p id="inBox">{{subj.course.slice(0,-2)}}</p>
                            </div>
                            <div id="infoBox">
                            <p id="cBox">{{subj.course}}</p>
                            <p id="dBox">{{subj.desc}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="graph">
                    <h3>Your test scores in SCI - 1</h3>
                    <ve-bar 
                        :data="scienceData" 
                        height="350px" 
                        width="500px"
                        >
                    </ve-bar>
            </div>
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
            },
            subjectsList:[
                {course:"GEO-1",desc:"Geology: Mother Earth"},
                {course:"SCI-1",desc:"Science: The Fundamentals"},
                {course:"ARTS-1",desc:"Arts: Filipino Paintings"},
                {course:"ALG-2",desc:"Math: Intermediate Algebra"},
                {course:"ENG-3",desc:"Communication Fundamentals"},
            ],
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

#topBox{
    #gradeBox{
        #overview {
            border: 0 none #ccc;
            border-bottom: 2px solid #84ccc9;
            border-radius: 0;
            border-width: 5px;
            font-size: 20px;
            color: #111;
        }
    }
    #aveBar{
        display: flex;
        margin-top:0%;
        padding:5%;
        background-color: #fbf9fa;
        border-radius: 10px;
        box-shadow: 10px 10px #b9e8d4;
        p{
            color: #e48186
        }
    }

}
.cards {
    // calculate space between cards according to width
    $card-width: 30%;
    $card-spacing: (100% - ($card-width * 3)) / 6;
    margin-top: 5%;
    padding: 2%;
    background-color: #fbf9fa;
    border-radius: 10px;
    box-shadow: 10px 10px #b9e8d4;
    display: flex;
    h1{
        margin: 1vh;
        color: #ffffff;
        font-size: 1.25vw;
        font-weight: 700;
        text-align: left;
        position: absolute;
        width: 100%;

    }

    .graph{
        margin-left: 5%;
        h3 {
            color: #52c3a5;
        }

    }
    p{
        color: #e48186
    }
    #upper{
        border-right: 2px solid #84ccc9;
        border-radius: 0;
        border-width: 5px;
        color: #111;
        ul{
            list-style: none;
            padding: 0;
        }
        li{
            display: flex;
        }
        #cardBox{
            p{
                text-align: center;
                width: 55px;
                height: 55px;
                background-color: #52c3a5;
                margin: auto;
                font-size: 150%;
                border-radius: 10px;
                color: #fbf9fa;
                padding: 5% 10% 5%;
                margin: 5%;
            }
        }
        #infoBox{
            margin-left: 7%;
            margin-top:0;
            #cBox{
                margin-top:0%;
                font-size: 14px;
                color: #848384;
                font-weight: bold;
            }
            #dBox{
                margin-top:0%;
                color: #a5a5a5;
            }
        }
    }
}

    

#divisions {
    background-color: #c3e2dd;
    #section { background: #c7c7bb }    
}


</style>