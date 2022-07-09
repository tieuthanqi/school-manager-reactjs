import React, { useEffect, useState, Fragment } from "react";
import { Box, Card, CardContent, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllClass,
  deleteClass,
  resetTeacherOfClass,
  getClassBySearch,
} from "../../../../../services/class-service";
import Table from "../../../../table/Table";
import ClassComponent from "./ClassComponent";
import { Route } from "react-router";

const ClassManager = () => {
  const dispatch = useDispatch();
  const listClass = useSelector((state) => state.class.listClass);
  console.log(listClass);
  const header = [
    "STT",
    "ID",
    "Tên Lớp",
    "Sỉ số",
    "Trường",
    "Giáo viên chủ nhiệm",
    "",
  ];
  const renderHead = (item, index) => <th key={index}>{item}</th>;
  const itemsPerPage = 10;
  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.total}</td>
      <td>{item.schoolName}</td>
      <td>{item.teacherName}</td>
      <td>
        <Link to={"class/" + item.id}>
          <Button
            className="m-2 text-warning"
            variant="outlined"
            color="default"
          >
            Sửa
          </Button>
        </Link>
        <Link to={"list-of-students-by-class/" + item.id}>
          <Button variant="outlined" color="primary" className="m-2">
            Học sinh
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="default"
          className="m-2 text-danger"
          onClick={() => handleDelete(item)}
        >
          Xóa
        </Button>
      </td>
    </tr>
  );
  const handleDelete = (item) => {
    if (window.confirm("Bạn có muốn xóa lớp học " + item.id + " ?")) {
      //eslint-disable-line
      dispatch(deleteClass(`/class/manager?id=${item.id}`, item.id));
    }
  };
  const handleReset = () => {
    if (
      window.confirm(
        "Bạn có muốn làm mới lại giáo viên chủ nhiệm trong lớp học ?"
      )
    ) {
      dispatch(resetTeacherOfClass());
    }
  };
  useEffect(() => {
    dispatch(getAllClass("/class/manager"));
  }, [dispatch]);

  useEffect(() => {}, [listClass]);
  const [search, setSearch] = useState("");
  const onClickSignIn = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    dispatch(getClassBySearch(search));
  };
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <h4>Quản lý lớp học</h4>
          </div>
          <Box className="card-header--actions">
            <Link to="class/add">
              <Button className="m-2" variant="contained" color="primary">
                Thêm mới
              </Button>
            </Link>
            <Button
              className="m-2"
              variant="contained"
              color="default"
              onClick={() => handleReset()}
            >
              Làm mới GVCN
            </Button>
            <form
              onSubmit={onClickSignIn}
              className="d-none d-sm-inline-block form-inline mb-10 "
            >
              <div className="p-3">
                <TextField
                  className="m-2"
                  type="text"
                  id="search-id"
                  placeholder="Tìm kiếm"
                  name="search"
                  onChange={(event) => onClickSignIn(event)}
                />
              </div>
            </form>
          </Box>
        </div>
        <CardContent className="p-0">
          <div className="table-responsive">
            {/* <div className="card-body"> */}
            {listClass != null ? (
              <Route
                exact
                component={() => (
                  <ClassComponent
                    data={listClass}
                    itemsPerPage={itemsPerPage}
                    // searchByData={searchByData}
                    tableHead={header}
                  />
                )}
              />
            ) : (
              <div></div>
            )}

            {/* </div> */}
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
};
export default ClassManager;
