import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      colors: {
        mainGreen: "#42AB44",
      },
    },
  },
  alias: {
    hoverGreen: "cursor-pointer hover:(text-green-500)",
  },
};
