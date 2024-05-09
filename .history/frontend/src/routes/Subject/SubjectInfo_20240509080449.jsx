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
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default SubjectInfo;