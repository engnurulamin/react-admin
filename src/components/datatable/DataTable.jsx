import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../sources/dtsource";
import { Link } from "react-router-dom";

const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="/users" style={{ textDecoration: "none" }}>
              <div className="view-button">View</div>
            </Link>
            <div className="delete-button">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="data-table">
      <div className="data-table-title">
        Add New User
        <Link
          to="/users/new"
          className="link"
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
      <DataGrid
        className="data-grid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
