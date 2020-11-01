<template>
    <div class="studyset">
    <!--Searchbar-->
    <SearchBar />
    <div class="course">
        <div id="coursetext">
            SCI-4
        </div>
    </div>

    <!-- Container -->
    <div id="container">
        <a name = "top"></a>
        <!--Chapter Navigation-->
        <div class = "chapter-nav">
            <div class = "header-left">
                <div id ="box">
                    <h2>CH1</h2>
                    <div id = "nav">
                        <tr>
                        <td><a href= "#first">3.1</a></td>
                        <td><a href= "#second">3.2</a></td>
                        <td><a href= "#third">3.3</a></td>
                        <td><a href= "#fourth">3.4</a></td>
                        </tr>
                    </div>
                </div>
            </div>
            <div class = "header-right">
                <p>Introduction to Chemistry</p>
            </div>
        </div>
        <!-- Chapter Content -->
        <div class = "chapter-container">
            <div id = "chapter-header">
                <a name = "first"></a>
                <h2>3.1</h2>
                <p> States of Matter</p>
                <a href = "#top">Back to Top</a>
                <hr>
            </div>
            <div class = "chapter-content">
                <h2>Solids</h2><br>
                <p>A material in solid state holds its form and shape. 
                    That means it doesn’t flow. Solids can be many different colors, 
                    can have different hardness and come in a variety of shapes. 
                    Just because an object is solid doesn’t mean it can’t be squished 
                    or molded — it means that, if left untouched, the material won’t flow.</p>
                <br>
                <br>
                <h2>Liquids</h2><br>
                <p>A liquid takes the shape of its container. That means if you pour it into a bowl, 
                    it will fill the bowl from the lowest points upward and come to rest. 
                    Imagine the difference between placing a large chunk of ice into a bowl v
                    ersus pouring the same amount of water into it. The ice is solid and will keep its 
                    shape, while the water will fill the bowl.</p>
                <br>
                <br>
                <h2>Gasses</h2><br>
                <p>A gas is a substance that behaves like the air around us. Gases also take the shape 
                    of their container, but they are much lighter than liquids. That means they 
                    will expand to fill any container they are placed in. If you poured water into 
                    a glass fish bowl, the water would fill the container from the bottom up. If 
                    you did the same with gas, it would expand to fill every part of the glass fish 
                    bowl, not just the bottom.</p>
                <div id="comments">
                    <div id="configureBox">
                        <i class="far fa-comments"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class = "chapter-container">
            <div id = "chapter-header">
                <a name = "second"></a>
                <h2>3.2</h2>
                <p> Video Lesson - Properties of Matter</p>
                <a href = "#top">Back to Top</a>
                <hr>
            </div>
            <div class = "chapter-content">
                <p> Watch the video lesson about the Properties of Matter </p>
                <h1 align = "center">
                <video  width="320" height="240" align = "center" poster = "../assets/img/thumbnail.jpg" controls>
                </video>
                </h1>
            </div>
            <div id="comments">
                    <div id="configureBox">
                        <i class="far fa-comments"></i>
                    </div>
                </div>
        </div>
        <div class = "chapter-container">
            <div id = "chapter-header">
                <a name = "third"></a>
                <h2>3.3</h2>
                <p> Mini Game</p>
                <a href = "#top">Back to Top</a>
                <hr>
            </div>
            <div class = "chapter-content">
                <p> Let's play and learn at the same time! </p>
                <h1 align = "center">
                    <img src = "../assets/img/game.jpg"><br>
                    <a href = "#top" class = "button">Start Game!</a>
                </h1>   
            </div>
            <div id="comments">
                    <div id="configureBox">
                        <i class="far fa-comments"></i>
                    </div>
                </div>
        </div>
        <div class = "chapter-container">
            <div id = "chapter-header">
                <a name = "fourth"></a>
                <h2>3.4</h2>
                <p> Short Quiz</p>
                <a href = "#top">Back to Top</a>
                <hr>
            </div>
            <div class = "chapter-content">
                Choose the best answer:
                <br>
                <test>
                <ul>
                <li>
                <p>A car is an example of: </p>
                <tr>
                    <td><input type="radio">A.  Solid</td>
                    <td><input type="radio">B.  Liquid</td>
                </tr>
                <tr>
                    <td><input type="radio">C.  Gas</td>
                    <td><input type="radio">D.  IDK</td>
                </tr>
                </li>
                <li>
                <p>An apple is an example of: </p>
                <tr>
                    <td><input type="radio">A.  Solid</td>
                    <td><input type="radio">B.  Liquid</td>
                </tr>
                <tr>
                    <td><input type="radio">C.  Gas</td>
                    <td><input type="radio">D.  IDK</td>
                </tr>
                </li>
                <li>
                <p>A juice is an example of: </p>
                <tr>
                    <td><input type="radio">A.  Solid</td>
                    <td><input type="radio">B.  Liquid</td>
                </tr>
                <tr>
                    <td><input type="radio">C.  Gas</td>
                    <td><input type="radio">D.  IDK</td>
                </tr>
                </li>
                </ul>
                <h1 align = "center"><a href = "#top" class = "button">Submit answer</a></h1>
                </test>
                <test />
            </div>
            <div id="comments">
                    <div id="configureBox">
                        <i class="far fa-comments"></i>
                    </div>
                </div>
        </div>
    </div>
    </div>
       
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'studySet',
    components: {
        SearchBar
    },
    data(){
        return{
            commentBool:false,
        }
    }
}
</script>

