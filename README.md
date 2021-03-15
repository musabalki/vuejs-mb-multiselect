# vuejs-mb-multiselect
## How to use ?
### 1. Include CSS and JS on your site
```html
<link rel="stylesheet" href="vue-mb-multiselect.css" /> 
<script src="vue-mb-multiselect.js"></script>
```
```html
### 2. Create HTML
<div id="app">
        <div class="container">
            <div class="mb-alloptions">
                <span class="mb-title">ALL OPTİONS</span>
                <ul>
                    <li v-for="(item,index) in allOptions"  :key="index"
                        v-on:dblclick="dbSelectedLi(index,$event)" v-on:click="leftBgSelected(index)" :class="{ active : leftActive == index }">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="mb-icon">
                <div class="mb-double-right"  @click="addAllOptions"> >> </div>
                <div class="mb-right" @click="rightClick"> >  </div>
                <div class="mb-left"  @click="leftClick"> < </div>
                <div class="mb-double-left" @click="removeAllOptions"> << </div>
            </div>
            <div class="mb-selected">
                <span class="mb-title">SELECTED</span>
                <ul>
                    <li v-for="(item,index) in selectedOptions" :key="index" v-on:dblclick="dbRemoveLi(index,$event)" v-on:click="rightBgSelected(index)" :class="{ active : rightActive == index }">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <form action="" method="POST" id="mb-form"> 
            <select name="result[]" multiple style="display:none" id="select">
                <option selected v-for="(item,index) in selectedOptions">{{item}}</option>
            </select>
        </form>
    </div>
```
