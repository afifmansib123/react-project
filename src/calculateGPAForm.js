import { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import jsonData from './data/cs-2019.json';
import useLocalStorage from 'react-localstorage-hook'


const couseList = jsonData.computerScience;

function GPAForm(){
  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);
 

  const grade = useRef();
  const year = useRef();
  const semester = useRef();
  const courseRef = useRef();

    

  
  
  


  const courseChange = (e) => {
    const cid = courseRef.current.value;
    const course = couseList[0].subjects.find((e) => e.code === cid);
    courseRef = e.current.value
    console.log(courseRef)
  }
  
 


  const addItem = () => {
  

   if(courseRef.current.value == "") {
    
    return      

   }

   var semesters = {
    course: courseRef.current.value,
    sem: semester.current.value,
    year: year.current.value,
    grade: grade.current.value
  }; 

    dataItems.push(semesters)
    setDataItems([...dataItems])
}
return(
  <Form>
  <Row className="mb-3">
  <Form.Group   as={Col}>
    <Form.Label>Semester</Form.Label>
    <Form.Select 
    ref={semester}
    //onChange={courseChange}>
    // value={selectedClient}
    
    >
    <option>Select Semester
        
        </option>
      
      {couseList[0].semester.map(i=>
    <option value={i.sem} id={i.sem}>{i.sem}</option>)}
    </Form.Select>
  </Form.Group>
  <Form.Group   as={Col}>
    <Form.Label>Year</Form.Label>
    <Form.Select ref={year}
    // value={selectedClient}
    >
    
    
      <option>Select Year
        
      </option>
      {couseList[0].year.map(i=>
    <option value={i.years} id={i.years}>{i.years}</option>)}
    </Form.Select>
  </Form.Group>
  </Row>
  <Form.Group  className="mb-3">
    <Form.Label >Courses</Form.Label>
    <Form.Select 
    ref={courseRef}
    //value={selectedClient}
    //onChange={courseChange}
    
    >

   
      <option>Select Courses</option>
      
    <option style={{fontWeight:"bold"}} >{couseList[0].groupName}</option>
    {couseList[0].subjects.map(i=>
    <option  id={i.code} >{i.code} {i.name}</option>)}
    <option style={{fontWeight:"bold"}}>{couseList[1].groupName}</option>
    {couseList[1].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
    <option style={{fontWeight:"bold"}}>{couseList[2].groupName}</option>
    {couseList[2].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
    <option style={{fontWeight:"bold"}}>{couseList[3].groupName}</option>
    {couseList[3].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
    <option style={{fontWeight:"bold"}}>{couseList[4].groupName}</option>
    {couseList[4].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
     <option style={{fontWeight:"bold"}}>{couseList[5].groupName}</option>
    {couseList[5].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
     <option style={{fontWeight:"bold"}}>{couseList[6].groupName}</option>
    {couseList[6].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
     <option style={{fontWeight:"bold"}}>{couseList[7].groupName}</option>
    {couseList[7].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
     <option style={{fontWeight:"bold"}}>{couseList[8].groupName}</option>
    {couseList[8].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
     <option style={{fontWeight:"bold"}}>{couseList[9].groupName}</option>
    {couseList[9].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
    <option style={{fontWeight:"bold"}}>{couseList[10].groupName}</option>
    {couseList[10].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
    <option style={{fontWeight:"bold"}}>{couseList[11].groupName}</option>
    {couseList[11].subjects.map(i=>
    <option  id={i.code}>{i.code} {i.name}</option>)}
    </Form.Select>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Grade</Form.Label>
    <Form.Control type="text" placeholder="Enter GRADE"  ref={grade}/>
  </Form.Group>


  <Button variant="primary" type="submit" onClick={addItem} style={{backgroundColor:"#bb0a1e",border:"none"}}>
    ADD
  </Button>
  </Form>
    
  );
  
}
export default GPAForm;