<style lang="scss" scoped>
.studyset {
    padding: 3.75%;
}

/* container */
#container {
    margin-top: 0%;
    background-color: #7cc3c5;
    min-height: 100vh;
    border-radius: 12px;
    padding-bottom: 5%;
}

/* course title */
.course {
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #3f3f3f;
    
    #coursetext {
        flex-grow: 6;
    }
}

/* chapter navigation */
.chapter-nav {
    $space: 30%;
    $nav-spacing: (100% - ($space * 3)) / 6;

    h2{
        text-align: center;
        color: #b9e8d4;
        font-weight: 500;
        margin: 5% 4%;
    }
    
    .header-left {
        display: inline-block;
        margin: $nav-spacing;
        width: 32%;
        min-height: 1vh * 5;

        #box {
            display: flex;
            justify-content: space-between;
            background:  #faf8f9;
            border-radius: 15px;

            #nav {
                height: 60px;
                width: 100%;
                border-radius: 10px;
                background: #b9e8d4;
                
                td {
                    padding-top: 14px;
                    padding-left: 16px;
                    text-align: center;
                }
                a {
                    text-align: center;
                    color:  #faf8f9;
                    margin-top: 12px;
                    font-weight: 500;
                    font-size: 20px;
                }
                a:hover {
                 color: #7cc3c5;
                }
            }
        }

    }
    .header-right{
        float: right;
        margin: $nav-spacing;
        width: 60%;
        min-height: 1vh * 5;
        p {
            text-align: right;
            color: #faf8f9;
            font-weight: 400;
            margin-top: 2%;
            font-size: 30px;
        }
    }
}

/* chapter containers */
.chapter-container{
    margin: 3% 2%;
    background-color: #faf8f9;
    min-height: 50vh;
    border-radius: 12px;
    color: #59c998;
    padding:5%;
    
        #chapter-header{
            margin: 2%;
            padding-top: 2%;

            h2{
                display: inline;
                color: #68c79e;
                font-weight: 400;
            }
            p {
                display: inline;
                color:  #5f5f5f;
                font-weight: 300;
                font-size: 25px;
            }
            a{
                color:  #5f5f5f;
                float: right;
            }
            
        }

        .chapter-content{
            margin: 0% 2%;
            padding-bottom: 5%;
            padding-top: 2%;

            h2{
                display: inline;
                color: #5f5f5f;
                font-weight: 500;
            }
            p{
                display: inline;
                color:  #5f5f5f;
                font-weight: 300;
                font-size: 18px;
            }
            .button {
                background-color: #b9e8d4;
                border: none;
                color: #5f5f5f;
                padding: 15px 32px;
                text-align: center;
                font-size: 16px;
                border-radius: 10px;
            }
            
            td{
                color: #5f5f5f;
                padding-right: 40px;
                font-weight: 300;
            }
        }

}

#comments{
    border-top: 2px solid  #7cc3c5;
    border-radius: 0;
    border-width: 5px;
    display: flex;
    #configureBox{
        margin-left:90%;
        i{
            padding:5%;
            font-size: 30px;
            &:hover {
                color: #7cc3c5;
            }
        }
    }
}

</style>