import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { deleteCategory } from '../redux/action/category';

const CategoryDelete = (props) => {
    const { category, show, onHide, dispatch } = props;
    console.log(category)

    const onCancelHandle = (e) => {
        e.preventDefault();
        onHide();
    }

    const onDeleteHandle = async (e) => {
        e.preventDefault();

        await dispatch(deleteCategory(category.id));
        onHide();
    }

    return (

        <Modal show={show} onHide={onHide} variant="lg">
            <Modal.Header>
                <p>Apakah Anda Yakin Ingin Menghapus {category ? category.name : ""} ini ?</p>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" size="sm" onClick={onCancelHandle} style={{ marginRight: "10px" }}>Cancel</Button>
                <Button variant="danger" size="sm" onClick={onDeleteHandle}>Delete</Button>
            </Modal.Body>
        </Modal>
    )
}

export default connect()(CategoryDelete);