import {useState} from "react";
import './Home.css'

export default function Home(){

    const initState = {
        name: "",
        electrons: 119,
    };

    const [element, setElement] = useState(initState);

    function handleSubmit(event){
        event.preventDefault();

        function postElement(){
            try{
                fatch(`http://127.0.0.1:8888/api/elements`, {
                    method: "POST",
                    headers: {
                        "Accept": 'application/json',
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(element)
                }).then(res=>res.json()).then(
                    res=>{
                        console.log(res)
                    }
                );
            }catch(error){
                console.log(`Ups! Something went wrong 🥺`,error)
            }
        }
        postElement();
    }

    function handleChange(event){
        setElement({...element, [event.target.name]: event.target.value});
    }

    return (
        <>
            <div className={"addBackground"}>
                <div className={"addEmployeeContainer"}>
                    <h1>Dodaj Pierwiastek</h1>
                    <form onSubmit={handleSubmit} className={"addElementContainerForm"}>
                        <input type="text" name="name" value={element.name} onChange={handleChange} placeholder="Podaj nazwę pierwiastka" />
                        <input type="number" min="119" name="electrons" value={element.electrons} onChange={handleChange} placeholder="Podaj liczbę elektornów" />
                        <div className={"addEmployeeBtns"}>
                            <button type="submit" className={"addBtn"} onClick={handleSubmit}>Dodaj do bazy</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}