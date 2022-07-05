import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const url = "https://jsonplaceholder.typicode.com/todos";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "gray",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getTodos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const showModal = async (e) => {
    setOpen(true);
    setIsLoading(true);
    const response = await fetch(`${url}/${e.row.id}`);
    const data = await response.json();
    setItem(data);
    setIsLoading(false);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "userId", headerName: "USER ID", width: 100 },
    { field: "title", headerName: "Title", width: 600 },
    { field: "completed", headerName: "Completed", width: 100 },
  ];

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid
        style={{ backgroundColor: "#3399ff" }}
        rows={todos}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        onRowClick={showModal}
      />

      <Modal open={isOpen} aria-labelledby="modal-modal-title">
        {isLoading ? (
          <Box sx={{ ...style, width: 400, height: 300 }}>
            <div className="spinner-container">
              <div className="loading-spinner"></div>
            </div>
          </Box>
        ) : (
          <Box sx={{ ...style, width: 400, height: 300 }}>
            <IconButton
              aria-label="close"
              onClick={() => {
                setOpen(false);
                setItem({});
              }}
              sx={{
                position: "absolute",
                right: 8,
                top: 0,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <h2>USER {item.id}</h2>

            <Typography>USER ID : </Typography>
            <Typography>{item.userId}</Typography>

            <Typography>TITLE : </Typography>
            <Typography>{item.title}</Typography>

            <Typography>COMPLETED : </Typography>
            <Typography>{item.completed ? "True" : "False"}</Typography>
          </Box>
        )}
      </Modal>
    </div>
  );
}

export default TodoList;
