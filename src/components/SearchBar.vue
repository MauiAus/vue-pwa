<template>
    <div class="search-box">
        <a class="search-btn" href="#"><i class="fas fa-search fa-lg"></i></a>
        <input class="search-txt" type="text" name="" placeholder="Search">
        <a class="caret-down-btn" href="#"><i class="fas fa-caret-down fa-lg"></i></a>
    </div>
</template>
<script>
export default {
    name: 'SearchBar'
}
</script>
<style lang="scss" scoped>
/*Search bar styles*/
.search-box {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background: #e1e3e2;
    height: 24px;
    padding: 10px;
    border-radius: 40px;
}

.search-btn {
    color: #52c3a5;

    &:hover { color: white; }
}

.search-txt {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    color: #404040;
    font-size: 16px;
    transition: 0.4s;
    line-height: 20px;
    width: 100%;
}

.caret-down-btn {
    color: #52c3a5;
    float: right;
    margin-right: 10px;

    &:hover { color: white; }
}
</style>