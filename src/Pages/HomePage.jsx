import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Redirect } from "react-router-dom";
import { loginFailed } from "../redux/authRedux/action";
import axios from "axios";
import { AddingData } from "../redux/gitHub/action";
import RepoDetailCard from "./RepoDetailCard";

function HomePage() {
  const [inp, setInp] = useState("");

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const gitData = useSelector((state) => state.git.gitData);

  const handleFetch = () => {
    return axios.get(
      `https://api.github.com/search/repositories?q=${inp}&page=${page}&per_page=4`
    );
  };

  const handleSettingDataInStore = (dataArr) => {
    const storingAction = AddingData(dataArr);
    dispatch(storingAction);
  };

  const handleSearchRepo = async () => {
    try {
      await handleFetch().then((res) => {
        console.log(res);
        handleSettingDataInStore(res.data.items);
      });
    } catch (err) {
      //hanlde errors in fetching
    }
    console.log("searching for repo", inp);
  };

  // console.log(gitData);

  const handleLogout = () => {
    const logoutAction = loginFailed("no");
    dispatch(logoutAction);
  };

  // console.log(page);

  if (isAuth === false) {
    return <Redirect to="/login" />;
  }

  return (
    <Box>
      <Box>
        <br />
        <br />
        <TextField
          label="Git Repositories"
          placeholder="search by repo name"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" onClick={handleSearchRepo}>
          Search
        </Button>
      </Box>
      <br />
      <br />
      <br />
      <Box>
        {[1, 2, 3, 4, 5].map((pg) => (
          <Button
            variant="contained"
            style={{
              background: "#2929a3",
              width: "5px",
              borderRadius: "10px",
              margin: "5px"
            }}
            onClick={() => {
              setPage(pg);
              handleSearchRepo();
            }}
          >
            {pg}
          </Button>
        ))}
      </Box>
      <Box
        style={{
          border: "5px dotted tomato",
          borderRadius: "20px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center"
        }}
      >
        {
          //
          gitData.map((item) => {
            return (
              <RepoDetailCard
                updated_at={item.updated_at}
                stargazers_count={item.stargazers_count}
                key={item.id}
                html_url={item.html_url}
                description={item.description}
                full_name={item.full_name}
                topics={item.topics}
              />
            );
          })
        }
      </Box>
      <Box>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default HomePage;
