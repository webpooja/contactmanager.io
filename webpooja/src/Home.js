import React from 'react';





const Home=(props)=> {
 const {person} = props;
  return (
    <div className="card card-body mb-3">
   
    <ul className="list-group">
    <li className="list-group-item">name : {person.name}</li>
        <li className="list-group-item">age : {person.age}</li>
        <li className="list-group-item">qua : {person.qua}</li>
        

    </ul>

    </div>
    
    
  );
}


export default Home;
