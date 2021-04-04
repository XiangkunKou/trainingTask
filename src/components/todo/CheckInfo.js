import axios from "axios";
import {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom"

const CheckInfo = () => {
    let history = useHistory();
    const {id} = useParams();
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        loadTodo();
    },[]);

    const loadTodo = async() => {
        const result = await axios.get("http://localhost:3003/todo");
        console.log(result);
        setTodo(result.data);
    }

    const loadOneinfo = async () => {
        const result = await axios.get(`http://localhost:3003/todo/${id}`);
        setOneinfo(result.data);
    }

    const [oneinfo, setOneinfo] = useState({
        Description:"",
        Category:"",
        Content:""

    });

    const {Description, Category, Content} = oneinfo;



    useEffect(() => {
        loadOneinfo();
    },[]);
    return (
        <div className="container">
            <div className="row">
            <div className="row">
                            
                            <div className="col-sm-8">
                                <h1> {Content}</h1>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default CheckInfo;