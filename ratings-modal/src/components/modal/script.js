import Stars from "./stars";

export default {
    components: {
        Stars
    },
    data() {
        return {
            starsContent: [
                {
                    title: 'How would you rate your food?',
                    checked: 0
                },
                {
                    title: 'How would you rate your delivery driver?',
                    checked: 0
                },
                {
                    title: 'How would you rate your overall experience?',
                    checked: 0
                }
            ],
            sendData: 'Submit feedback'
        }
    },
    methods: {
        addStar: function(index, star) {
            this.starsContent[index].checked = star;
        },
        submit: function() {
            this.sendData = 'Send...';
            setTimeout(() => {
                this.$parent.result = JSON.stringify(this.starsContent);
                this.sendData = 'Success!!!';
                setTimeout(() => {
                    this.sendData = 'Submit feedback';
                    this.$parent.showModal = false;
                }, 1000);
            }, 2000);
        }
    }
}