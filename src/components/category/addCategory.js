import React, {Component} from 'react'
import { Button, Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import {addCategory} from '../redux/action/category'


class AddCategory extends Component{

        state={
            name: '',
        }
        
        onChangeHandler = (e)=>{
            console.log(e.target.value)
            this.setState({
                [e.target.name]:e.target.value
            })
        }
        
        
        onSubmitHandler = (e)=>{
            e.preventDefault()

            // let data = new FormData()
            // data.append("name", this.state.name)

            const data={
                name: this.state.name
            }
            console.log(this.state)

            this.props.dispatch(addCategory(data))

        }

    render(){
        return(
            <div>
                <div className="modal fade" id="addCategory" tabindex="-1" role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="categoryModalLabel">Add Category</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <Form >
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.onChangeHandler} />
                                </Form.Group>
                                <Button onClick={this.onSubmitHandler} data-dismiss="modal" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default connect()(AddCategory)