import logo from './logo.svg';
import { useState, useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Tabs, Tab} from 'react-bootstrap';

import GPAForm from './calculateGPAForm';
import useLocalStorage from 'react-localstorage-hook';

import SemesterTable from './semesterTable';




function App() {
  const [dataItems, setDataItems] = useLocalStorage("dataItems",[]);
 // const [dataItems, setDataItems] = useLocalStorage();


 
  // set iteration key name
  

  // use key name to retrieve the corresponding value
 

  // console.log the iteration key and value
  //console.log('Key: ' + key + ', Value: ' + v);

 
      
    
          
        
    
  return (
      <div className='wrapper' style={{width:'80%',margin:"50px auto"}}>
        <h1 style={{textAlign:'center', fontWeight:'300',fontFamily:'Ubuntu', color:'#B82D18'}}>My GPA</h1>
       <div className="tab-wrapper">
      <div className='container-fluid '  >
        <div className="row">
          <div className="col-sm-12"style={{ boxShadow: "1px 1px 10px  #9E9E9E", borderRadius:"10px"}}>
            
            <Tabs defaultActiveKey="grade" >
              
              <Tab  justify variant="tabs" eventKey="grade" title="Grade" >
                <div className="tab-item-wrapper">
                  <h5>Calculate GPA</h5>
                  <GPAForm/>
                </div>
              </Tab>

              <Tab eventKey="courselist" title="Course List">
                <div className="tab-item-wrapper">
                  <h5 style={{textAlign:'center', fontSize:'24px'}}>Computer Science</h5>
                  <SemesterTable  data={dataItems} setDataItems={setDataItems}/>
                
                 
                </div>
              </Tab>

             
            </Tabs>

          </div>
        </div>
      </div>
      </div>
    </div>
  ); 
}

export default App;
