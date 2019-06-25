import Modal from "../modal";

export default {
    components: {
        Modal
    },
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        setShowModal: function () {
            this.showModal = true;
        }
    }
}