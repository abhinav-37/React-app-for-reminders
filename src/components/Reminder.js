import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import ContentDisplay from "./ContentDisplay";
import { v4 as uuidv4 } from "uuid";
export const Reminder = () => {
    //this is to show or hide the modal
    const [modalShow, setModalShow] = useState(false);
    //this is for collecting data from the modal
    const [formData, setFormData] = useState({});
    const [finalForm, setFinalForm] = useState([]);
    const formFunction = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                key: uuidv4(),
                [name]: value,
            };
        });
    };
    const formFunctionSubmit = (e) => {
        e.preventDefault();
        setFinalForm((prev) => {
            return [...prev, formData];
        });
    };
    //function to change the data
    const changer = (key, data) => {
        let toChange = finalForm.filter((data) => data.key === key);
        let index = finalForm.indexOf(toChange[0]);
        let newArray = [...finalForm];
        data.key = key;
        newArray[index] = data;
        setFinalForm(newArray);
        console.log(finalForm);
    };
    //function to send the value at the bottom

    const sendAtBottom = (key) => {
        let toSend = finalForm.filter((data) => data.key === key);
        let index = finalForm.indexOf(toSend[0]);
        let requiredObject = finalForm.splice(index, 1);
        let newFinalForm = finalForm.concat(requiredObject);
        setFinalForm(newFinalForm);
    };

    //to delete a single entry
    const singleDelete = (key) => {
        let toDelete = finalForm.filter((e) => e.key === key);
        let index = finalForm.indexOf(toDelete[0]);
        finalForm.splice(index, 1);
        setFinalForm(finalForm);
    };
    //This for displaying the data collected
    let jan = finalForm.filter((e) => e.date.substring(5, 7) === "01");
    let feb = finalForm.filter((e) => e.date.substring(5, 7) === "02");
    let mar = finalForm.filter((e) => e.date.substring(5, 7) === "03");
    let apr = finalForm.filter((e) => e.date.substring(5, 7) === "04");
    let may = finalForm.filter((e) => e.date.substring(5, 7) === "05");
    let jun = finalForm.filter((e) => e.date.substring(5, 7) === "06");
    let july = finalForm.filter((e) => e.date.substring(5, 7) === "07");
    let aug = finalForm.filter((e) => e.date.substring(5, 7) === "08");
    let sep = finalForm.filter((e) => e.date.substring(5, 7) === "09");
    let oct = finalForm.filter((e) => e.date.substring(5, 7) === "10");
    let nov = finalForm.filter((e) => e.date.substring(5, 7) === "11");
    let dec = finalForm.filter((e) => e.date.substring(5, 7) === "12");

    //function to delte the whole card containing the certen month
    const deleteCard = (month) => {
        let toDelete = finalForm.filter(
            (e) => e.date.substring(5, 7) === month
        );
        toDelete.map((m) => {
            console.log(m);
            let index = finalForm.indexOf(m);
            finalForm.splice(index, 1);
            setFinalForm(finalForm);
        });
    };
    return (
        <div>
            <div className="container">
                {/* This is the button to trigger the modal */}
                <div className="modal-show-btn">
                    <Button
                        className="btn-show"
                        variant="secondary"
                        onClick={() => setModalShow(!modalShow)}
                    >
                        <AddIcon /> ADD REMINDER
                    </Button>
                </div>
            </div>
            <div className="container mainClass">
                {/* This is the place to display all the data by passing it into the contentdisplay component */}
                {jan.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        del={deleteCard}
                        singleDelete={singleDelete}
                        month="January"
                        data={jan}
                    />
                )}
                {feb.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="February"
                        data={feb}
                    />
                )}
                {mar.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="March"
                        data={mar}
                    />
                )}
                {apr.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="April"
                        data={apr}
                    />
                )}
                {may.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="May"
                        data={may}
                    />
                )}
                {jun.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="June"
                        data={jun}
                    />
                )}
                {july.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="July"
                        data={july}
                    />
                )}
                {aug.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="August"
                        data={aug}
                    />
                )}
                {sep.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="Septmber"
                        data={sep}
                    />
                )}
                {oct.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="October"
                        data={oct}
                    />
                )}
                {nov.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="November"
                        data={nov}
                    />
                )}
                {dec.length !== 0 && (
                    <ContentDisplay
                        sendBottom={sendAtBottom}
                        changer={changer}
                        month="Descember"
                        data={dec}
                    />
                )}
            </div>
            <div>
                {/* The modal starts from here */}
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

                            <Form.Group onSubmit={formFunctionSubmit}>
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
                                onClick={() => setModalShow(!modalShow)}
                            >
                                <CloseIcon /> Cancel
                            </Button>
                            <Button
                                onClick={() => setModalShow(!modalShow)}
                                variant="secondary"
                                type="submit"
                            >
                                <AddIcon /> Add New
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        </div>
    );
};
