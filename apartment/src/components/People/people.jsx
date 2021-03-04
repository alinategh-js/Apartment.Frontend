import React, { useState, useEffect } from "react";
import FilterList from "../../common/filterList";
import Pagination from "../../common/pagination";
import { getItemList, getPeopleByPage } from "./peopleServices";

const People = () => {
  const [people, setPeople] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({ id: 0 });
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(5);
  const [size, setSize] = useState(5);

  useEffect(async () => {
    const { data } = await getPeopleByPage();
    setPeople(data.people);
    setPages(data.totalPages);
    setPage(1);
    setItemList(getItemList());
  }, []);

  const pageSelected = async (page) => {
    setPage(page);
    const { data } = await getPeopleByPage(page, size, selectedItem.isOwner);
    setPeople(data.people);
  };

  const handleSelectedItem = async (item) => {
    const {data} = await getPeopleByPage(page, pages, item.isOwner)
    setSelectedItem(item);
    setPeople(data.people)
    setPages(data.totalPages)
  };

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
              {people.length > 0 ? (
                people.map((person, index) => (
                  <tr key={person.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{person.fullName}</td>
                    <td>{person.phoneNumber}</td>
                    <td>{person.unitId}</td>
                    <td>{person.isOwner ? "Owner" : "Resident"}</td>
                    <td></td>
                  </tr>
                ))
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>

          <Pagination
            pages={pages}
            currentPage={page}
            onPageSelect={(page) => pageSelected(page)}
          />
        </div>
      </div>
    </>
  );
};

export default People;
