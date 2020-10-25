<template>
    <div class="dashboard">
        <!-- Left Sidebar -->
        <div id="left">
            <div id="backpack">
                Backpack
            </div>
            <a id="link" href="#">Home</a>
            <a id="link" href="#">Library</a>
            <a id="link" href="#">Create Study Set</a>
            <a id="link" href="#">Settings</a>
            <a id="logout" href="#">
                Logout
            </a>
        </div>
        <!-- Main Content -->
        <div id="mid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <!-- Right Sidebar -->
        <div id="right">
            Right
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
    background-color: #eef0ef;
}

/* Right (Sidebar) */
#right {
    @extend %sidebar;
    width: 20%;
    right: 0;
    background-color: #fbf9fa;
}
</style>