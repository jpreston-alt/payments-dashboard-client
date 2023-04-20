import { useState } from "react";
import axios from "axios";
import { Typography, Box, Button, TextField } from "@mui/material";
import { Table, PaymentModal } from "@/components";
import { useGetPayments, useFilterPayments, usePostPayment } from "@/hooks";
import { columns } from "@/constants/payment-columns";
import { useStyles } from "@/styles/customClasses.styles";
import { IFormFields, IUser } from "@/types";

interface IProps {
  users: IUser[];
}

const Payments = ({ users }: IProps) => {
  const styles = useStyles();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { payments: serverPayments } = useGetPayments();
  const { postedPayments, handlePostPayments, loading } = usePostPayment();
  const payments = [...postedPayments, ...serverPayments];
  const { filteredPayments, searchValue, handleOnSearch } = useFilterPayments({
    payments,
  });

  const togglePaymentModal = () => setShowPaymentModal(!showPaymentModal);

  return (
    <>
      <PaymentModal
        open={showPaymentModal}
        handleClose={togglePaymentModal}
        users={users}
        handleSubmit={(formVals: IFormFields) =>
          handlePostPayments(formVals, users)
        }
        loading={loading}
      />
      <Box sx={styles.page_container}>
        <Typography variant="h1" gutterBottom textAlign="center">
          Payments Dashboard
        </Typography>
        <Box sx={styles.flex_row}>
          <TextField
            placeholder="Search Payments"
            onChange={handleOnSearch}
            value={searchValue}
          />
          <Button variant="contained" onClick={togglePaymentModal}>
            Create Payment
          </Button>
        </Box>
        <Table columns={columns} rows={filteredPayments} />
      </Box>
    </>
  );
};

export default Payments;

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  return {
    props: { title: "Payments", users: res.data.data },
  };
};
