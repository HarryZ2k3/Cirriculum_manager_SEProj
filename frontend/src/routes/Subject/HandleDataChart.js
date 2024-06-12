
function SubjectBar(selectedSubject){

    if(selectedSubject == null) return {subjectdata: [0],
                                        subjectLabel: ['nothing']};

    const subjectdata = [selectedSubject.inclass,selectedSubject.mid,selectedSubject.final];
    const subjectLabel = ['inclass','mid','final'];
    console.log("call SbujectBar method");
    return {subjectdata,subjectLabel};
    
}
export default SubjectBar;