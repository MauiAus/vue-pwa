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
                            <div v-on:click="returnType(subj.course)">
                                <div id="cardBox">
                                    <div id="inBox">
                                        <i class="fas fa-book"></i>
                                    </div>
                                </div>
                                <div id="infoBox">
                                <p id="cBox">{{subj.course}}</p>
                                <p id="dBox">{{subj.desc}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="graph">
                <div v-if="sciSel">
                    <h3>Your test scores in SCI - 1</h3>
                    <ve-bar 
                        :data="scienceData" 
                        height="350px" 
                        width="500px"
                        >
                    </ve-bar>
                </div>
                <div v-if="geoSel">
                    <h3>Your test scores in GEO - 1</h3>
                    <ve-bar 
                        :data="GeoData" 
                        height="350px" 
                        width="500px"
                        >
                    </ve-bar>
                </div>
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
            studchartData: {
                columns: ['subject', 'Average Percentage of Student Scores'],
                rows: [
                    {'subject': 'English 3', 'Average Percentage of Scores': 70 },
                    {'subject': 'Algebra 2', 'Average Percentage of Scores': 80 },
                    {'subject': 'Arts 1', 'Average Percentage of Scores': 85 },
                    {'subject': 'Science 1', 'Average Percentage of Scores': 75 },
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
            studentData:{
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
            GeoData:{
                columns: ['Test', 'Score Percentage'],
                rows: [
                    {'Test': 'Quiz 1', 'Score Percentage': 75},
                    {'Test': 'Quiz 2', 'Score Percentage': 65},
                    {'Test': 'Quiz 3', 'Score Percentage': 90},
                    {'Test': 'Seatwork 1', 'Score Percentage': 90},
                    {'Test': 'Seatwork 2', 'Score Percentage': 85},
                    {'Test': 'Homework 1', 'Score Percentage': 60},
                    {'Test': 'Homework2 ', 'Score Percentage': 100}
                ]
            },
            subjectsList:[
                {course:"GEO-1",desc:"Geology: Mother Earth"},
                {course:"SCI-1",desc:"Science: The Fundamentals"},
                {course:"ARTS-1",desc:"Arts: Filipino Paintings"},
                {course:"ALG-2",desc:"Math: Intermediate Algebra"},
                {course:"ENG-3",desc:"Communication Fundamentals"},
            ],
            studentList:[
                {course:"Juan Two",desc:"GEO-1"},
                {course:"Juan Three",desc:"GEO-1"},
                {course:"Juan Four",desc:"GEO-1"},
                {course:"Juan Five",desc:"GEO-1"},
                {course:"Juan Six",desc:"GEO-1"},
            ],
            sciSel:true,
            geoSel:false,
        }
    },
    methods:{
        selSci(){
            this.sciSel=true;
            this.geoSel=false;
        },
        selGeo(){
            this.sciSel=false;
            this.geoSel=true;
        },
        returnType(val){
            if(val == "GEO-1"){
                this.selGeo();
            }
            if(val == "SCI-1"){
                this.selSci();
            }
        }
    },
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
            &:hover {
                background-color: #eef0ef;
            }
        }
        #cardBox{
            #inBox{
                i{
                    float:left;
                    background-color: #b9e8d4;
                    font-size: 300%;
                    padding: 5%;
                    margin: auto 1.5%;
                    border-radius: 10%;
                    color: #fbf9fa;
                }
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