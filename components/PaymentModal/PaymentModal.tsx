import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import { Form } from "@/components";
import { IProps } from "./PaymentModal.d";
import { getFields } from "@/constants/payment-fields";
import { IFormFieldProps } from "@/types";

const PaymentModal = ({
  handleClose,
  open,
  users,
  handleSubmit,
  loading,
}: IProps) => {
  // TODO add a success message on successful post payment
  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle align="center" fontWeight={600}>
        Create Payment
      </DialogTitle>
      <DialogContent>
        {loading ? (
          <CircularProgress />
        ) : (
          <Form
            users={users}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
            fields={getFields(users) as IFormFieldProps[]}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
