import { Col } from "react-bootstrap";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

function SubjectInfo({
  title,
  description
}) {
  return (
    <Col sm={6} md={4}>
      <div className={styles.proj_imgbx}>
        <div className={styles.proj_txtx}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  );
}

SubjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default SubjectInfo;

import React, { Component } from 'react'

class Tables extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
      ],
    }
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.students[0])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }

  render() {
    return (
        <table>
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
    )
  }
}

export default Tables

