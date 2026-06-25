function AdminDashboard({ leaves, updateStatus }) {
  return (
    <div className="admin-panel">
      <h2>HR Admin Dashboard</h2>

      {leaves.length === 0 ? (
        <p>No leave requests available.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Employee ID</th>
              <th>Department</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
              <th>Action</th>
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

                <td>
                  <span
                    className={
                      leave.status === "Approved"
                        ? "status approved"
                        : leave.status === "Rejected"
                        ? "status rejected"
                        : "status pending"
                    }
                  >
                    {leave.status}
                  </span>
                </td>

                <td>
                  <button
                    className="approve-btn"
                    onClick={() =>
                      updateStatus(leave.id, "Approved")
                    }
                  >
                    Approve
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() =>
                      updateStatus(leave.id, "Rejected")
                    }
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;