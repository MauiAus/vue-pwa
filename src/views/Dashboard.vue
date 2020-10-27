<template>
    <div class="dashboard">
        <!-- Left Sidebar -->
        <div id="left">
            <div id="backpack">
                Backpack
            </div>
            <router-link id="link" to="/home">Home</router-link>
            <router-link id="link" to="/library">Library</router-link>
            <router-link id="link" to="/createStudyset">Create Study Set</router-link>
            <router-link id="link" to="/studySet">Study Set</router-link>
            <router-link id="link" to="/stats">Statistics</router-link>
            <a id="logout" href="#">
                Logout
            </a>
        </div>

        <!-- Main Content -->
        <div id="mid">
            <router-view />
        </div>

        <!-- Right Sidebar -->
        <div id="right">
            <div id="profileView">
                <div id="profileStats">
                <router-link to="/profile"><img id="profileLink" src="../assets/img/Profpic.jpg" /></router-link>
                <router-link id="name" to="/profile"><p>{{name}}</p></router-link>
                    <!--
                    TODO: I recommend if certain details can be simplified with icons instead.

                    This is a snippet of PR #4.
                    <ul>
                        <li><router-link id="name" to="/profile">Joshua Ron Garcia</router-link></li>
                        <li id="bio">Biography: <p>I am a Mapuan</p> </li>
                        <li>Status: Single</li>
                        <li id="reminder">Reminders</li>  
                    </ul>
                    -->
                    <p id="bio">{{status}}</p>
                </div>
            </div>
            <div id="reminderView">
                <p>Reminders</p><i class="far fa-bell"></i>
            </div>
            <div id="notificationView">
                <ul>
                    <li v-for="reminder in reminders" :key="reminder.index">
                    <i class="far fa-envelope"></i>
                    <p id="name">{{reminder.course}} - {{reminder.notification}}</p>
                    <p id="date">{{reminder.date}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Dashboard',
    data(){
        return{
            name:"Juan Dela Cruz",
            status:"Student",
            reminders:[
              {course:"Biology", notification:"Send homework", date:"28 Dec 2020, Friday"},
              {course:"Algebra", notification:"Send homework", date:"28 Dec 2020, Friday"},
              {course:"Grammar", notification:"Send homework", date:"28 Dec 2020, Friday"},
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
/* Parent */
.dashboard {
    min-height: 720px;
    position: relative;
}

/* Sidebar */
%sidebar {
    // the left and right sidebar will share these properties
    // we will simply call this selector via @extend
    position: fixed;
    text-decoration: none;
    height: 100%;
    z-index: 1;
    top: 0;
}

/* Left (Sidebar) */
#left {
    @extend %sidebar;
    width: 20%;
    left: 0;
    background-color: #fbf9fa;

    /* Trademark */
    #backpack {
        padding: 10% 0%;
        font-size: 4vh;
        font-weight: 700;
        text-align: center;
        color: #84ccc9;
    }

    /* Sidebar Links */
    #link {
        margin: 5% 20%;
        display: block;
        font-size: 16px;
        color: #a5a5a5;

        &:hover {
            color: #84ccc9;
        }
    }

    /* Logout segment */
    #logout {
        position: absolute;
        display: block;
        bottom: 0;
        color: #fff;
        background-color: #ff8080;
        padding: 5% 0%;
        width: 100%;
        text-align: center;

        &:hover {
            background-color: #ff5c5c;
        }
    }
}

/* Mid */
#mid {
    margin: 0% 20%;
    width: 60%;
    height: 100%;
    min-height: 720px;
    background-color: #eef0ef;
}

/* Right (Sidebar) */
#right {
    @extend %sidebar;
    width: 20%;
    right: 0;
    background: #fbf9fa;
    border-radius: 10px;


    #profileView {
        background-color: #eef0ef;
        display: flex;
        margin: 5% 10% 5%;
        border-radius: 5%;

        #profileLink {
            float: left;
            max-width: 35%;
            padding: 5%;
            border-radius: 30%;
        }
        #name {
            text-align: left;
            color: #111;
            font-weight: bold;
        }

        #profileStats {
            text-align: left;
            color: #a5a5a5;
        }

    }

    #reminderView{
        p{
            padding-left: 10%;
            float:left;
        }
        i{
            float:right;
            padding-right: 10%;
            padding-top: 10%;
        }
    }

    #notificationView{
        float:left;
        padding-top:2%;

        ul{
            list-style: none;
            padding: 0;
        }
        li{
            padding-left: 1.3em;
        }
        i{
            float:left;
            background-color: #b9e8d4;
            font-size: 200%;
            padding: 5%;
            border-radius: 10%;
        }
        #name{
            width: 100%;
        }
    }
}

</style>