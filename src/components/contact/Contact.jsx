import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

import { DeleteUser, useFetch } from "../../uilts/firebase";
import { EditNotifications } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const Contacts = ({ EditUserButton }) => {
  const { isLoading, contactList } = useFetch();
  return (
    <div style={{ position: "relative", zIndex: "1" }}>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Loading
                </TableCell>
              </TableRow>
            ) : (
              contactList.map((item) => {
                return (
                  <>
                    <TableRow>
                      <TableCell align="left">{item.username}</TableCell>
                      <TableCell align="left">{item.phoneNumber}</TableCell>
                      <TableCell align="left">{item.gender}</TableCell>
                      <TableCell
                        align="left"
                        className="delete"
                        onClick={() => DeleteUser(item.id)}
                      >
                        <DeleteIcon />
                      </TableCell>
                      <TableCell
                        align="left"
                        className="edit"
                        onClick={() =>
                          EditUserButton(
                            item.id,
                            item.username,
                            item.phoneNumber,
                            item.gender
                          )
                        }
                      >
                        <EditNotifications />
                      </TableCell>
                    </TableRow>
                  </>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
