import Transition from '../../utils/Transition'

import React, { Children, useEffect, useState } from 'react';
import './subject.css';
import SubjectTable from './SubjectTable.jsx';
import RenderLineChart from './Chart.jsx';
import exampleDarta from "./subject.json" 
import axios from 'axios'
//import SubjectBar from  './HandleDataChart.jsx';
import BarChart from './BarChart.jsx';
import SelectionTable from './SelectionTable.jsx';

// const SubjectDetails = ({ selectedSubject }) => (
//     <div>
//         <h2>{selectedSubject.name}</h2>
//         <p>Inclass: {selectedSubject.inclass}</p>
//         <p>Mid: {selectedSubject.mid}</p>
//         <p>Final: {selectedSubject.final}</p>
//         <p>Average: {selectedSubject.avg.toFixed(2)}</p>
//     </div>
// );

export default function Subject() {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [dataSubject, setDataSubject] = useState([])
    const [dataBar,setDataBar] = useState(null);
    useEffect(() => {
        const testApi = async () => {
            await setDataSubject(subjs); 
            const resp = await axios.get('https://api.sampleapis.com/coffee/hot');
        }
        testApi()
           
    }, [])
    
    console.log("call Suject Function");
    const handleSubjectClick = (subject) => {
        setSelectedSubject(subject);
    };    
    return (
        <div className='Subject_root'>
            <h1>Welcome to Subject page</h1>
            <div>
                {/* <SelectionTable trancript ={subjs}  onSelection = {handleSubjectClick}/> */}

            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    {/* {dataSubject.length > 0 ? 
                        <SubjectTable subjects={dataSubject} onSubjectClick={handleSubjectClick} />
                        : <p>loading...</p>
                    } */}
                </div>
                <div style={{ flex: 1 }}>
                   
                    {/* <RenderLineChart labels={ labels} data={data} /> */}
                   {/* {selectedSubject && 
                    <SubjectBar selectedSubject={selectedSubject} />} */}
                </div>
            </div>
        </div>
    );
}
//-----------------------------------------------------------------------------
function SubjectBar(props){
    const { selectedSubject } = props

    const [subjectdata, setSubjectdata] = useState([])
    const [subjectLabel] = useState(['inclass','mid','final'])

    useEffect(() => {
        setSubjectdata([selectedSubject.inclass, selectedSubject.mid,selectedSubject.final])
        console.log("selectedSubject.name", selectedSubject.name )

    }, [selectedSubject])

  
    return (subjectdata.length > 0 && <BarChart chartName={selectedSubject.name} dataChart={subjectdata} labelsChart={subjectLabel} />);
   
    // return <>{JSON.stringify(selectedSubject)}</>
    
}

//------------------------------------------------------------------------------
class MySubject {
    name;
    inclass;
    mid;
    final;
    avg;
    constructor(name, inclass, mid, final) {
        this.name = name;
        this.inclass = inclass;
        this.mid = mid;
        this.final = final;
        this.caculateAvg();
    }

    caculateAvg() {
        this.avg = this.inclass * 0.3 + this.mid * 0.3 + this.final * 0.4;
    }
}

class Semester{
    sem;
    subjectList;
    semAvg;

    constructor (sem, subjectList){
        this.sem = sem;
        this.subjectList = subjectList;
        this.semAvg = this.avgCaculate();
    }

    avgCaculate(){
        let sum = 0, numEle = 0;
        this.subjectList.forEach(subject => {
            sum+= subject.avg;
            numEle++;
        });

        return sum*1.0 / numEle;
    }
    
}

//--------------------------------------------------------------------------------
//initial value for test
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = [100, 150, 120, 200, 180, 250, 210];
var subjs = [
    [new MySubject("Math", 85, 90, 88),
    new MySubject("English", 78, 82, 80),
    new MySubject("Science", 78, 82, 80),
    new MySubject("Something",70,80,20)],

    [new MySubject("Math_2", 85, 90, 88),
    new MySubject("English_2", 78, 82, 80),
    new MySubject("Science_2", 78, 82, 80),
    new MySubject("Something_2",70,80,20)],

    [new MySubject("Math_3", 85, 90, 88),
    new MySubject("English_3", 78, 82, 80),
    new MySubject("Science_3", 78, 82, 80),
    new MySubject("Something_3",70,80,20)],

    [new MySubject("Math_4", 85, 90, 88),
    new MySubject("English_4", 78, 82, 80),
    new MySubject("Science_4", 78, 82, 80),
    new MySubject("Something_4",70,80,20)]

];

var subjs2 = [
new Semester(1,
[new MySubject("Math", 85, 90, 88),
new MySubject("English", 78, 82, 80),
new MySubject("Science", 78, 82, 80),
new MySubject("Something",70,80,20)]),
new Semester(2,
[new MySubject("Math_2", 85, 90, 88),
new MySubject("English_2", 78, 82, 80),
new MySubject("Science_2", 78, 82, 80),
new MySubject("Something_2",70,80,20)]),
new Semester(3,
[new MySubject("Math_3", 85, 90, 88),
new MySubject("English_3", 78, 82, 80),
new MySubject("Science_3", 78, 82, 80),
new MySubject("Something_3",70,80,20)]),
new Semester(4,
[new MySubject("Math_4", 85, 90, 88),
new MySubject("English_4", 78, 82, 80),
new MySubject("Science_4", 78, 82, 80),
new MySubject("Something_4",70,80,20)])

];
//--------------------------------------------------------------------------------------
