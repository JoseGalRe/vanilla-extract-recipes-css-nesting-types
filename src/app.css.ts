import { recipe } from "@vanilla-extract/recipes";

export const styles = recipe({
  base: {
    display: "flex",
    h1: {
      backgroundColor: "#212121",
    },
    p: {
      textDecoration: "underline",
    },
    ".nesting-class": {
      h1: {
        color: "white",
      },
      p: {
        fontSize: "40px",
        backgroundColor: "greenyellow",
      },
    },
  },
});
