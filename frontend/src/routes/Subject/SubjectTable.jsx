const SubjectTable = ({ subjects, onSubjectClick }) => (
    <div>
        {subjects.map((semester, semesterIndex) => (
            <div key={semesterIndex} className="semester-table">
                <h2>Semester {semesterIndex + 1}</h2>
                <table className="subjectTable">
                    <thead>
                        <tr>
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
export default SubjectTable;