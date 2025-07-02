import './componentStyle.css';

function clockComponent(props){
   console.log(props.city);
    return(     
        <div className="clock">
            <h2>{props.city}</h2>
            <h1>{props.time}</h1>
            <h6>{props.zone}</h6>
        </div>
    );
}

export default clockComponent