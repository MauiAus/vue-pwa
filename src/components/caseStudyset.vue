<template>
    <div id = "mBody">
        <div class="search-box">
            <a class="search-btn" href="#">
                <i class="fas fa-search fa-lg"></i>
            </a>
            <input class="search-txt" type="text" name="" placeholder="Search">
            <a class="caret-down-btn" href="#">
                <i class="fas fa-caret-down fa-lg"></i>
            </a>
        </div>
        <div id="topBox">
            <div id="headerBox">
                <input id="setnameBox" type ="text" :placeholder="setName" v-model="setName"/>
                <p>TITLE</p>
                <input id="setdescBox" type ="text" :placeholder="setDesc" v-model="setDesc"/>
                <p>DESCRIPTION</p>
            </div>
            <p id="createBox">Create</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'caseStudyset',
    data(){
        return{
            setName:"Enter a title like 'Intro to Biology'",
            setDesc:"Add a description...",
        }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
#mBody{
    padding: 3.75%
}
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

#topBox{
    #headerBox{
        margin-top:5%;
        float:left;
        width: 70%;
        display:grid;
        input:focus,
        select:focus,
        textarea:focus,
        button:focus{
            outline:none;
        }
        
        #setnameBox{
            background: transparent;
            border: 0 none #ccc;
            border-bottom: 2px solid #84ccc9;
            border-radius: 0;
            border-width: 5px;
            font-size: 20px;
            color: #a5a5a5;
        }
        
        #setdescBox{
            background: transparent;
            border: 0 none #ccc;
            border-bottom: 2px solid #6a6c6b;
            border-radius: 0;
            border-width: 5px;
            font-size: 15px;
            color: #a5a5a5;
        }
        p{
            margin-top: 0%;
        }

    }
    #createBox{
        float: right;
        margin-top: 10%;
        background-color: #84ccc9;
        padding: 2% 5% 2%;
        border-radius: 10%;
        color: #eef0ef;
        font-weight: bold;
        font-size: 20px;

        &:hover {
        background-color:  #b9e8d4;
        }
    }
}



</style>