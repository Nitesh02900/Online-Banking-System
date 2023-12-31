import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewAllBanks = () => {
  let navigate = useNavigate();
  const [allBanks, setAllBanks] = useState([]);

  const admin_jwtToken = sessionStorage.getItem("admin-jwtToken");

  const retrieveAllBanks = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/bank/fetch/all",
      {
        headers: {
          Authorization: "Bearer " + admin_jwtToken, // Replace with your actual JWT token
        },
      }
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    const getAllBanks = async () => {
      const allBanks = await retrieveAllBanks();
      if (allBanks) {
        setAllBanks(allBanks.banks);
      }
    };

    getAllBanks();
  }, []);

  const handleEdit = (bankId) => {
    // Placeholder function for handling edit action
    console.log(`Edit bank with ID ${bankId}`);
  };

  const handleDelete = async (bankId) => {
    try {
      // Make DELETE request to backend
      await axios.delete(`http://localhost:8080/api/bank/delete/${bankId}`, {
        headers: {
          Authorization: "Bearer " + admin_jwtToken,
        },
      });

      // Update the state to remove the deleted bank
      setAllBanks((prevBanks) => prevBanks.filter((bank) => bank.id !== bankId));

      // Show success toast
      toast.success("Bank deleted successfully!");
    } catch (error) {
      console.error("Error deleting bank:", error);
      // Show error toast
      toast.error("Error deleting bank. Please try again.");
    }
  };
  return (
    <div>
      <div className="mt-2">
        <div
          className="card form-card ms-5 me-5 mb-5 custom-bg border-color "
          style={{
            height: "45rem",
          }}
        >
          <div className="card-header custom-bg-text text-center bg-color">
            <h2>All Banks</h2>
          </div>
          <div
            className="card-body"
            style={{
              overflowY: "auto",
            }}
          >
            <div className="table-responsive">
              <table className="table table-hover text-color text-center">
                <thead className="table-bordered border-color bg-color custom-bg-text">
                  <tr>
                    <th scope="col">Bank</th>
                    <th scope="col">Bank Code</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                    <th scope="col">Country</th>
                    <th scope="col">Currency</th>
                    <th scope="col">Action</th> {/* Added Action column header */}
                  </tr>
                </thead>
                <tbody>
                  {allBanks.map((bank) => {
                    return (
                      <tr key={bank.id}>
                        <td>
                          <b>{bank.name}</b>
                        </td>
                        <td>
                          <b>{bank.code}</b>
                        </td>
                        <td>
                          <b>{bank.address}</b>
                        </td>
                        <td>
                          <b>{bank.phoneNumber}</b>
                        </td>
                        <td>
                          <b>{bank.email}</b>
                        </td>
                        <td>
                          <b>{bank.website}</b>
                        </td>
                        <td>
                          <b>{bank.country}</b>
                        </td>
                        <td>
                          <b>{bank.currency}</b>
                        </td>
                        <td>
                          {/* Action buttons */}
                          <button
                            type="button"
                            className="btn btn-primary me-2"
                            onClick={() => handleEdit(bank.id)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDelete(bank.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllBanks;
