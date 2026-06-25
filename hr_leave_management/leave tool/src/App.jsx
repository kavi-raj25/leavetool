import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import LeaveForm from "./components/LeaveForm";
import FilterEmployee from "./components/FilterEmployee";
import LeaveHistory from "./components/LeaveHistory";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  const [employee, setEmployee] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");
  const [leaveType, setLeaveType] = useState("Sick Leave");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [search, setSearch] = useState("");
  const [leaves, setLeaves] = useState([]);

  const applyLeave = () => {
    if (
      !employee ||
      !employeeId ||
      !department ||
      !fromDate ||
      !toDate ||
      !reason
    ) {
      alert("Please fill all fields");
      return;
    }

    const newLeave = {
      id: Date.now(),
      employee,
      employeeId,
      department,
      leaveType,
      fromDate,
      toDate,
      reason,
      status: "Pending",
    };

    setLeaves([...leaves, newLeave]);

    setEmployee("");
    setEmployeeId("");
    setDepartment("");
    setLeaveType("Sick Leave");
    setFromDate("");
    setToDate("");
    setReason("");
  };

  const updateStatus = (id, status) => {
    setLeaves(
      leaves.map((leave) =>
        leave.id === id
          ? { ...leave, status }
          : leave
      )
    );
  };

  const filteredLeaves = leaves.filter((leave) =>
    leave.employee
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="hero">
        <h1>HR Employee Leave Management Tool</h1>
        <p>
          Manage employee leave requests quickly and efficiently
        </p>
      </div>

      <div className="container">

        <Dashboard
          total={leaves.length}
          approved={
            leaves.filter(
              (l) => l.status === "Approved"
            ).length
          }
          pending={
            leaves.filter(
              (l) => l.status === "Pending"
            ).length
          }
          rejected={
            leaves.filter(
              (l) => l.status === "Rejected"
            ).length
          }
        />

        <FilterEmployee
          search={search}
          setSearch={setSearch}
        />

        <LeaveForm
          employee={employee}
          setEmployee={setEmployee}

          employeeId={employeeId}
          setEmployeeId={setEmployeeId}

          department={department}
          setDepartment={setDepartment}

          leaveType={leaveType}
          setLeaveType={setLeaveType}

          fromDate={fromDate}
          setFromDate={setFromDate}

          toDate={toDate}
          setToDate={setToDate}

          reason={reason}
          setReason={setReason}

          applyLeave={applyLeave}
        />

        <LeaveHistory
          leaves={filteredLeaves}
        />
        <AdminDashboard
  leaves={filteredLeaves}
  updateStatus={updateStatus}
/>

      </div>
    </div>
  );
}

export default App;