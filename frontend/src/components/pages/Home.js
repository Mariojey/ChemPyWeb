import {useState, useEffect} from "react";
import './Home.css'

export default function Home(){

    const initState = {
        name: "",
        electrons: 119,
    };

    const [element, setElement] = useState(initState);
    const [elements, setElements] = useState([]);

    const [refresh, setRefresh] = useState(true);

    function handleSubmit(event){
        event.preventDefault();
        console.log("Clicked")

        function postElement(){
            try{
                fetch(`http://127.0.0.1:8888/api/elements`, {
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
        setRefresh(ref => !ref)
    }

    function handleChange(event){
        console.log(element)
        setElement({...element, [event.target.name]: event.target.value});
    }

    useEffect(() => {
        function getElements (){
            try{
                fetch(`http://127.0.0.1:8888/api/elements`, {
                    method: "GET"
                }).then(res => res.json())
                .then(data => {
                    console.log(data.elements[0].name)
                   setElements(data.elements)
                })
            }catch(error){
                console.log(error)
            }
        }
        getElements()
    },[refresh])

    return (
        <>
            <div className={"addBackground"}>
                <div className={"addEmployeeContainer"}>
                    <h1>Dodaj Pierwiastek</h1>
                    <h3>Jeżeli odkryłes nowy pierwiastek dodaj go do naszej badawczej bazy danych, a my po sprawdzeniu dodamy go do aplikacji</h3>
                    <form onSubmit={handleSubmit} className={"addElementContainerForm"}>
                        <input type="text" name="name" value={element.name} onChange={(event) => handleChange(event)} placeholder="Podaj nazwę pierwiastka" />
                        <input type="number" min="119" name="electrons" value={element.electrons} onChange={(event) => handleChange(event)} placeholder="Podaj liczbę elektornów" />
                        <div className={"addEmployeeBtns"}>
                            <button type="submit" className={"addBtn"} onClick={(event) => handleSubmit(event)}>Dodaj do bazy</button>
                        </div>
                    </form>
                </div>
                <div className={"addEmployeeContainer"}>
                    {
                        elements.map((item) => {return(<>                                
                                <h4 key={item.id} className={"h4container"}>{item.name}</h4>
                                </>

                        )})
                    }
                </div>
            </div>
        </>
    )
}