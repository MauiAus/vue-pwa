<template>
    <div class="dashboard">
        <!-- Left Sidebar -->
        <div id="left">
            <div id="backpack">
                Backpack
            </div>
            <router-link id="link" to="/home">Home</router-link>
            <router-link id="link" to="/library">Library</router-link>
            <router-link id="link" to="/create">Create Study Set</router-link>
            <router-link id="link" to="/settings">Settings</router-link>
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
            <router-link to="/profile"><img id="profileLink" src="../assets/img/Profpic.jpg" /> </router-link>
            <div id="profileStats">
                <ul>
                    <li><router-link id="name" to="/profile">Joshua Ron Garcia</router-link></li>
                    <li id="bio">Biography: <p>I am a Mapuan</p> </li>
                    <li>Status: Single</li>
                    <li id="reminder">Reminders</li>  
                </ul>   
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Dashboard'
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
    background-color: #fbf9fa;

    #profileLink {
        width: 200px;
        height: 200px;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        border-radius: 100px;
        margin: 15% 30%;
    }

    #profileStats {
        margin: 80% 10%;
        display: block;
        color: black;
        text-align: center;  
        position: relative;
        font-size: 20px;
    }

    ul {
        list-style-type: none;
        
        li {
            margin: 10%;
            p {
                font-size: 15px;
            }
        }

        #bio {
            padding-bottom: 30%;
        }

       #name {
            padding: 20px
        }
    }


}
</style>