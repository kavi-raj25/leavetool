function Dashboard({ total, approved, pending, rejected }) {
  return (
    <div className="dashboard">
      <div className="card total">
        <h3>Total</h3>
        <p>{total}</p>
      </div>

      <div className="card approved">
        <h3>Approved</h3>
        <p>{approved}</p>
      </div>

      <div className="card pending">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>

      <div className="card rejected">
        <h3>Rejected</h3>
        <p>{rejected}</p>
      </div>
    </div>
  );
}

export default Dashboard;