/** @type {import('tailwindcss').Config} */
export default {
     content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
     theme: {
          extend: {
               fontFamily: {
                    sans: "Inter, Helvetica, Arial, sans-serif",
               },
               colors: {
                    imageannotationblue: "var(--imageannotationblue)",
                    imageannotationgrey: "var(--imageannotationgrey)",
                    imageannotationgreen: "var(--imageannotationgreen)",
                    imageannotationdarkgrey: "var(--imageannotationdarkgrey)",
                    imageannotationlightgrey: "var(--imageannotationlightgrey)",
               },
               screens: {
                    cxl: "1366px", // custom to target the resolution 1440×900
                    c2xl: "1536px", // custom to target the resolution 1920×1080
               },
          },
     },
     plugins: [],
};
