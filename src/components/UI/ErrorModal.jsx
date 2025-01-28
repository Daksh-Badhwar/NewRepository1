    import React from "react";
    import ReactDom from "react-dom"
    import Card from"./Card";
    import Button from "./Button";
    import "./ErrorModal.css";

   const Backdrop=(props)=>{
    return <div className="backdrop" onClick={props.onConfirm}></div>
   }
   const ModalOverlay=(props)=>{
    return(
    <Card className="modal">
    <header className="header">
    <h1> {props.title}</h1>
    </header>
    <div className="content">
    <p>{props.message} </p>
    </div>
    <footer className="actions">
    <Button onClick={props.onConfirm}>Okay</Button>
    </footer>

</Card>)
   }



    const ErrorModal=(props)=>{
    return (
        
        <React.Fragment>
         { ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>,
         document.querySelector("#backdrop-root"))}
        {/*<div className="backdrop" onClick={props.onConfirm}></div>*/}
        {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
        document.querySelector("#overlay-root"))}

           {/* <Card className="modal">
            <header className="header">
            <h1> {props.title}</h1>
            </header>
            <div className="content">
            <p>{props.message} </p>
            </div>
            <footer className="actions">
            <Button onClick={props.onConfirm}>Okay</Button>
            </footer> 
        
    </Card>*/}
    </React.Fragment>);
    }
    export default ErrorModal;