import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import filtersSlice from './filtersSlice';
// import { priorityFillter, searchFillter, statusFillter } from '../../redux/Actions';



const { Search } = Input;

export default function Filters() {
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState('');
    const [status, setStatus] = useState('All');
    const [priority, setPriority] = useState([]);

    const handleSearch = (value) => {
        setValueSearch(value);
        dispatch(
            // searchFillter(value)
            filtersSlice.actions.searchFilterChange(value)
        )
    }

    const handleStatus = (value) => {
        setStatus(value);
        dispatch(
            // statusFillter(value)
            filtersSlice.actions.statusFilterChange(value)
        )
    }

    const priorityStatus = (data) => {
        setStatus(data);
        setPriority(data)
        dispatch(
            // riorityFillter(data)
            filtersSlice.actions.priorityFilterChange(data)
        )
    }

    return (
        <Row justify='center'>
            <Col span={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder='input search text' value={valueSearch} onChange={(event) => handleSearch(event.target.value)} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={status} onChange={(event) => handleStatus(event.target.value)} >
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    value={priority}
                    onChange={priorityStatus}
                >
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
            </Col>
        </Row>
    );
}
