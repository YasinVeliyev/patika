import React, { Component } from "react";

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { task: "Learn JavaScript", completed: true },
                { task: "Learn React", completed: false },
                { task: "Learn Html", completed: true },
            ],
            tasks: [],
        };
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateTaskStatus = this.updateTaskStatus.bind(this);
        this.getAllTasks = this.getAllTasks.bind(this);
        this.getActiveTasks = this.getActiveTasks.bind(this);
        this.getCompletedTasks = this.getCompletedTasks.bind(this);
        this.deleteCompletedTasks = this.deleteCompletedTasks.bind(this);
        this.completeAllTask = this.completeAllTask.bind(this);
    }

    componentDidMount() {
        let selected_element = document.querySelector(".selected");
        selected_element.click();
    }

    addTask(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            let value = event.target.value;
            if (value !== "" && this.state.todos.filter((todo) => todo.task.toLowerCase() === value.trim().toLowerCase()).length === 0) {
                this.setState((state) => {
                    return {
                        todos: [...state.todos, { task: value, completed: false }],
                        tasks: [...state.tasks, { task: value, completed: false }],
                    };
                });

                event.target.value = "";
                document.querySelector(".selected").click();
            }
        }
    }

    deleteTask(event) {
        this.setState((state) => {
            return {
                todos: state.todos.filter((todo) => {
                    return todo.task !== event.target.parentElement.childNodes[1].innerHTML;
                }),
                tasks: state.tasks.filter((todo) => {
                    return todo.task !== event.target.parentElement.childNodes[1].innerHTML;
                }),
            };
        });
    }

    updateTaskStatus(event) {
        let task = event.target.nextElementSibling.innerHTML;
        this.setState((state) => {
            let todos = state.todos.map((todo) => {
                if (todo.task === task) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

            return { todos };
        });
    }

    getAllTasks(event) {
        document.querySelector(".selected").classList.toggle("selected");
        event.target.classList.toggle("selected");
        this.setState((state) => {
            return {
                tasks: this.state.todos,
            };
        });
    }

    getActiveTasks(event) {
        document.querySelector(".selected").classList.toggle("selected");
        event.target.classList.toggle("selected");
        this.setState((state) => {
            return {
                tasks: state.todos.filter((todo) => !todo.completed),
            };
        });
    }
    getCompletedTasks(event) {
        document.querySelector(".selected").classList.toggle("selected");
        event.target.classList.toggle("selected");
        this.setState((state) => {
            return {
                tasks: state.todos.filter((todo) => todo.completed),
            };
        });
    }

    deleteCompletedTasks() {
        this.setState((state) => {
            let todos = state.todos.filter((todo) => !todo.completed);
            return {
                todos,
                tasks: todos,
            };
        });
    }

    completeAllTask() {
        this.setState((state) => {
            let todos = state.todos.map((todo) => {
                todo.completed = true;
                return todo;
            });
            return {
                todos,
                tasks: todos,
            };
        });
    }

    render() {
        return (
            <main>
                <section className="todoapp">
                    <header className="header">
                        <h1>Todos</h1>
                        <form onKeyDown={this.addTask}>
                            <input className="new-todo" placeholder="What needs to be done?" autoFocus name="todo" />
                        </form>
                    </header>

                    <section className="main">
                        <input className="toggle-all" type="checkbox" />
                        <label htmlFor="toggle-all" onClick={this.completeAllTask}>
                            Mark all as complete
                        </label>

                        <ul className="todo-list">
                            {this.state.tasks.map((todo, index) => {
                                return (
                                    <li key={index}>
                                        <div className="view">
                                            <input className="toggle" type="checkbox" checked={todo.completed} onChange={this.updateTaskStatus} />
                                            <label>{todo.task}</label>
                                            <button className="destroy" onClick={this.deleteTask}></button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                    <section className="footer">
                        <span className="todo-count">
                            <strong>{this.state.todos.filter((todo) => !todo.completed).length} </strong>
                            items left
                        </span>

                        <ul className="filters">
                            <li>
                                <a href="#/" className="selected" onClick={this.getAllTasks}>
                                    All
                                </a>
                            </li>
                            <li>
                                <a href="#/" onClick={this.getActiveTasks}>
                                    Active
                                </a>
                            </li>
                            <li>
                                <a href="#/" onClick={this.getCompletedTasks}>
                                    Completed
                                </a>
                            </li>
                        </ul>
                        {this.state.tasks.filter((todo) => todo.completed).length ? (
                            <button className="clear-completed" onClick={this.deleteCompletedTasks}>
                                Clear completed
                            </button>
                        ) : (
                            ""
                        )}
                    </section>
                </section>
            </main>
        );
    }
}

export default TodoApp;
