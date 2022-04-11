 
import React from 'react';
 import './style.css'
 import pic from './headerComponent/assets/antman.jpg';
 import pic1 from './headerComponent/assets/hulk.jpg';
 import pic2 from './headerComponent/assets/iron-man.jpg';
class Imgblock extends React.Component {
 constructor(props){
super(props);


 }

render(){
     
return(
   
 
     <div id="container">

        <div id="row">
            <div id="movieblock">
            <img alt="pic"   src = {pic}/>
                <div className="moviename">
                    <strong>Antman</strong>
                    <span className='ratings'  style={{color: 'ratings' > "7"? "red" : "green"}} >5.0</span>
                </div>
                <div className="movieDescription">
                    antaman  asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd
                    asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd
                </div>
            </div>
            <div id="movieblock">
                <img src={pic1} />
                <div className="moviename">
                    <strong>Hulk</strong>
                    <span className='ratings' style={{color: 'ratings' <= "7" ? "red" : "green"}}   >7.9</span>
                </div>
                <div class="movieDescription">
                    antaman  asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd
                    asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd
                </div>
                
            </div>
            
            <div id="movieblock">
                <img src={pic2}  />
                <div className="moviename">
                    <strong>Iron Man</strong>
                    <span className='ratings' style={{color: 'ratings' <= "7" ? "red" : "green"}}  >8.9</span>
                </div>
                <div className="movieDescription">
                    antaman  asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd
                    asfghhfgjgfssfjfjvdjffduyfvjhj   fjdfv vffjdv vfdv hjjfvj jvfdjffjhd
                </div>
                </div>
        </div>
        

     </div>  
 

);
}

} export default Imgblock;