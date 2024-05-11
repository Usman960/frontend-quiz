import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { DataGrid } from '@mui/x-data-grid';

const UserPage = () => {
  const token = useSelector((state) => state.user.token);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios({
        url: "https://sandbox.practical.me/api/user/profile",
        method: "get",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.message === "Data Fetched successfully.") {
        NotificationManager.success(res.data.message);
        setUserData(res.data.data)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      NotificationManager.error("Error fetching data");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "wallet_id", headerName: "Wallet ID", width: 150 },
    { field: "amount", headerName: "Amount", width: 120 },
    { field: "transaction_type", headerName: "Transaction Type", width: 180 },
    { field: "transaction_date", headerName: "Transaction Date", width: 200 },
    { field: "order_id", headerName: "Order ID", width: 120 },
    { field: "description", headerName: "Description", width: 300 },
    { field: "by_admin", headerName: "By Admin", width: 120 },
  ];

  return (
    <div>
      {userData && (
        <div>
          <h1>User Details</h1>
          <p>Name: {userData.first_name} {userData.sur_name}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      )}
      <div style={{ height: 400, width: '100%' }}>
        {userData && (
          <DataGrid rows={userData.wallet} columns={columns} pageSize={5} />
        )}
      </div>
    </div>
  );
};

export default UserPage;
