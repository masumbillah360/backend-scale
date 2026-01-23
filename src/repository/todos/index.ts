import { type Todo } from "../../validation/todos";

let todos:Todo[] = [];
export const getAllTodos = async({
    limit,
    offset,
    search,
}: {
    limit: number;
    offset: number;
    search: string;
    orderBy: 'ASC' | 'DESC',
    orderByKey?: string | null
}) => {
    return todos;
};
export const getTodo = async(id:string) => {
    return todos.find((item) => item.id === id);
};
export const addTodo = async({ title }: { title: string }) => {
    return {};
};
export const updateTodo = async({ id, title }: { id: string; title: string }) => {
    return {};
};
export const deleteTodo = async (id: string) => {
    return {};
};
