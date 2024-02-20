import styles from './index.module.css';
function AddTodo() {
    const[todo, setTodo] =React.useState("");
    
    return(
        <section className={styles.addTodo}>
            <input
            onChange={
                function (event) {
                    console.log(event.target.value);
                    let todo = event.target.value
                }}
                
            
             className= {styles.addTodoInput}
            placeholder="Start typing..." />
            <button>Create</button>
        </section>

    );
}

export default AddTodo;