function LeaveCard({ leave, updateStatus }) {
  return (
    <div className="leave-card">

      <h2>{leave.employee}</h2>

      <p>
        <strong>Employee ID :</strong> {leave.employeeId}
      </p>

      <p>
        <strong>Department :</strong> {leave.department}
      </p>

      <p>
        <strong>Leave Type :</strong> {leave.leaveType}
      </p>

      <p>
        <strong>From :</strong> {leave.fromDate}
      </p>

      <p>
        <strong>To :</strong> {leave.toDate}
      </p>

      <p>
        <strong>Reason :</strong> {leave.reason}
      </p>

      <p>
        <strong>Status :</strong>

        <span
          style={{
            color:
              leave.status === "Approved"
                ? "green"
                : leave.status === "Rejected"
                ? "red"
                : "orange",
            fontWeight: "bold",
            marginLeft: "8px",
          }}
        >
          {leave.status}
        </span>
      </p>

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

    </div>
  );
}

export default LeaveCard;