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
        <div>
            <ve-bar :data="chartData"></ve-bar>
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
        font-size: 1.25vw;
        font-weight: 700;
        text-align: left;
    }
}
</style>