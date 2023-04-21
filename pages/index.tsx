import { useState } from "react";
import axios from "axios";
import { Typography, Box, IconButton, Tooltip } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Table, PaymentModal, SearchBar } from "@/components";
import { usePayments, useFilterPayments, usePostPayment } from "@/hooks";
import { columns } from "@/constants/payment-columns";
import { useStyles } from "@/styles/customClasses.styles";
import { IFormFields, IUser } from "@/types";

interface IProps {
  users: IUser[];
}

const Payments = ({ users }: IProps) => {
  const styles = useStyles();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { payments, handleUpdatePayments } = usePayments();
  const { filteredPayments, searchValue, handleOnSearch } = useFilterPayments({
    payments,
  });

  const togglePaymentModal = () => setShowPaymentModal(!showPaymentModal);

  return (
    <main style={styles.main}>
      <PaymentModal
        open={showPaymentModal}
        handleClose={togglePaymentModal}
        users={users}
        handleUpdatePayments={handleUpdatePayments}
      />
      <Box sx={styles.page_container}>
        <Box>
          <Typography variant="h1" gutterBottom textAlign="center">
            Payment Dashboard
          </Typography>
          <Box sx={styles.flex_row}>
            <SearchBar
              handleOnSearch={handleOnSearch}
              searchValue={searchValue}
            />
            <Tooltip title="Create Payment" placement="left-start">
              <IconButton onClick={togglePaymentModal}>
                <AddRoundedIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
          <Table columns={columns} rows={filteredPayments} />
        </Box>
      </Box>
    </main>
  );
};

export default Payments;

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  return {
    props: { title: "Payments", users: res.data.data },
  };
};
