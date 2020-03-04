import React, {Component} from 'react'
import { Button, Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import {editCategory} from '../redux/action/category'

class EditCategory extends Component{

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
        
        const propsId = this.props.idCategory
        console.log(propsId)
        const data={
            name: this.state.name
        }

        this.props.dispatch(editCategory(data,propsId ))

    }

render(){
    return(
        <div>
            <div className="modal fade" id="editCategory" tabindex="-1" role="dialog" aria-labelledby="editCategory" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="categoryModalLabel">Edit Category</h5>
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

export default connect()(EditCategory)