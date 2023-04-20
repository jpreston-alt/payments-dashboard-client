import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Form } from "@/components";
import { IProps } from "./PaymentModal.d";

const PaymentModal = ({ handleClose, open, users, handleSubmit }: IProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Payment</DialogTitle>
      <DialogContent>
        <Form
          users={users}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
