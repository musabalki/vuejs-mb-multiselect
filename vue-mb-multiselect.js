var app = new Vue({
    el: '#app',
    data: {
        allOptions: ["Option 1", "Option 2", "Option 3","Option 4"],
        selectedOptions: [],
        leftActive:null,
        rightActive:null
    },
    methods: {
        leftBgSelected(i){
            this.leftActive = i;
        },
        rightBgSelected(i){
            this.rightActive = i;
        },
        rightClick(){
            if(this.leftActive!=null){
                this.selectedOptions.push(this.allOptions[this.leftActive]);
                this.allOptions.splice(this.leftActive, 1);
                this.leftActive=null;
            }
        },
        leftClick(){
            if(this.rightActive!=null){
                this.allOptions.push(this.selectedOptions[this.rightActive]);
                this.selectedOptions.splice(this.rightActive, 1);
                this.rightActive=null;
            }
        },
        dbSelectedLi(index, event) {
            this.selectedOptions.push(this.allOptions[index]);
            this.allOptions.splice(index, 1);
            this.leftActive=null;
        },
        dbRemoveLi(index, event) {
            this.allOptions.push(this.selectedOptions[index]);
            this.selectedOptions.splice(index, 1);
            this.rightActive=null;
        },
        addAllOptions() {
            this.allOptions.map((i, item) => {
                this.selectedOptions.push(i);
            })
            this.selectedOptions.map((i, item) => {
                this.allOptions.splice(i, 1);
            })
        },
        removeAllOptions() {
            this.selectedOptions.map((i, item) => {
                this.allOptions.push(i);
            })
            this.allOptions.map((i, item) => {
                this.selectedOptions.splice(i, 1);
            })
        }
    }
})