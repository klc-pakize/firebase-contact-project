import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const Form = ({ setForm, form, handleSubmit, isAdd }) => {
  const handleChange = (e) => {
    const name = e.target.name;
    // console.log(name);
    const value = e.target.value;
    // console.log(value);
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{
        width: "300px",
        margin: "50px",
        position: "relative",
        Zindex: "1",
        // right: "22rem",
        // bottom: "5rem",
      }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://www.linkedin.com/in/pakize-kılıc/"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"<Firebase/> "}</code>
          </a>
        </div>
        <span className="design header">Add Contact</span>
      </p>

      <Box
        style={{
          backgroundColor: "white",
          padding: "20px",
          // position: "absolute",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "20px" }}>Gender</InputLabel>
              <Select
                label="Gender"
                name="gender"
                variant="outlined"
                value={form.gender}
                onChange={handleChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{
                backgroundColor: "rgb(57, 164, 235)",
              }}
              variant="contained"
              type="submit"
              value="Submit"
            >
              {isAdd}
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default Form;
