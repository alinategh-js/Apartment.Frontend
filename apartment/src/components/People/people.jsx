import React, { Component } from "react";
import FilterList from "../../common/filterList";
import { getPeople } from "./peopleServices";

class People extends Component {
  state = {
    people: [],
    itemList: [
      {
        id: 1,
        isOwner: 1,
        name: "Owner"
      },
      {
        id: 2,
        isOwner: 0,
        name: "Resident"
      },
    ],
    selectedItem: { id: 0 },
  };

  componentDidMount() {
      this.setState({
        people: getPeople(),
      });
    ;
  }

  handleSelect = (item) => {
    //api call
    
    this.setState({
      selectedItem: item,
    });
    
  }

  render() {
    const { people, itemList, selectedItem } = this.state;
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
              onSelect={(item) => this.handleSelect(item)}
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
                      <th scope="col">نام</th>
                    <th scope="col">شماره تلفن</th>
                    <th scope="col">شماره واحد</th>
                    <th scope="col">صاحب است؟</th>
                    </tr>
                  </thead>
                  <tbody>
                    {people.map((person, index) => (
                      <tr>
                        <th scope="row">{index + 1}</th>
                      <td>{person.name}</td>
                      <td>{person.phone}</td>
                      <td>{person.unitId}</td>
                      <td>{person.isOwner ? 'Yes' : 'No'}</td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
