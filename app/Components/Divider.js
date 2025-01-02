import { motion } from "framer-motion";

export const Divider = ({ text, animation = false }) => {
  return (
    <>
      {animation ? (
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 10, delay: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",

            color: "white",
          }}
        >
          <div
            style={{
              flex: 0.25,
              height: 2,
              backgroundColor: "white",
              opacity: 0.3,
            }}
          />
          <h1
            style={{
              margin: "0 30px",
              fontSize: "2.5rem",
            }}
          >
            {text}
          </h1>
          <div
            style={{
              flex: 0.25,
              height: 2,
              backgroundColor: "white",
              opacity: 0.3,
            }}
          />
        </motion.div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            color: "white",
          }}
        >
          <div
            style={{
              flex: 0.25,
              height: 2,
              backgroundColor: "white",
              opacity: 0.3,
            }}
          />
          <h1
            style={{
              margin: "0 30px",
              fontSize: "2.5rem",
            }}
          >
            {text}
          </h1>
          <div
            style={{
              flex: 0.25,
              height: 2,
              backgroundColor: "white",
              opacity: 0.3,
            }}
          />
        </div>
      )}
    </>
  );
};
