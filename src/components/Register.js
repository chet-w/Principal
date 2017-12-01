import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Modal } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        modelVisable: false
    };

    showModal = () => {
        console.log("here");
        this.setState({
            modelVisable: true,
        });
    }

    handleOk = () => {
        this.setState({
            modelVisable: false
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }



    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;


        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                }
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '021',
        })(
            <Select style={{ width: 60 }}>
                <Option value="020">020</Option>
                <Option value="021">021</Option>
                <Option value="022">022</Option>
                <Option value="024">024</Option>
                <Option value="027">027</Option>
            </Select>
            );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));

        return (
            <Form onSubmit={this.handleSubmit} layout="inline">
                <Row>
                    <Col xs={{ span: 12 }} >
                        <FormItem label="First Name" hasFeedback>
                            {getFieldDecorator('firstname', {
                                rules: [{ required: true, message: 'Please enter your First Name', whitespace: true }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                    <Col xs={{ span: 12 }} >
                        <FormItem
                            label="Surname" hasFeedback>
                            {getFieldDecorator('surname', {
                                rules: [{ required: true, message: 'Please enter your Surname', whitespace: true }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 24 }} >
                        <FormItem label="E-mail" hasFeedback>
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email',
                                    message: 'Please enter a valid E-mail',
                                }, {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <FormItem label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your password',
                                }, {
                                    validator: this.checkConfirm,
                                }],
                            })(
                                <Input type="password" />
                                )}
                        </FormItem>
                    </Col>

                    <Col xs={{ span: 12 }}>
                        <FormItem label="Confirm Password" hasFeedback >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true,
                                    message: 'Please confirm your password',
                                }, {
                                    validator: this.checkPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 24 }}>
                        <FormItem label="Phone Number" >
                            {getFieldDecorator('phone', {
                                rules: [{
                                    required: true,
                                    message: 'Please input your phone number'
                                }],
                            })(
                                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <FormItem label="Unit Number">
                            {getFieldDecorator('unitNumber', {
                                rules: [{
                                    required: false
                                }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                    <Col xs={{ span: 12 }}>
                        <FormItem label="Street Number">
                            {getFieldDecorator('streetNumber', {
                                rules: [{
                                    required: true,
                                    message: 'Please enter your Street Number'
                                }],
                            })(
                                <Input type="number" min={0} />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <FormItem label="Street Name">
                            {getFieldDecorator('streetName', {
                                rules: [{
                                    required: true,
                                    message: 'Please enter your Street Name'
                                }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                    <Col xs={{ span: 12 }}>
                        <FormItem label="Suburb">
                            {getFieldDecorator('suburb', {
                                rules: [{
                                    required: true,
                                    message: 'Please enter your Suburb'
                                }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <FormItem label="City">
                            {getFieldDecorator('city', {
                                rules: [{
                                    required: true,
                                    message: "Please enter your City"
                                }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                    </Col>
                    <Col xs={{ span: 12 }}>
                        <FormItem label="Postcode">
                            {getFieldDecorator('postcode', {
                                rules: [{
                                    required: true,
                                    message: 'Please enter your Postcode'
                                }],
                            })(
                                <Input type="number" min={0} />
                                )}
                        </FormItem>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 24 }}>
                        <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>I have read the <a onClick={this.showModal}>Terms and Conditions</a>.</Checkbox>
                                )}
                        </FormItem>
                        <Modal
                            title="Terms and Conditions"
                            visible={this.state.modelVisable}
                            onOk={this.handleOk}
                            onCancel={this.handleOk}
                            style={{ top: 20 }}
                        >
                            <p>Lorem ipsum dolor sit amet, ubique feugiat efficiantur sit te. Ius fuisset honestatis ne, augue zril euripidis mel ne. Vis te facer falli, affert ignota nostro cu sit, facer voluptatibus cu vis. Noster fierent detraxit ei eum, docendi facilisis comprehensam ex eos, veri maiorum mandamus ei cum. Labores nonumes lucilius ex duo, aperiri malorum probatus ut duo.</p>
                            <p>Et quot reque tation eum, his erat everti democritum ea. Per ei nihil iracundia, nam in volutpat democritum. Fabellas voluptatibus vix te, ex nonumy ancillae facilisis nec, id aliquip quaerendum vim. Mea rebum corrumpit imperdiet ut, causae lucilius petentium pro at. Ei pri enim rebum falli. Usu ei noster civibus, bonorum deleniti vis ad.</p>
                            <p>Sumo diam eam eu. Erat augue prodesset eos et. Sea minimum scribentur an, regione nostrud blandit eum ut. Vis cu quem feugiat interesset. Debet decore theophrastus et sit.</p>
                            <p>Eum dico periculis ei, pri tantas accusamus dissentiet te, eam aperiam laboramus eu. Luptatum liberavisse quo ut, eam fabulas debitis mentitum te. Mea te harum aperiri quaeque, sit ei tamquam antiopam. Nisl sanctus per eu. Ad offendit suavitate quo, nec ex altera temporibus. Novum erant nonumy est eu, ei vim magna posse.</p>
                            <p>In habeo tation nullam his, quod vidisse discere eum ne. Sale nullam splendide ad eum. At accumsan periculis salutatus cum, quo id ancillae fastidii tacimates, ornatus interpretaris pro ex. Quodsi verterem eum cu. In maiorum menandri sea.</p>
                            <p>Ei pro illud aliquando. Nostrud labores antiopam sea an, labores dignissim eu nec. Aliquip dolorum mandamus duo at. Cum ea natum periculis, nostro principes sed no. Denique elaboraret te his. Accusamus iracundia mediocritatem sed no.</p>
                          </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ span: 24 }}>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">Register</Button>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const RegisterForm = Form.create()(RegistrationForm);


export default RegisterForm;