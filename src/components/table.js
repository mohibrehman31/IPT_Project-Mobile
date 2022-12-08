import * as React from "react";
import { DataTable } from "react-native-paper";
import { ScrollView, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
const Table = () => {
  const data = [
    { label: "P", value: "0" },
    { label: "A", value: "1" },
    { label: "L", value: "2" },
  ];
  const [value, setValue] = React.useState(null);
  const optionsPerPage = [2, 3, 4];
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
  const [states, setStates] = React.useState([
    {
      id: 1,
      name: "David",
      points: { data },
    },
    {
      id: 2,
      name: "John",
      points: { data },
    },
    {
      id: 3,
      name: "Sam",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 4,
      name: "Johanson",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 1,
      name: "David",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 2,
      name: "John",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 3,
      name: "Sam",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 4,
      name: "Johanson",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 1,
      name: "David",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 2,
      name: "John",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 3,
      name: "Sam",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 4,
      name: "Johanson",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 1,
      name: "David",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 2,
      name: "John",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 3,
      name: "Sam",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
    {
      id: 4,
      name: "Johanson",
      points: [3, 4, 8, 2, 5, 3, 9, 5, -4, -6, 2],
    },
  ]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Roll no</DataTable.Title>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Attendance</DataTable.Title>
        </DataTable.Header>
        {states.map((x) => (
          <DataTable.Row>
            <DataTable.Cell>{x.id}</DataTable.Cell>
            <DataTable.Cell>{x.name}</DataTable.Cell>
            <DataTable.Cell>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder="Enter"
                value={x.value}
                onChange={(item) => {
                  setValue(item.value);
                }}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={(page) => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={"Rows per page"}
        />
      </DataTable>
    </ScrollView>
  );
};

export default Table;

const styles = StyleSheet.create({
  dropdown: {
    margin: 20,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});