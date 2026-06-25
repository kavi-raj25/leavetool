function LeaveHistory({ leaves }) {
  return (
    <div className="history-box">

      <h2>Leave History</h2>

      {leaves.length === 0 ? (
        <p>No leave records found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>ID</th>
              <th>Department</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.employee}</td>
                <td>{leave.employeeId}</td>
                <td>{leave.department}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.fromDate}</td>
                <td>{leave.toDate}</td>
                <td>{leave.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default LeaveHistory;