<template>
    <div id="body">
        <SearchBar/>
        <div id="newBox">
            <p id="headbox">This Week</p>
                <ul>
                    <li v-for="reminder in reminders" :key="reminder.index">
                    <div id="notificationView" v-if="reminder.recent">
                        <i class="far fa-envelope"></i>
                        <div id="contents"> 
                            <p id="name">{{reminder.course}} - {{reminder.notification}}</p>
                            <p id="date">{{reminder.date}}</p>
                        </div>
                    </div>
                    </li>
                </ul>
        </div>
        <div id="monthBox">
            <p id="headbox">This month</p>
                <ul>
                    <li v-for="reminder in reminders" :key="reminder.index">
                    <div id="notificationView" v-if="!reminder.recent">
                        <i class="far fa-envelope"></i>
                        <div id="contents"> 
                            <p id="name">{{reminder.course}} - {{reminder.notification}}</p>
                            <p id="date">{{reminder.date}}</p>
                        </div>
                    </div>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
    name: 'Reminders',
    components:{
        SearchBar
    },
    data(){
        return{
            reminders:[
              {course:"Biology", notification:"Send homework", date:"28 Dec 2020, Friday", recent:true},
              {course:"Algebra", notification:"Send homework", date:"28 Dec 2020, Friday", recent:true},
              {course:"Grammar", notification:"Send homework", date:"28 Dec 2020, Friday", recent:true},
              {course:"Chemistry", notification:"Submit Project", date:"31 Nov 2020, Friday", recent:false},
              {course:"History", notification:"Do Seatwork", date:"28 Dec 2020, Friday", recent:false},
              {course:"Physical Education", notification:"Do exercise", date:"28 Dec 2020, Friday", recent:false},
              {course:"Arts and Crafts", notification:"Send homework", date:"28 Dec 2020, Friday", recent:false},
              {course:"Drafting and Design", notification:"Exam", date:"28 Dec 2020, Friday", recent:false},
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
#body{
    padding: 5%;
}

#headbox{
    margin-top: 5%;
    margin-left: 3%;
    margin-right: 3%;
    border-bottom: 5px solid #b9e8d4;
    color: #848384;
}

#newBox{
    ul{
        list-style: none;
        padding: 0;
    }
    li{
        padding-left: 5%;
        margin: 3%;
        border-radius: 10px;
        display:flex;
        background-color: white;
        &:hover {
            background-color:#b9e8d4;
        }
    }
    #notificationView{
        width:100%;
        overflow: auto;
        i{
            float:left;
            background-color: #b9e8d4;
            font-size: 200%;
            padding: 3.5%;
            margin: 5% 1.5% 5%;
            border-radius: 10%;
            color: #fbf9fa;
        }
        #contents{
            display:inline-block;
            #name{
                margin-top:6%;
                font-size: 30px;
                color: #848384;
                font-weight: bold;
            }
            #date{
                margin-top: 0;
                color: #a5a5a5;
            }
        }
    }
}

#monthBox{
    headBox{
        margin-top:0%;
    }
    ul{
        list-style: none;
        padding: 0;
    }
    li{
        padding-left: 5%;
        margin: 3%;
        border-radius: 10px;
        display:flex;
        background-color: white;
        &:hover {
            background-color:#b9e8d4;
        }
    }
    #notificationView{
        width:100%;
        overflow: auto;
        i{
            float:left;
            background-color: #b9e8d4;
            font-size: 200%;
            padding: 3.5%;
            margin: 5% 1.5% 5%;
            border-radius: 10%;
            color: #fbf9fa;
        }
        #contents{
            display:inline-block;
            #name{
                margin-top:6%;
                font-size: 30px;
                color: #848384;
                font-weight: bold;
            }
            #date{
                margin-top: 0;
                color: #a5a5a5;
            }
        }
    }
}

</style>