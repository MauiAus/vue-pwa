<template>
    <div class="library">

        <!--this is the div for the searchbar-->
        <div id="searchbar">
            <!--saerchbar icon-->
            <div id="icon">
                <img src="../assets/img/Welcome.png" />
            </div>
            <!--ssearchbar text-->
            <div id="text">
                <p>Search</p>
            </div>
        </div>

        <!--this are the divs for the content-->
        <div class="shelf">
            <div class="upper">
                <p class="title">SCI-4</p>
                <p class="more">More -></p>
            </div>
            <div class="lower">

                <!--this is a card-->
                <div class="card">
                    <div id="courseAcro">
                        <p>CH1</p>
                    </div>
                    <div id="info">
                        <p id="courseCode">CHM - 1</p>
                        <p id="description">Chemistry</p>
                    </div>
                    <div id="add">
                        <p>PLUS</p>
                    </div>
                </div>
                <div class="card">
                    <div id="courseAcro">
                        <p>CH1</p>
                    </div>
                    <div id="info">
                        <p id="courseCode">CHM - 1</p>
                        <p id="description">Chemistry</p>
                    </div>
                    <div id="add">
                        <p>PLUS</p>
                    </div>
                </div>
                <div class="card">
                    <div id="courseAcro">
                        <p>CH1</p>
                    </div>
                    <div id="info">
                        <p id="courseCode">CHM - 1</p>
                        <p id="description">Chemistry</p>
                    </div>
                    <div id="add">
                        <p>PLUS</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'library'
}
</script>

<style lang="scss" scoped>

.library {
    padding: 3.75%;
}

#searchbar {
    background-color: #ffffff;
    height: 5vw;
    border-radius: 12px;

    #icon {
        float: left;
        position: relative;
        width: 10%;
        height: 100%;

        img {
            margin: 10%;
            max-width: 90%;
            max-height: 90%;
            position: absolute;
        }
    }

    #text {
            float: left;
            width: 70%;
            height: 100%;
        
        p {
            margin: 1vw;
            color: #52c3a5;
            font-size: 2vw;
            font-weight: 700;
        }
    }
}

.shelf {
    width: 100%;
    max-height: 100%;
    margin: 0.5vw;
    
    .upper {
        height: 10%;
        margin-bottom: 1px;
        p {
            margin: 0.5%;
            font-size: 100%;
        }
        .title {
            float: left;
        }
        .more {
            float: right;
        }
    }
    .lower {
        // calculate space between cards according to their width
        display: flex;
        flex-direction: row;
        $card-width: 30%;
        $card-spacing: (100% - ($card_width * 3)) / 6;

        .card {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;

            background-color: #fff;
            border-radius: 10px;
            width: $card-width;
            margin: $card-spacing;

            div{
                height: 3.5vw;
                width: 3.5vw;
                margin: 0.5vw;
                border-radius: 5px;
            }

            #courseAcro{
                background-color: red;
                
                p{
                    text-align: center;
                    vertical-align: middle;

                    font-size: 1vw;
                }
            }
            #info{
                flex-grow: 6;

                p{
                    font-family: 'Courier New', Courier, monospace;;
                    font-size: 0.6vw;
                    vertical-align: middle;
                    
                    &#description{
                        color: gray;
                    }
                }
            }
            #add{
                float: right;

                p{
                    font-size: 1vw;
                }
            }
        }
    }

}

</style>