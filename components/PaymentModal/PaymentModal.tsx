import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from "@mui/material";
import { Form } from "@/components";
import { IProps } from "./PaymentModal.d";
import { getFields } from "@/constants/payment-form-fields";
import { IFormFieldProps } from "@/types";
import { usePostPayments } from "@/hooks";

const PaymentModal = ({
  handleClose,
  open,
  users,
  handleUpdatePayments,
}: IProps) => {
  const { loading, handlePostPayments } = usePostPayments({
    handleUpdatePayments,
    handleClose,
    users,
  });

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
            handleClose={handleClose}
            fields={getFields(users) as IFormFieldProps[]}
            handleSubmit={handlePostPayments}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
