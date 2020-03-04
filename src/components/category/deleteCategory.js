import React, {Component} from 'react'
import { Form } from 'react-bootstrap'

import { connect } from 'react-redux'
import {deleteCategory} from '../redux/action/category'

class DeleteCategory extends Component{

    onSubmitHandler = (e)=>{
            
        e.preventDefault()
        
        const propsId = this.props.idCategory
        console.log(propsId)

        this.props.dispatch(deleteCategory( propsId ))

    }

    render(){
        return(
            <div className="modal fade" id="deleteCategory" tabindex="-1" role="dialog" aria-labelledby="deleteCategoryLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteCategoryLabel">Alert!!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Do you really want to delete this category?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <Form >
                            <button onClick={this.onSubmitHandler} data-dismiss="modal" type="submit" class="btn btn-danger">Detele</button>
                        </Form>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(DeleteCategory)
