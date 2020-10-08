import React from "react";
import { v4 as uuidv4 } from "uuid";
import Moment from "react-moment";
import { Form } from "react-bootstrap";
import CreateIcon from "@material-ui/icons/Create";
function ContentDisplay({ month, data }) {
    return (
        // This is the thing that displays the content
        <div className="displayContant">
            {data.length !== 0 && (
                <div>
                    {" "}
                    {/* This is the topmost part of the card */}
                    <div className="displayHeader">
                        <h3>{month}</h3>
                        <p>Reminders</p>
                    </div>
                    {/* Map through the given data to get the info */}
                    {data.map((d) => (
                        <div key={uuidv4()}>
                            <div className="row diaplayCard">
                                <div className="cardLeft col-lg-1">
                                    <Form.Check type="checkbox" />
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
                                >
                                    <button
                                        style={{ padding: 0 }}
                                        className="btn"
                                        type="submit"
                                    >
                                        <CreateIcon />
                                    </button>
                                </form>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ContentDisplay;
