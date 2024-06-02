import logo from './logo.svg';
import './App.css';
import Table from './components/table';
import College from './college.json'
import Filter from './components/Filter';
import { useEffect, useState } from 'react';
function App() {
  const [filterOption, setFilterOption] = useState("cd_rank");
  const [order, setOrder] = useState("asc");
  const [tableData, setTableData] = useState(College);
  const [count, setcount] = useState(10)
  const [serachcollege, setserachcollege] = useState("")

  useEffect(() => {
    let sortedData = [...College];

    if (filterOption === "cd_rank") {
      sortedData.sort((a, b) => {
        return order === "asc" ? a.cdrank - b.cdrank : b.cdrank - a.cdrank;
      });
    } else if (filterOption === "fees") {
      sortedData.sort((a, b) => {
        const feesA = parseInt(a.courses.fees.replace(/[^0-9]/g, ''), 10);
        const feesB = parseInt(b.courses.fees.replace(/[^0-9]/g, ''), 10);
        return order === "asc" ? feesA - feesB : feesB - feesA;
      });
    } else if (filterOption === "review_rating") {
      sortedData.sort((a, b) => {
        const ratingA = parseFloat(a.rating);
        const ratingB = parseFloat(b.rating);
        return order === "asc" ? ratingA - ratingB : ratingB - ratingA;
      });
    }
    if (serachcollege) {
      sortedData = sortedData.filter(college => 
        college.name.toLowerCase().includes(serachcollege.toLowerCase())
      );
    }

    setTableData(sortedData);
  }, [filterOption, order,serachcollege]);
  const handleFilterChange = (e) => {
    
    setFilterOption(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };
  const handlesearchcollege=(e)=>{
     setserachcollege(e.target.value)
  }

   const fetchMoreData=()=>{
    setTimeout(() => {
      setcount(count+10)
    }, 1500);
   }
  
  return (
    <div className="App  bg-gray-100 ">
      <h1 className='text-3xl  tracking-wide text-center  font-bold  '>College Dunia</h1>

      <Filter filteroption={filterOption} order={order} handleoption={handleFilterChange} handleorder={handleOrderChange} handleserach={handlesearchcollege}  serachcollege={serachcollege} />
      <Table  tabledta={tableData.slice(0,count)} length={50} fetchMoreData={fetchMoreData}  />
    </div>
  );
}

export default App;
