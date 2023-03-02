import React, {useState} from 'react';
import {Button, Input} from 'antd';
import {Divider, Radio, Table} from 'antd';
import styles from './index.less';
import type {ColumnsType} from 'antd/es/table';
import {index} from "@umijs/utils/compiled/cheerio/lib/api/traversing";

//column定义这一列的标志，datasource是业务数据，每一行去装填
interface DataType {
    id:string;
    content: string;
    // isCompleted:boolean;
}

const columns: ColumnsType<DataType> = [
    {
        title: '内容',
        dataIndex: 'content',
    },
];


const Todolist: React.FC = () => {
    let initData = [{
        id:'1',
        content: '使用脚手架初始化一个项目',
    }, {
        id:'2',
        content: '创建组件路由',
    }, {
        id:'3',
        content: '开始写组件'
    }]
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    // @ts-ignore
    const [data,setData]=useState(initData)<DataType[]>;
    //data初始initData，<DataType[]>是定义的类型
    const [value, setValue] = useState('');
    const [currentSelected, setCurrentSelected] = useState([]);
    //把vaule的值存起来，方便其他地方用;
    //value是输入框的值

    const handleChange = (e: any) => {
        setValue(e.target.value)
        console.info(e.target.value);
    }
    const rowSelection = {
        // 选中项发生变化时的回调
        onChange: (selectedRowKeys: any, selectedRows: React.SetStateAction<never[]>) => {
            // @ts-ignore
            setCurrentSelected(selectedRows);
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };


    const addClick = () => {
        data.push({
            id: data.length + 1 + '',
            content: value
        })
        setData([...data]);
    }
    //
    // const delClick = () => {
    //     let selected = [...currentSelected];
    //     let ids=[]
    //     // 根据选中的内容，循环取出下标
    //     data.map((item, index) => {
    //         selected.map(childItem => {
    //             if (item.id == childItem.id) {
    //                 // console.log(item);
    //                 ids.push(index);
    //             }
    //         })
    //     })
    //     console.log(ids);
    // }

    // @ts-ignore
    // @ts-ignore
    return (
        <div className={styles.all}>
            <div className={styles.title}>TODO DEMO</div>
            <div>

                <div className={styles.revise}>
                    <Input placeholder="Add a ToDo" onChange={handleChange}/>
                    <Button type="primary" onClick={addClick}>Add</Button>
                    <Button>Del</Button>
                </div>
                <div>
                    <Radio.Group
                        onChange={({target: {value}}) => {
                            setSelectionType(value);
                        }}
                        value={selectionType}
                    >
                    </Radio.Group>

                    <Divider/>

                    <Table
                        showHeader={false}
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                        rowKey='id'
                    />

                </div>
                <div className='list'></div>
            </div>
        </div>
    )
}

export default Todolist;
