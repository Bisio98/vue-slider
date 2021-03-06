Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        currentActiveSlide: 0,
        counterclock: null,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },{
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum'
            },{
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },{
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },{
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ]
    },
    methods: {
        showNextSlide: function() {
            if(this.currentActiveSlide < this.slides.length - 1){
                this.currentActiveSlide++;
            }else{
                this.currentActiveSlide = 0;
            }
        },   
        showPrevSlide: function() {
            if(this.currentActiveSlide > 0){
                this.currentActiveSlide--;
            }else{
                this.currentActiveSlide = (this.slides.length - 1);
            }
        },
        immediatelyActive: function(index) {
            this.currentActiveSlide = index;
        },
        autoPlay: function(){
            this.counterclock = setInterval(() => {
                if(this.currentActiveSlide < this.slides.length -1){
                    this.currentActiveSlide++;
                }else{
                    this.currentActiveSlide = 0;
                }
            }, 500)
        },
        hoverSlider: function() {
            clearInterval(this.counterclock)
        }
    },
    created: function () {
        this.autoPlay();
    }
});