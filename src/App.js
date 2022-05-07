import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (res) {
        setData(res.data)
      }
      setTimeout(() => {
        setLoading(false)
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {
        loading ?
          <p>Yükleniyor</p> :
          data.length > 0 ?
            <ul>
              {
                data.map((user) => (
                  <li key={user.id}>
                    {user.username + ": " + user.name}
                  </li>
                ))
              }
            </ul> :
            <p>Sonuç bulunamadı!</p>
      }
    </div>
  );
}

export default App;
