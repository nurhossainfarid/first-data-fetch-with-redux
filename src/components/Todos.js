import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getAllTodos } from './services/action/todosAction';

const Todos = () => {
    const { isLoading, todos, error } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    return (
        <div>
            <h1>Todos App</h1>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <section>
                {todos && todos.map(todo => {
                    const { id, title } = todo;
                    return (
                        <article key={id}>
                            <h3>{id}</h3>
                            <h4>{title}</h4>
                        </article>
                    )
                })}
            </section>
        </div>
    );
};

export default Todos;