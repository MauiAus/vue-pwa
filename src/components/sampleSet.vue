<template>
    <div class="studyset">
    <!--Searchbar-->
    <SearchBar />
    <div class="course">
        <div id="coursetext">
        </div>
    </div>

    <!-- Container -->
    <div id="container">
        <a name = "top"></a>
        <!--Chapter Navigation-->
        <div class = "chapter-nav">
            <div class = "header-left">
                <div id ="box">
                    <h2>Sample Test</h2>
                </div>
            </div>
            <div class = "header-right">
                <p>Sample Description</p>
            </div>
        </div>
        <!-- Chapter Content -->
        <div class = "chapter-container">
            <div id = "chapter-header">
                <a name = "first"></a>
            </div>
            <div class = "chapter-content">
                <h2>BackPack</h2><br>
                <p>Where you can find everything you need for school</p>
                <br>
                <br>
                <h2>Tarsier</h2><br>
                <p>Cute animal</p>
            </div>
            <div id="configureBox">
                <i class="fas fa-rocket"></i>
                <i class="far fa-file-alt"></i>
                <i class="fas fa-glasses"></i>
            </div>
        </div>
        <div id="save">
            <p>Save</p>
        </div>
    </div>
    </div>
       
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    name: 'Sample Set',
    components: {
        SearchBar
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
    margin: 0% 2%;
    background-color: #faf8f9;
    min-height: 40vh;
    border-radius: 12px;
    color: #59c998;

        i{
            float:right;
            padding:5%;
            font-size: 20px;
            &:hover {
                color: #7cc3c5;
            }
        }
    
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

#save{
    right:0;
    padding:2%;
    margin-top: 0;
    p{
    background:white;
    padding:5%;
    border-radius: 10px;
    color:#68c79e;
    font-size: 30px;
    width:10%;
    &:hover{
        background:#f0fdf7;
    }
    }
}

</style>