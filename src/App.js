import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import axios from 'axios';
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";


function App() {
  const [data, setData] = useState([])
  const [showAdd, setShowAdd] = useState(false);
  const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(res.data);
  }
  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, [data])
  const refreshData = () => {
    setShowAdd(false);
    fetchData();
  }
  return (
    <div className="App">
      <h2 className="text-center py-3 h2">Test seta</h2>
      <div className="container">
        <div className="text-right py-2">
          <button
            onClick={() => setShowAdd(!showAdd)}
            className={`btn ${showAdd ? 'btn-danger' : 'btn-primary'}`}>
            {showAdd ? 'Close' : 'Create'}
          </button>
        </div>

        {showAdd && <NewPost refreshData={refreshData} />}

        <Posts data={data} />

      </div>

    </div>
  );
}

export default App;
