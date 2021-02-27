import React, { useState, useEffect } from "react";
import FilterList from "../../common/filterList";
import Pagination from "../../common/pagination";
import { getItemList, getPeople } from "./peopleServices";

const People =()=>{
  const [people, setPeople]=useState([])
  const [itemList, setItemList]=useState([])
  const [selectedItem, setSelectedItem]=useState({id:0})
  const [page, setPage]=useState(1)
  const [pages, setPages]= useState(5)


useEffect(()=>{
  setPeople(getPeople())
  setPages(3)
  setPage(1)
  setItemList(getItemList())
},[]);
  

  const pageSelected = async (page) => {
    // const people = await getPeople(page);
      setPage(page)
  };

  const handleSelectedItem = async (item) => {
    //api call
   setSelectedItem(item)
      
  };

  
    
     const peopleCount = people.length;

    return (
      <>
        <div className="row m-2">
          <div className="col-3">
            <FilterList
              items={itemList}
              keyField="id"
              valueField="name"
              selectedItem={selectedItem}
              onSelect={(item) => handleSelectedItem(item)}
            />
          </div>
          <div className="col">
            {people.length > 0 ? (
              <>
                <h3>There are {peopleCount} people</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Unit Number</th>
                      <th scope="col">Owner/Resident</th>
                    </tr>
                  </thead>
                  <tbody>
                    {people.map((person, index) => (
                      <tr key={person.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{person.name}</td>
                        <td>{person.phone}</td>
                        <td>{person.unitId}</td>
                        <td>{person.isOwner ? "Owner" : "Resident"}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Pagination
                  pages={pages}
                  currentPage={page}
                  onPageSelect={(page) => pageSelected(page)}
                />
              </>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </>
    );
  }


export default People;
