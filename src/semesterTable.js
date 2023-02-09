import { useState, useRef, useEffect } from "react";

import './App.css'
import useLocalStorage from 'react-localstorage-hook';
import { Container, Row, Col, Form, Button,Table,Card } from "react-bootstrap";
import GPAForm from "./calculateGPAForm";
import jsonData from './data/cs-2019.json';

import { BsXCircleFill } from "react-icons/bs";;




const styles = {
  textCenter: { textAlign: "center" },
  textRight: { textAlign: "right" },
  
};
var v



function SemesterTable({data,setDataItems}){
  const [dataRows, setDataRows] = useState();
  
  const [totalGPAC, setTotalGPAC] = useState(0);
  const [GPA12019, setGPA12019] = useState(0);
  const [GPA22019, setGPA22019] = useState(0);
  const [GPA32019, setGPA32019] = useState(0);
  const [GPA12020, setGPA12020] = useState(0);
  const [GPA22020, setGPA22020] = useState(0);
  const [GPA32020, setGPA32020] = useState(0);
  const [GPA12021, setGPA12021] = useState(0);
  const [GPA22021, setGPA22021] = useState(0);
  const [GPA32021, setGPA32021] = useState(0);
  const [GPA12022, setGPA12022] = useState(0);
  const [GPA22022, setGPA22022] = useState(0);
  const [GPA32022, setGPA32022] = useState(0);

  



 useEffect(() => {
   
    let sum = 0;    
    let credit = 0;

    let amount = 0;
    let total = 0
    let totalGPAc = 0
    let cCredit = 3
   
    let sem12019 = 0
    let sem22019 = 0
    let sem32019=0;
    let sem12020=0;
    let sem22020=0;
    let sem32020=0;
    let sem12021=0;
    let sem22021=0;
    let sem32021=0;
    let sem12022=0;
    let sem22022=0;
    let sem32022=0;

    let count12019 = 0
    let count22019 = 0
    let count32019=0;
    let count12020=0;
    let count22020=0;
    let count32020=0;
    let count12021=0;
    let count22021=0;
    let count32021=0;
    let count12022=0;
    let count22022=0;
    let count32022=0;

  
    let GPA12019 = 0
    let GPA22019 = 0
    let GPA32019 = 0
    let GPA12020 = 0 
    let GPA22020 =0
    let GPA32020 =0 
    let GPA12021 =0
    let GPA22021 = 0 
    let GPA32021 = 0
    let GPA12022 = 0
    let GPA22022 = 0
    let GPA32022 = 0
    
    
   const z = data.map((v, i) => {
    
       
     
       if (v.sem == '1' && v.year=='2019'){
        sem12019 +=  (grade(v.grade)*cCredit)
        amount +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count12019 += cCredit
        total += sem12019/credit

         GPA12019= sem12019/count12019
        
        
      }
      else if (v.sem == '2' && v.year=='2019'){
        
        sem22019 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count22019 += cCredit
        GPA22019 = sem22019/count22019
       
        
      }else if (v.sem == '3' && v.year=='2019'){
        sem32019 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count32019 += cCredit
        GPA32019 = sem32019/count32019
        
        
      }else if (v.sem == '1' && v.year=='2020'){
        sem12020 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count12020 += cCredit
        GPA12020 = sem12020/count12020
        
        
      }else if (v.sem == '2' && v.year=='2020'){
        sem22020 +=  (grade(v.grade)*3)
        credit = credit + cCredit
        count22020 += cCredit
        GPA22020 = sem22020/count22020
       
        
        
      }else if (v.sem == '3' && v.year=='2020'){
        sem32020 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count32020 += cCredit
        GPA32020 = sem32020/count32020
        
        
      }else if (v.sem == '1' && v.year=='2021'){
        sem12021 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count12021 += cCredit
        GPA12021 = sem12021/count12021
        
        
      }else if (v.sem == '2' && v.year=='2021'){
        sem22021 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count22021 += cCredit
        GPA22021= amount/credit
        
        
      }else if (v.sem == '3' && v.year=='2021'){
        sem32021 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count32021 += cCredit
        GPA32021 = sem32021/count32021
        
        
      }else if (v.sem == '1' && v.year=='2022'){
        sem12022 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count12022 += cCredit
        GPA12022 = sem12022/count12022
        
        
      }else if (v.sem == '2' && v.year=='2022'){
        sem22022 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count22022 += cCredit
        GPA22022  = sem22022/count22022
        
        
      }else if (v.sem == '3' && v.year=='2022'){
        sem32022 +=  (grade(v.grade)*cCredit)
        credit = credit + cCredit
        count32022 += cCredit
        GPA32022  = sem32022/count32022
        
        
      }
     
      sum = (sem12019+sem12020+sem12021+sem12022+sem22019+sem22020+sem22021+sem22022+sem32019+sem32020+sem32021+sem32022)/credit;
     
      totalGPAc = sum

     return ( 
      
    
        
      
       
        <tr key={i}>
        <td style={styles.textCenter}>{v.sem}/{v.year}</td>
        <td style={styles.textCenter}>{v.course}</td>
        <td style={styles.textCenter}>{v.grade}</td>
        <td style={{textAlign: 'center'}}>{cCredit}cr</td>
        <td style={{textAlign: 'center'}}><BsXCircleFill style={{color:'#bb0a1e'}} onClick={() => deleteClick(i)}/></td>

       
       </tr>
      
      
       
     )
      
      
    
   })

   
    
    setDataRows(z);
    
   // setTotalGPA(total);
    setGPA12019(GPA12019)
    setGPA22019(GPA22019)
    setGPA32019(GPA32019)
    setGPA12020(GPA12020)
    setGPA22020(GPA22020)
    setGPA32020(GPA32020)
    setGPA12021(GPA12021)
    setGPA22021(GPA22021)
    setGPA32021(GPA32021)
    setGPA12022(GPA12022)
    setGPA22022(GPA22022)
    setGPA32022(GPA32022)
    
    setTotalGPAC(totalGPAc.toFixed(2))
     
    

    
    //setTotalDiscount(discnt);
 }, [v]);

  const grade = (v) =>{
    if (v =="A") {
      v=4.0;
  } 
  if (v==="A-") {
      v= 3.75;
  } 
  if (v==="B+") {
      v=3.25;
  } 
   if (v==="B") {
      v=3.0;
  } 
  if (v==="B-") {
      v=2.75;
  } 
  if (v==="C+") {
      v=2.25;
  } 
  if (v==="C") {
      v=2;
  } 
  if (v==="C-") {
      v=1.75;
  } 
  if (v==="D") {
      v=1.0;
  } 
  if (v==="F"){
      v=0.0;
  }
  if (v==="W") {
      v=0.0;
  }
  return v
  }


  const deleteClick = (i) => {
    data.splice(i,1)
    setDataItems([...data])
  }
  
  const GPA=(G,title)=>{
    if (G != 0){

      return(

        <Card style={{ width: '14rem' ,backgroundColor:'#f5f5f5',borderRadius:'10px',boxShadow:'1px 1px 5px #9E9E9E', marginBottom:'10px'}}>
      
      
      <Card.Body>
      <Card.Title style={{color:'#bb0a1e', fontSize:'16px'}}>{title}</Card.Title>
        <Card.Text style={{fontSize:'12px', fontWeight:'600'}}>
          GPA <Button style={{backgroundColor:'#bb0a1e', border:'none', borderRadius:"50px"}} variant="primary">{G.toFixed(2)}</Button>
        </Card.Text> 
      </Card.Body>
    </Card>

      )
    }
  }
    return(
      <Container >
    
       <div className="gpac-dis" style={{width:"50px",color:"#FFFF", backgroundColor:'#bb0a1e', textAlign:'center', float:'right', marginBottom:"10px", borderRadius:'30px'}}>{totalGPAC}</div>
       
      <Table class="table table-borderless" style={{backgroundColor:'#f5f5f5',borderRadius:'10px',boxShadow:'1px 1px 5px #9E9E9E'}}>
       
      <thead >
      <tr>
        <th style={{textAlign:'center',border:'0'}}>semester</th>
        <th style={{textAlign:'center',border:'0'}}>Course</th>
        <th style={{textAlign:'center'}}>Grade</th>
        <th style={{textAlign:'center'}}>credit</th>
        <th style={{textAlign:'center'}}></th>
    </tr>        
    </thead>
    <tbody style={{border:'none'}}>{dataRows}</tbody> 
        
   </Table>

   

    <div>
    {GPA(GPA12019,'semester 1/2019')}{GPA(GPA22019,'semester 2/2019')}{GPA(GPA32019,'semester 3/2019')}{GPA(GPA12020,'semester 1/2020')}{GPA(GPA22020,'semester 2/2020')}{GPA(GPA32020,'semester 3/2020')}{GPA(GPA12021,'semester 1/2021')}{GPA(GPA22021,'semester 2/2021')}{GPA(GPA32021,'semester 3/2021')}{GPA(GPA12022,'semester 1/2022')}{GPA(GPA22022,'semester 2/2022')}{GPA(GPA32022,'semester 3/2022')}</div>
     
    

   </Container>
  );
  

}

 
export default SemesterTable;