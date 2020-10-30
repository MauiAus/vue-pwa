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
        <div id="termView">
            <ul>
                <li v-for="set in studySets" :key="set.index">
                    <div id="leftPart">
                        <p id="num">{{set.ind}}</p>
                        <div id="termBox">
                            <input id="StermBox" type ="text" :placeholder="set.index" v-model="tempTerm"/>
                            <p>TITLE</p>
                            <input id="defBox" type ="text" :placeholder="tempDef" v-model="tempDef"/>
                            <p>DEFINITION</p>
                        </div>
                    </div>
                    <div id="rightPart">
                        <div id="iconSide">
                            <i class="fas fa-trash"></i>
                            <i class="far fa-plus-square" v-on:click="addSet('','')"></i>
                        </div>
                    </div>
                </li>
            </ul>
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
            tempTerm:"Enter term",
            tempDef:"Add definition",
            studySets:[
                {term:"",desc:"",ind:1},
            ],
        }
    },
    methods:{
        addSet(nterm,ndesc){
            var i = this.studySets.length;
            this.studySets[this.studySets.length-1] = {term:this.tempTerm,desk:this.tempDef,ind:i};
            this.studySets.push({term:nterm,desc:ndesc,ind:i+1});
        },
        getIndex(){
            return this.studySets.length-1
        }
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
        border-radius: 10px;
        color: #eef0ef;
        font-weight: bold;
        font-size: 20px;

        &:hover {
        background-color:  #b9e8d4;
        }
    }
}

#termView{
    margin-top:30%;
    display: block;
    ul{
        list-style: none;
        padding: 0;
    }

    li{
        background-color: white;
        padding: 4%;
        border-radius: 10px;
        display:grid;
        margin-top: 5%
    }

    #leftPart{
        float:left;
        #num{
            float:left;
            font-weight: bold;
            font-size: 20px;
            margin-top:0%;
            color: #6a6c6b;
        }
        #termBox{
            margin-left: 5%;
            input:focus,
            select:focus,
            textarea:focus,
            button:focus{
            outline:none;
            }

            #StermBox{
                background: transparent;
                border: 0 none #ccc;
                border-bottom: 2px solid  #6a6c6b;
                border-radius: 0;
                border-width: 5px;
                font-size: 20px;
                color: #a5a5a5;
                width:70%;
            }
            #defBox{
                background: transparent;
                border: 0 none #ccc;
                border-bottom: 2px solid #6a6c6b;
                border-radius: 0;
                border-width: 5px;
                font-size: 20px;
                color: #a5a5a5;
                width:70%;
            }
            p{
                margin-top: 0;
            }
        }
    }
    #rightPart{
        float:left;
        display:inline-block;
        margin-left: 80%;
        #iconSide{
            display: flex;
            i{
                margin-left: 0;
                padding:5% 15% 5%;
                font-size: 25px;

                &:hover {
                color:  #b9e8d4;
                }
            }
        }
    }
}



</style>