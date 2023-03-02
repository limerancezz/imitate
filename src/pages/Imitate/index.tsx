import {Button, Form, Input} from 'antd';
import styles from './index.less';
import {Space, Table} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import React, {useEffect, useState} from "react";
import {getTableData} from "@/services/demo/FetchDemo";


const onFinish = (values: any) => {
    console.log('Success:', values);
};
//  提交表单且数据验证成功后回调事件
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

//提交表单且数据验证失败后回调事件

interface DataType {
    key: string;
    name: string;
    nickname: string;
    sex: string;
    operations: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '昵称',
        dataIndex: 'nickname',
        key: 'nickname',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: '操作',
        key: 'operations',
        render: (_, record) => (
            // 他会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
            <Space size="middle">
                <a>配置</a>
                <a>订阅警报</a>
            </Space>
        ),
    },
];


const data: DataType[] = [
    {
        key: '1',
        name: 'Umi',
        nickname: 'U',
        sex: 'Male',
        operations: ['nice', 'developer'],

    },
    {
        key: '2',
        name: 'Umi1',
        nickname: 'U1',
        sex: 'Male1',
        operations: ['nice', 'developer'],

    },
    {
        key: '3',
        name: 'Umi2',
        nickname: 'U2',
        sex: 'Male2',
        operations: ['nice', 'developer'],

    },
];

const TableImitate: React.FC = () => {
    // const [dataSource, setDataSource] = useState();
    // const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    // useEffect(() => {
    //     setLoading(true);
    //     getTableData().then(data => {
    //         setDataSource(data)
    //     }).finally(() => {
    //         setLoading(false)
    //     });
    // }, []);
    return (
        <div>
            <div className="title">
                <h1>Imitate</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.search}>
                    <div>
                        <Form
                            form={form}
                            // 经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
                            layout='inline'
                            name="basic"
                            labelCol={{span: 4}}
                            wrapperCol={{span: 28}}
                            style={{maxWidth: 600}}
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Form.Item
                                label="名称"
                                name="name"
                            >
                                <Input placeholder='请输入'/>
                            </Form.Item>

                            <Form.Item
                                label="昵称"
                                name="nickname"
                            >
                                <Input placeholder='请输入'/>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className={styles.buttonflex}>
                        <Button onClick={() => {
                            form.resetFields()
                        }}>
                            重置
                        </Button>
                        <Button type="primary">
                            查询
                        </Button>
                    </div>
                </div>
                <div className={styles.tabledisplay}>
                    <h3>表单查询</h3>
                    <Table className={styles.formdisplay} columns={columns} dataSource={data}/>
                </div>
            </div>
        </div>

    );
};
export default TableImitate;
