import React, { Component } from "react";
import FilterList from "../../common/filterList";
import Pagination from "../../common/pagination";
import { getItemList, getPeople } from "./peopleServices";

class People extends Component {
  state = {
    people: [],
    itemList: getItemList(),
    selectedItem: { id: 0 },
    pages: 0,
    page: 1,
  };

  async componentDidMount() {
    const { data } = await getPeople();
    this.setState({
      people: data.data,
      pages: data.total_pages,
      page: 1,
    });
  }

  pageSelected = async (page) => {
    const { data } = await getPeople(page);
    this.setState({
      people: data.data,
      page: page,
    });
  };

  handleSelectedItem = (item) => {
    //api call
    const firstPage = 1;
    const people = getPeople(firstPage, item.isOwner);

    this.setState({
      selectedItem: item,
      people,
    });
  };

  render() {
    const { people, itemList, selectedItem, page, pages } = this.state;
    const peopleCount = people.length;

    return (
      <>
        <div class="row m-2">
          <div className="col-3">
            <FilterList
              items={itemList}
              keyField="id"
              valueField="name"
              selectedItem={selectedItem}
              onSelect={(item) => this.handleSelectedItem(item)}
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
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{person.name}</td>
                        <td>{person.phone}</td>
                        <td>{person.unitId}</td>
                        <td>{person.isOwner ? "Yes" : "No"}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Pagination
                  pages={pages}
                  currentPage={page}
                  onPageSelect={(page) => this.pageSelected(page)}
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
}

export default People;
