import PropTypes from 'prop-types'
import './subjectTable.css'
export const SubjectTable = ({ subjects, onSubjectClick }) => (
    <div>
        {subjects.map((semester, semesterIndex) => (
            <div key={semesterIndex} className="semester-table">
                <h2 className='semester_title'>Semester {semesterIndex + 1}</h2>
                <table className="subjectTable">
                    <thead>
                        <tr className="title-semester">
                            <th>Subject </th>
                            <th>Inclass</th>
                            <th>Mid</th>
                            <th>Final</th>
                            <th>Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {semester.map((subject, index) => (
                            <tr key={index} className="subject-row" onClick={() => onSubjectClick(subject)}>
                                <td>{subject.name}</td>
                                <td>{subject.inclass}</td>
                                <td>{subject.mid}</td>
                                <td>{subject.final}</td>
                                <td>{subject.avg.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ))}
    </div>
);

// SubjectTable.PropTypes = {

// }
export default SubjectTable;