<template>
    <div class="library">

        <!--Searchbar-->
        <SearchBar />

        <!--Course and more-->
        <div class="more">
            <div id="course">
                SCI-4
            </div>
            <a id="more-btn" href="#">
                More
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!--Library cards-->
        <div class = "library-cards">
            <div class = "card">
                <div id ="card-content">
                    <div id = "left">
                        <h2>CH1</h2>
                    </div>
                    <div id = "details">
                        <p>CHM-1</p>
                        <p>Chemistry 1</p>
                    </div>
                    <div id = "open-btn">
                        <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div class = "card">
                <div id ="card-content">
                    <div id = "left">
                        <h2>CH2</h2>
                    </div>
                    <div id = "details">
                        <p>CHM-1</p>
                        <p>Chemistry 1</p>
                    </div>
                    <div id = "open-btn">
                        <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div class = "card">
                <!-- Chapter 3 card, the only link to sam's study set-->
                <router-link to="#">
                    <div id ="card-content">
                        <div id = "left">
                            <h2>CH3</h2>
                        </div>
                        <div id = "details">
                            <p>CHM-1</p>
                            <p>Chemistry 1</p>
                        </div>
                        <div id = "open-btn">
                            <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <!--Course and more-->
        <div class="more">
            <div id="course">
                SCI-4
            </div>
            <a id="more-btn" href="#">
                More
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!--Library cards-->
        <div class = "library-cards">
            <div class = "card">
                <div id ="card-content">
                    <div id = "left">
                        <h2>CH1</h2>
                    </div>
                    <div id = "details">
                        <p>CHM-1</p>
                        <p>Chemistry 1</p>
                    </div>
                    <div id = "open-btn">
                        <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div class = "card">
                <div id ="card-content">
                    <div id = "left">
                        <h2>CH2</h2>
                    </div>
                    <div id = "details">
                        <p>CHM-1</p>
                        <p>Chemistry 1</p>
                    </div>
                    <div id = "open-btn">
                        <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div class = "card">
                <!-- Chapter 3 card, the only link to sam's study set-->
                <router-link to="#">
                    <div id ="card-content">
                        <div id = "left">
                            <h2>CH3</h2>
                        </div>
                        <div id = "details">
                            <p>CHM-1</p>
                            <p>Chemistry 1</p>
                        </div>
                        <div id = "open-btn">
                            <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

            <!--Course and more-->
        <div class="more">
            <div id="course">
                SCI-4
            </div>
            <a id="more-btn" href="#">
                More
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!--Library cards-->
        <div class = "library-cards">
            <div class = "card">
                <div id ="card-content">
                    <div id = "left">
                        <h2>CH1</h2>
                    </div>
                    <div id = "details">
                        <p>CHM-1</p>
                        <p>Chemistry 1</p>
                    </div>
                    <div id = "open-btn">
                        <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div class = "card">
                <div id ="card-content">
                    <div id = "left">
                        <h2>CH2</h2>
                    </div>
                    <div id = "details">
                        <p>CHM-1</p>
                        <p>Chemistry 1</p>
                    </div>
                    <div id = "open-btn">
                        <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div class = "card">
                <!-- Chapter 3 card, the only link to sam's study set-->
                <router-link to="#">
                    <div id ="card-content">
                        <div id = "left">
                            <h2>CH3</h2>
                        </div>
                        <div id = "details">
                            <p>CHM-1</p>
                            <p>Chemistry 1</p>
                        </div>
                        <div id = "open-btn">
                            <a href = "#"><i class="far fa-plus-square fa-2x"></i></a>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
    name: 'library',
    components: {
        SearchBar
    }
}
</script>

<style lang="scss" scoped>

.library {
    padding: 3.75%;
}

/*course and more styles*/
.more {
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    color: #404040;
    
    #course {
        flex-grow: 6;
    }

    #more-btn {
        justify-content: right;
        color: #404040;

        &:hover {
            color: #52c3a5;        
        }
    }
}

/*library cards styles*/
.library-cards {
    $card-width: 30%;
    $card-spacing: (100% - ($card-width * 3)) / 6;

    .card {
        display: inline-block;
        margin: $card-spacing;
        width: 30%;
        min-height: 1vh * 5;

        .router-link-active {
            color: black;
        }

        #card-content {
            display: flex;
            justify-content: space-between;
            background: white;
            border-radius: 15px;

            #left {
                height: 60px;
                width: 60px;
                border-radius: 10px;
                margin: 10px;
                background: #eef0ef;

                h2 {
                    text-align: center;
                    color: #80c3c2;
                    margin-top: 12px;
                    font-weight: 500;
                }
            }

            #details {
                height: 60px;
                width: 60px;
                margin: 10px;
                
                p {
                    font-size: 10px;
                    color: black;
                }
            }

            #open-btn{
                margin-top: 24px;
                margin-right: 15px;

                .far {
                    color: #81d3d2;
                }
            }
        }

        #card-content:hover {
            background: #faf9f9;
        }
    }
}
</style>