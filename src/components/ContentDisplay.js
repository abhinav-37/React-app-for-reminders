import React, { useState } from "react";
import Moment from "react-moment";
import { Button, Form, Modal } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import CancelIcon from "@material-ui/icons/Cancel";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
function ContentDisplay({
    month,
    data,
    changer,
    sendBottom,
    del,
    singleDelete,
}) {
    //this is to show or hide the modal
    const [modalShow, setModalShow] = useState(false);
    //this is to take the data from the form
    const [formData, setFormData] = useState({});
    const formFunction = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    const formFunctionSubmit = (e) => {
        e.preventDefault();
        setModalShow(!modalShow);
    };
    //this is to get the data for the object to edit
    const ClickHandler = (d) => {
        setModalShow(!modalShow);
    };
    const editModalButton = (d) => {
        changer(d, formData);
    };

    //to send the clicked on the bottom
    const checkedClicked = (key) => {
        sendBottom(key);
    };
    //TO DELETE THE WHOLE CARD
    const deleteCard = () => {
        let monthCode = data[0].date.substring(5, 7);
        del(monthCode);
    };

    //to single delete element
    const singleDeleteHandler = (id) => {
        singleDelete(id);
    };
    return (
        // This is the thing that displays the content
        <div className="displayContant">
            {data.length !== 0 && (
                <div>
                    {" "}
                    {/* This is the topmost part of the card */}
                    <div className="displayHeader">
                        <div className="row">
                            <div className="col-lg-10">
                                <h3>{month}</h3>
                                <p>Reminders</p>
                            </div>
                            <div className="col-lg-2">
                                <CancelIcon onClick={deleteCard} />
                            </div>
                        </div>
                    </div>
                    {/* Map through the given data to get the info */}
                    {data.map((d) => (
                        <div key={d.key}>
                            <div className="row diaplayCard">
                                <div className="cardLeft col-lg-1">
                                    <Form.Check
                                        onClick={() => checkedClicked(d.key)}
                                        type="checkbox"
                                    />
                                </div>
                                <div className="cardCenter col-lg-8">
                                    {d.name}
                                    <br />
                                    {d.description}
                                </div>
                                <div
                                    style={{ padding: 0 }}
                                    className="cardRight col-lg-2 "
                                >
                                    <Moment format="D MMM YYYY" date={d.date} />
                                </div>
                                <form
                                    style={{ padding: 0 }}
                                    className="col-lg-1"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <button
                                        style={{ padding: 0 }}
                                        className="btn"
                                        type="submit"
                                        onClick={() => ClickHandler(d.key)}
                                    >
                                        <CreateIcon />
                                    </button>
                                    <button
                                        style={{ padding: 0, fontSize: 20 }}
                                        className="btn"
                                        type="submit"
                                        onClick={() =>
                                            singleDeleteHandler(d.key)
                                        }
                                    >
                                        <DeleteIcon />
                                    </button>
                                </form>
                            </div>
                            <hr />
                            <Modal
                                onHide={() => setModalShow(!modalShow)}
                                show={modalShow}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                {/* the form starts from here */}
                                <Form onSubmit={formFunctionSubmit}>
                                    <Modal.Header className="modal-title ">
                                        <Modal.Title id="contained-modal-title-vcenter">
                                            Add New Reminder
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                onChange={formFunction}
                                                name="name"
                                                required
                                                type="text"
                                                placeholder="Name"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            onSubmit={formFunctionSubmit}
                                        >
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                onChange={formFunction}
                                                name="description"
                                                required
                                                type="text"
                                                placeholder="Description"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Time</Form.Label>
                                            <Form.Control
                                                onChange={formFunction}
                                                name="time"
                                                required
                                                type="time"
                                                placeholder="Time"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Date</Form.Label>
                                            <Form.Control
                                                onChange={formFunction}
                                                name="date"
                                                required
                                                type="date"
                                                placeholder="Date"
                                            />
                                        </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer className="modal-footer">
                                        <Button
                                            variant="secondary"
                                            onClick={() =>
                                                setModalShow(!modalShow)
                                            }
                                        >
                                            <CloseIcon /> Cancel
                                        </Button>
                                        <Button
                                            onClick={() =>
                                                editModalButton(d.key)
                                            }
                                            variant="secondary"
                                            type="submit"
                                        >
                                            <AddIcon /> Edit
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            </Modal>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ContentDisplay;
