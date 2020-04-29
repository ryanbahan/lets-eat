// css-in-js styles that need to be accessed outside of the render method or return are stored here

export const modalStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.25)"
};

export const dropdownStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  position: "absolute",
  backgroundColor: "#fff",
  border: "solid 0.5px rgba(0,0,0,0.25)",
  borderRadius: "0.25rem",
  padding: "0.5rem",
};

export const paginatorStyles = {
  width: "55vw",
  minWidth: "25rem",
  maxWidth: "50rem",
};

export const buttonStyles = {
  margin: "1rem 0.25rem 0 0.25rem",
  cursor: "pointer",
}

export const containerStyles = {
  width: "55vw",
  minWidth: "25rem",
  maxWidth: "50rem",
};
