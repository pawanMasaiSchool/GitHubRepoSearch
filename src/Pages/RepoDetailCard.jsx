import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { v4 as uuid } from "uuid";

function RepoDetailCard({
  updated_at,
  full_name,
  description,
  topics,
  html_url,
  stargazers_count
}) {
  return (
    <Box
      sx={{
        margin: "auto",
        borderRadius: "20px",
        width: "80%",
        padding: "15px",
        height: "auto",
        backgroundColor: "#e0e0eb",
        "&:hover": {
          backgroundColor: "#7070db",
          opacity: [1, 1, 2]
        }
      }}
    >
      <h3>
        <a href={html_url}>{full_name}</a>
      </h3>
      <p>{description}</p>
      <Box>
        {topics.map((item) => (
          <Button
            key={uuid()}
            variant="outlined"
            sx={{
              color: "blue",
              borderRadius: "20px",
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "blue",
                color: "#ffffff"
              }
            }}
          >
            {item}
          </Button>
        ))}
        <h2>☆ {stargazers_count}</h2>
        <p>Last Updated At: "{updated_at}"</p>
      </Box>
    </Box>
  );
}

export default RepoDetailCard;
