import React from "react";

function FetchData() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://buzz-my-day-app-xaqh.onrender.com/coffee')
      .then((response) => response.json())
      .then((data) => setRecords({ data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {records.map((list, index) => (
          <li key={index}>
            {list.id} | {list.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
