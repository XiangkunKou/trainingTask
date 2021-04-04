import axios from "axios";
import {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom"

const Home = () => {
    let history = useHistory();
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        loadTodo();
    },[]);

    const loadTodo = async() => {
        const result = await axios.get("http://localhost:3003/todo");
        console.log(result);
        setTodo(result.data);
    }

    const [oneinfo, setOneinfo] = useState({
        Description:"",
        Category:"",
        Content:""

    });

    const {Description, Category, Content} = oneinfo;

    const onInputChange = e => {
        setOneinfo({...oneinfo,[e.target.name]:e.target.value})
    };

    const [option,setOption] = useState("");


    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/todo",oneinfo);
        history.push("/");
        loadTodo();
    };

    const deleteInfo = async id => {
        await axios.delete(`http://localhost:3003/todo/${id}`);
        loadTodo();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="row">
                            <label htmlFor="inputDescription" className="col-sm-3 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control" placeholder="Description" name="Description" value={Description} onChange={e => onInputChange(e)}/>
                            </div>
                        </div>

                        <div className="row">
                        <label htmlFor="selectCategory" className="col-sm-3 col-form-label">Category</label>
                            <div className="col-sm-8">
                                
                                <select className="form-control" name="Category" value={Category} onChange = {(e) =>{
                                    setOneinfo({...oneinfo,[e.target.name]:e.target.value})
                                }

                                }>
                                    <option value="html">html</option>
                                    <option value="css">css</option>
                                    <option value="js">js</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <label htmlFor="inputContent" className="col-sm-3 col-form-label">Content</label>
                            <div className="col-sm-8">
                                <textarea type="Content" className="form-control" id="inputContent" name="Content" value={Content} onChange = {e => onInputChange(e)}/>
                            </div>
                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    </div>
                <div className="col-md-8">
                    <button onClick>Delete</button>
                    <table className="table border shadow">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category</th>
                            <th scope="col">Operate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todo.map((info,index) => (
                                    <tr>
                                    <th scope="row"><input type="checkbox"></input></th>
                                    <td><Link to={`/todo/check/${info.id}`}>{info.Description}</Link></td>
                                    <td>{info.Category}</td>
                                    <td><button className="btn btn-outline-primary" onClick={() => deleteInfo(info.id)}>Delete</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;