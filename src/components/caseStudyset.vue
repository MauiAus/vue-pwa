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
                <input id="setnameBox" type ="text" placeholder="Enter a title like 'Intro to Biology'" v-model="setName"/>
                <p>TITLE</p>
                <input id="setdescBox" type ="text" placeholder="Add a description..." v-model="setDesc"/>
                <p>DESCRIPTION</p>
            </div>
            <router-link to="/sampleset"><p id="createBox">Create</p></router-link>
        </div>
        <div id="termView">
            <ul>
                <li v-for="set in studySets" :key="set.index">
                    <div v-if="set.toggleG" id="subBox">
                        <ul>
                            <li v-for="sub in subSets" :key="sub.index">
                                <div v-if="sub.toggleM">
                                    <div id="container" @dragover.prevent="dragOver" @dragleave.prevent="dragLeave" @drop.prevent="drop($event)">
                                        <h4>Drag and Drop image here</h4>
                                    </div>
                                </div>
                                <div id="bottomBox">
                                    <div id="leftPart">
                                        <p id="num">{{sub.ind}}</p>
                                        <div id="termBox">
                                            <div v-if="sub.toggleH">
                                            <input id="StermBox" v-if="!sub.ibool" type ="text" placeholder="Enter term" v-model="tempTerm"/>
                                            <input id="StermBox" v-if="sub.ibool" type ="text" placeholder="Enter term" v-model="sub.term"/>
                                            <p>TITLE</p>
                                            </div>
                                            <div v-if="sub.toggleD">
                                            <input id="defBox" v-if="!sub.ibool" type ="text" placeholder="Add definition" v-model="tempDef"/>
                                            <input id="defBox" v-if="sub.ibool" type ="text" placeholder="Add definition" v-model="sub.desc"/>
                                            <p>DEFINITION</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="rightPart">
                                        <div id="iconSide">
                                            <ul>
                                                <li>
                                                <i class="fas fa-heading" v-on:click="togglesubHead(sub.ind)"></i>
                                                <i class="fas fa-quote-right" v-on:click="togglesubDef(sub.ind)"></i>
                                                </li>
                                                <li>
                                                <i class="fas fa-photo-video" id="media" v-on:click="togglesubMedia(sub.ind)"></i>
                                                <i class="fas fa-layer-group" v-on:click="togglesubGroup(sub.ind)"></i>
                                                </li>
                                                <li>
                                                <i v-if="subSets.length > 1" class="fas fa-trash" v-on:click="removesubSet()"></i>
                                                <i class="far fa-plus-square" v-if="subSets.length > 1" v-on:click="addsubSet()"></i>
                                                <i class="far fa-plus-square" v-if="subSets.length <= 1"  v-bind:style="{ padding: '5% 5% 5% 33%'}" v-on:click="addsubSet()"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div id="subiconBox">
                            <i class="fas fa-layer-group" v-on:click="toggleGroup(set.ind)"></i>
                            <i v-if="subSets.length > 1" class="fas fa-trash" v-on:click="removeSet()"></i>
                            <i class="far fa-plus-square" v-if="subSets.length > 1" v-on:click="addSet()"></i>
                            <i class="far fa-plus-square" v-if="subSets.length <= 1" v-on:click="addsubSet()"></i>
                        </div>
                    </div>
                    <div v-if="!set.toggleG">
                        <div v-if="set.toggleM">
                            <div id="container" @dragover.prevent="dragOver" @dragleave.prevent="dragLeave" @drop.prevent="drop($event)">
                                <h4>Drag and Drop image here</h4>
                            </div>
                        </div>
                        <div id="bottomBox">
                            <div id="leftPart">
                                <p id="num">{{set.ind}}</p>
                                <div id="termBox">
                                    <div v-if="set.toggleH">
                                    <input id="StermBox" v-if="!set.ibool" type ="text" placeholder="Enter term" v-model="tempTerm"/>
                                    <input id="StermBox" v-if="set.ibool" type ="text" placeholder="Enter term" v-model="set.term"/>
                                    <p>TITLE</p>
                                    </div>
                                    <div v-if="set.toggleD">
                                    <input id="defBox" v-if="!set.ibool" type ="text" placeholder="Add definition" v-model="tempDef"/>
                                    <input id="defBox" v-if="set.ibool" type ="text" placeholder="Add definition" v-model="set.desc"/>
                                    <p>DEFINITION</p>
                                    </div>
                                </div>
                            </div>
                            <div id="rightPart">
                                <div id="iconSide">
                                    <ul>
                                        <li>
                                        <i class="fas fa-heading" v-on:click="toggleHead(set.ind)"></i>
                                        <i class="fas fa-quote-right" v-on:click="toggleDef(set.ind)"></i>
                                        </li>
                                        <li>
                                        <i class="fas fa-photo-video" id="media" v-on:click="toggleMedia(set.ind)"></i>
                                        <i class="fas fa-layer-group" v-on:click="toggleGroup(set.ind)"></i>
                                        </li>
                                        <li>
                                        <i v-if="studySets.length > 1" class="fas fa-trash" v-on:click="removeSet()"></i>
                                        <i class="far fa-plus-square" v-if="studySets.length > 1" v-on:click="addSet()"></i>
                                        <i class="far fa-plus-square" v-if="studySets.length <= 1"  v-bind:style="{ padding: '5% 5% 5% 33%'}" v-on:click="addSet()"></i>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
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
            setName:"",
            setDesc:"",
            tempTerm:"",
            tempDef:"",
            tempH:"",
            tempD:"",
            tempG:"",
            tempM:"",
            trueColor: '#111',
            delFlag:false,
            studySets:[
                {term:"",desc:"",ibool:false,ind:1,toggleH:true,toggleD:true,toggleG:false,toggleM:false},
            ],
            subSets:[
                {term:"",desc:"",ibool:false,ind:1,toggleH:true,toggleD:true,toggleG:false,toggleM:false},
            ],
        }
    },
    methods:{
        addSet(){
            var i = this.studySets.length;
            this.tempH=this.studySets[i-1].toggleH;
            this.tempD=this.studySets[i-1].toggleD;
            this.tempM=this.studySets[i-1].toggleM;
            this.tempG=this.studySets[i-1].toggleG;
            if (!this.delFlag){
                this.studySets[this.studySets.length-1] = {term:this.tempTerm,desc:this.tempDef,ibool:true,ind:i,toggleH:this.tempH,toggleD:this.tempD,toggleG:this.tempG,toggleM:this.tempM};
                this.tempTerm = "";
                this.tempDef = "";
                this.studySets.push({term:this.tempTerm,desc:this.tempDef,ibool:false,ind:i+1,toggleH:true,toggleD:true,toggleG:false,toggleM:false});
            }
            else{
                this.tempTerm = "";
                this.tempDef = "";
                this.studySets.push({term:this.tempTerm,desc:this.tempDef,ibool:false,ind:i+1,toggleH:true,toggleD:true,toggleG:false,toggleM:false});
                this.delFlag = false;
            }
            for(var j = 0; j < i; j++){
                console.log(this.studySets[j]);
            }
        },
        removeSet(){
            this.studySets.pop();
            this.delFlag = true;
            for(var j = 0; j < this.studySets.length; j++){
                console.log(this.studySets[j]);
            }
        },
        toggleHead(i){
            this.studySets[i-1].toggleH = !this.studySets[i-1].toggleH;
        },
        toggleDef(i){
            this.studySets[i-1].toggleD = !this.studySets[i-1].toggleD;
        },
        toggleMedia(i){
            this.studySets[i-1].toggleM = !this.studySets[i-1].toggleM;
        },
        toggleGroup(i){
            this.studySets[i-1].toggleG = !this.studySets[i-1].toggleG;
        },
        addsubSet(){
            var i = this.subSets.length;
            this.tempH=this.subSets[i-1].toggleH;
            this.tempD=this.subSets[i-1].toggleD;
            this.tempM=this.subSets[i-1].toggleM;
            this.tempG=this.subSets[i-1].toggleG;
            if (!this.delFlag){
                this.subSets[this.subSets.length-1] = {term:this.tempTerm,desc:this.tempDef,ibool:true,ind:i,toggleH:this.tempH,toggleD:this.tempD,toggleG:this.tempG,toggleM:this.tempM};
                this.tempTerm = "";
                this.tempDef = "";
                this.subSets.push({term:this.tempTerm,desc:this.tempDef,ibool:false,ind:i+1,toggleH:true,toggleD:true,toggleG:false,toggleM:false});
            }
            else{
                this.tempTerm = "";
                this.tempDef = "";
                this.subSets.push({term:this.tempTerm,desc:this.tempDef,ibool:false,ind:i+1,toggleH:true,toggleD:true,toggleG:false,toggleM:false});
                this.delFlag = false;
            }
            for(var j = 0; j < i; j++){
                console.log(this.subSets[j]);
            }
        },
        removesubSet(){
            this.subSets.pop();
            this.delFlag = true;
            for(var j = 0; j < this.subSets.length; j++){
                console.log(this.subSets[j]);
            }
        },
        togglesubHead(i){
            this.subSets[i-1].toggleH = !this.subSets[i-1].toggleH;
        },
        togglesubDef(i){
            this.subSets[i-1].toggleD = !this.subSets[i-1].toggleD;
        },
        togglesubMedia(i){
            this.subSets[i-1].toggleM = !this.subSets[i-1].toggleM;
        },
        togglesubGroup(i){
            this.subSets[i-1].toggleG = !this.subSets[i-1].toggleG;
        },
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
            color: #111;
        }
        
        #setdescBox{
            background: transparent;
            border: 0 none #ccc;
            border-bottom: 2px solid #6a6c6b;
            border-radius: 0;
            border-width: 5px;
            font-size: 15px;
            color: #111;
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

    #bottomBox{
        display:flex;
    }

    #subBox{
        #subiconBox{
            display:flex;
            margin-left:80%;
            i{
                padding:5%;
                font-size: 25px;
                margin: 5% 5% 5%;
                width:100%;
                &:hover {
                color:  #b9e8d4;
                }
            }       
        }
    }

    #leftPart{
        width:85%;
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
                color: #111;
                width:90%;
            }
            #defBox{
                background: transparent;
                border: 0 none #ccc;
                border-bottom: 2px solid #6a6c6b;
                border-radius: 0;
                border-width: 5px;
                font-size: 20px;
                color: #111;
                width:90%;
            }
            p{
                margin-top: 0;
            }
        }
    }
    #rightPart{
        width:15%;
        #iconSide{
            display: grid;
            margin-top: 0%;
            width:100%;
            border-left: 2px solid #84ccc9;
            border-radius: 0;
            border-width: 5px;
            li{
                display:flex;
                margin: 5% 5% 5%;
                text-align: justify;
            }
            i{
                padding:5%;
                font-size: 25px;
                margin: 5% 5% 5%;
                width:100%;
                &:hover {
                color:  #b9e8d4;
                }
            }
            #media{
                font-size: 22px;
            }
        }
    }
}

#container{
    h4{
        text-align: center;
        font-family: sans-serif;
        padding: 10%;
        background-color: #b9e8d4;
        border-radius: 10px;
        color: white;
    }
}



</style>