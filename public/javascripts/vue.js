//reference: https://www.geeksforgeeks.org/build-a-todo-list-app-using-vuejs/
const app = new Vue({
    el: "#vue_app",
    data: {
        userInput: '',  //content of user input
        list: [     //get from database
        ]
    },
    methods: {
        addItem() {
            if (this.userInput.trim() !== '') {
                const newItem = {
                    id: Math.random(),
                    title: this.userInput.trim()
                };
                this.list.push(newItem);
                this.userInput = '';    //clear what user input
            }
        },
        deleteItem(index) {
            this.list.splice(index, 1); //remove 1 item at this position
        },
        editItem(index) {
            const editedTodo = prompt('Edit the todo:');    //display a popup to input new title
            if (editedTodo !== null && editedTodo.trim() !== '') {
                this.list[index].title = editedTodo.trim();
            }
        }
    }
});
