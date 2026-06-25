function LeaveForm({
  employee,
  setEmployee,
  employeeId,
  setEmployeeId,
  department,
  setDepartment,
  leaveType,
  setLeaveType,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  reason,
  setReason,
  applyLeave,
}) {
  return (
    <div className="form-box">
      <h2>Apply Leave</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
      />

      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <select
        value={leaveType}
        onChange={(e) => setLeaveType(e.target.value)}
      >
        <option>Sick Leave</option>
        <option>Casual Leave</option>
        <option>Earned Leave</option>
        <option>Emergency Leave</option>
      </select>

      <label>From Date</label>
      <input
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
      />

      <label>To Date</label>
      <input
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
      />

      <textarea
        placeholder="Reason for Leave"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />

      <button onClick={applyLeave}>
        Apply Leave
      </button>
    </div>
  );
}

export default LeaveForm;