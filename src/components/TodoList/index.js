import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { v4 as uuidv4 } from 'uuid';
// import { addTodo } from '../../redux/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoRemainningSelector } from '../../redux/selector';
import todoSlice from './todoSlice';

export default function TodoList() {
    const dispatch = useDispatch();
    const todoList = useSelector(todoRemainningSelector);
    const [name, setName] = useState('');
    const [priority, setpriority] = useState('Medium');

    const handleAdd = () => {
        let todo = {
            id: uuidv4(),
            name: name,
            completed: false,
            priority: priority
        }

        dispatch(
            // addTodo(todo)
            todoSlice.actions.addTodo(todo)
        );
        setName('');
    }


    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {
                    todoList && todoList.map((item) => (
                        <Todo key={item.id} name={item.name} priority={item.priority} completed={item.completed} id={item.id} />
                    ))
                }
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={name} onChange={(event) => setName(event.target.value)} />
                    <Select defaultValue="Medium" value={priority} onChange={setpriority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={() => handleAdd()}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
