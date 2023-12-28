import React, { useState } from "react";
import { useEffect } from "react";

const Problem1 = () => {
  const [allData, setAllData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [addTask, setAddTask] = useState({
    name: "",
    status: "",
  });

  const handleChange = (e) => {
    setAddTask({ ...addTask, [e.target.name]: e.target.value });
  };

  const hanldeTaskAdd = (e) => {
    e.preventDefault();

    setAllData([...allData, addTask]);

    setTableData([...tableData, addTask]);

    setAddTask({
      name: "",
      status: "",
    });
  };

  const [show, setShow] = useState("all");
  const handleClick = (val) => {
    setShow(val);
  };

  useEffect(() => {
    if (show == "all") {
      setTableData(allData);
    } else if (show == "active") {
      const activeData = allData?.filter(
        (data) => data?.status.toLowerCase() == "active"
      );
      setTableData(activeData);
    } else if (show == "completed") {
      const completedData = allData.filter(
        (data) => data.status.toLowerCase() == "completed"
      );
      setTableData(completedData);
    }
  }, [show]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={hanldeTaskAdd}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={addTask.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                value={addTask.status}
                onChange={handleChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data, index) => (
                <tr key={index}>
                  <td>{data?.name}</td>
                  <td>{data?.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
