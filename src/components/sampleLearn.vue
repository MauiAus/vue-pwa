<template>
    <div class="studyset">
    <!--Searchbar-->
    <SearchBar />
    <div id="learnBox">
        <div id="qBox">
            <p v-if="ctr==0">{{questions[0].question}}</p>
            <p v-if="ctr==1">{{questions[1].question}}</p>
            <p v-if="ctr==2">{{questions[2].question}}</p>
            <p v-if="ctr==4">{{questions[2].question}}</p>
            <p v-if="ctr==5">{{questions[3].question}}</p>
            <p v-if="ctr==6">{{questions[1].question}}</p>
        </div>
        <div id="ansBox">
            <ul v-if="ctr<3 || ctr>3 && ctr <7">
                <li v-for="q in questions" :key="q.index">
                    <div id="ablock">
                    <p v-on:click="ctr+=1">{{q.ans}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div id="intervalbox" v-if="ctr==3">
            <p>You got 2 / 3 Right!</p>
            <h1 v-on:click="ctr+=1">Continue</h1>
        </div>
        <div id="intervalbox" v-if="ctr==7">
            <p>You got 3 / 3 Right!</p>
            <h1 v-on:click="ctr+=1">Return to Module</h1>
        </div>
    </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'Sample Test',
    components: {
        SearchBar
    },
    data(){
        return{
            questions:[
                {question:"a substance that behaves like the air around us",ans:"gas"},
                {question:"takes the shape of its container",ans:"liquid"},
                {question:"holds its form and shape",ans:"solid"},
            ],
            ctr:0,
        }
    },
}
</script>

<style lang="scss" scoped>
.studyset {
    padding: 3.75%;
}

#learnBox{
    margin-top:5%;
    padding:5%;
    background-color: #fbf9fa;
    border-radius: 10px;
    box-shadow: 10px 10px #b9e8d4;

    #ansBox{
        ul{
        list-style-type: lower-alpha;
        }
        li{
        &:hover{
            color: #b9e8d4;
        }   
        }
    }

    #intervalbox{
        h1{
                &:hover{
            color: #b9e8d4;
        }   
        }
    }
}


</style>