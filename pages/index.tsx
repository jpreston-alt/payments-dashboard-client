import { useState } from "react";
import { Typography, Box, Button, TextField } from "@mui/material";
import { Table, PaymentModal } from "@/components";
import { useGetPayments, useFilterPayments } from "@/hooks";
import { columns } from "@/constants/payment-columns";
import { useStyles } from "@/styles/customClasses.styles";
import { IUser } from "@/types";

interface IProps {
  users: IUser[];
}

const Payments = ({ users }: IProps) => {
  const styles = useStyles();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { payments, handlePostPayments } = useGetPayments();
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
        handleSubmit={handlePostPayments}
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const { data } = await res.json();
  return {
    props: { title: "Payments", users: data },
  };
};
