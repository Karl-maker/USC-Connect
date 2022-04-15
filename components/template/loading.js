import { CircularProgress, Backdrop } from "@mui/material";

/*

  Shows loading if loading is set to true

*/

export default function Loading({ children, loading }) {
  if (loading) {
    return (
      <Backdrop
        sx={{ color: "#ffff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="success" />
      </Backdrop>
    );
  }

  return <>{children}</>;
}
