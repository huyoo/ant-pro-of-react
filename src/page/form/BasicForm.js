import React, {Component} from "react"
import {Form, Breadcrumb, Input, InputNumber, Button, Icon, Tooltip, DatePicker, Radio} from "antd"
import "antd/dist/antd.css"
import BasicLayout from "../../layout/BasicLayout"
import "./BasicForm.css"
import locale from "antd/lib/date-picker/locale/zh_CN"

const { Item} = Form,
    { TextArea} = Input,
    { RangePicker } = DatePicker,
    { Group} = Radio;
export default class BasicForm extends Component{
    handleSubmit = e => {
        return null;
    }
    render(){
        const formItemLayout = {
            labelCol: {
                sm: { span: 8},
                xs: { span: 24}
            },
            wrapperCol: {
                sm: { span: 12},
                xs: { span: 24}
            }
        };

        return (
            <BasicLayout>
                <div className="head">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
                        <Breadcrumb.Item>表单页</Breadcrumb.Item>
                        <Breadcrumb.Item>基础表单</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="title">基础表单</div>
                    <div>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</div>
                </div>
                <div className="basic_form">
                    <Form onSubmit={this.handleSubmit}>
                        <Item {...formItemLayout} label="标题">
                            <Input placeholder="给目标起个名字"/>
                        </Item>
                        <Item {...formItemLayout} label="起止日期">
                            <RangePicker style={{width: "100%"}} locale={locale} />
                        </Item>
                        <Item {...formItemLayout} label="目标描述">
                            <TextArea placeholder="请输入你的阶段性工作目标"/>
                        </Item>
                        <Item {...formItemLayout} label="衡量标准">
                            <TextArea placeholder="请输入衡量标准"/>
                        </Item>
                        <Item {...formItemLayout} label={
                            <span>客户
                                <span style={{color: "grey"}}>&nbsp;&nbsp;(选填)&nbsp;</span>
                                <Tooltip title="目标的服务对象">
                                    <Icon type="info-circle-o" style={{color:"grey"}} />
                                </Tooltip>
                            </span>
                        }>
                            <Input placeholder="请描述你服务的客户，内部客户直接@姓名/工号"/>
                        </Item>
                        <Item {...formItemLayout} label={
                            <span>
                                邀评人
                                <span style={{color:"grey"}}>&nbsp;&nbsp;(选填)&nbsp;</span>
                            </span>
                        }>
                            <Input placeholder="请直接@姓名/工号，最多可邀请5人"/>
                        </Item>
                        <Item {...formItemLayout} label={
                            <span>
                                权重
                                <span style={{color:"grey"}}>&nbsp;&nbsp;(选填)&nbsp;</span>
                            </span>
                        }>
                            <InputNumber placeholder="请输入" min={0} max={100} />
                            <span className="ant-form-text">%</span>
                        </Item>
                        <Item {...formItemLayout} label="目标公开">
                            <Group value={1} options={
                                [{
                                    label: "公开",
                                    value: 1
                                }, {
                                    label: "部分公开",
                                    value: 2
                                },{
                                    label: "不公开",
                                    value: 3
                                }]}
                            />
                        </Item>
                        <Item wrapperCol={
                            {
                                xs:{
                                    span: 12,
                                    offset: 6
                                },
                                sm: {
                                    span: 16,
                                    offset: 8
                                }
                            }
                        }>
                            <Button type="primary">提交</Button>
                            <Button>取消</Button>
                        </Item>
                    </Form>
                </div>
            </BasicLayout>
        )
    }
}