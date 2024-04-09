const { api } = require("./api.js");

const getAllTodos = async () => {
    try {
        const { data } = await api.get("todos");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

const getTodoById = async (id) => {
    try {
        const { data } = await api.get("todos/",
            {
                params: {
                    id : id
                },
            }
        );
        console.log('todos by id:',data);
    } catch (error) {
        console.error(error);
    }
}

//getTodoById(10);

const addTodo = async () => {
    try {
        const response = await api.post("todos", 
            {
                userId: 1,
                title : "wash and dry dishes",
                completed: false
            }
        );
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

//addTodo();


module.exports = {
    getAllTodos,
    getTodoById,
    addTodo
}
