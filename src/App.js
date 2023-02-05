import { Box } from "@mui/material";
import Navbar from "./components/Navbar";

import Carousel from "components/Carousel";
import About from "components/About";

import Sponsors from "components/Sponsors";
import MainActivities from "components/MainActivities";
import OurProgrammes from "components/OurProgrammes";
import Events from "components/Events";
import Faq from "components/Faq";
import { useEffect, useState } from "react";

const useNames = () => {
  const [names, setNames] = useState([
    { name: "morgan" },
    { name: "chibueze" },
    { name: "kachi" },
    { name: "perfect" },
  ]);

  const [input, setInput] = useState("");

  const handleAddName = () => {
    setNames([...names, { name: input }]);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e?.target?.value);
  };

  return {
    handleChange,
    handleAddName,
    names,
    input,
  };
};

const List = ({ names }) => {
  return (
    <>
      {names.map((x) => (
        <h1>{x.name}</h1>
      ))}
    </>
  );
};

const AddButton = ({ text, onClick }) => {
  return <button onClick={() => onClick()}>{text}</button>;
};

function App() {
  // return (
  //   <div className='App'>
  //     <Navbar />
  //     <Box position='relative'>
  //       <Box>
  //         <Carousel />
  //       </Box>
  //       <Box
  //         position='absolute'
  //         bottom='-30px'
  //         left='0'
  //         sx={{
  //           width: "100%",
  //         }}
  //       >
  //         <Sponsors />
  //       </Box>
  //     </Box>

  //     <Box mt={8} mb={16}>
  //       <About />
  //       <MainActivities />
  //       <OurProgrammes />
  //       <Events />
  //       <Faq />
  //     </Box>
  //   </div>
  // );

  const [sortOrder, setSortOrder] = useState("");
  const { input, handleChange, names, handleAddName } = useNames();

  const sortItems = (items) => {
    return items.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "dsc") {
        return b.name.localeCompare(a.name);
      } else {
        return items;
      }
    });
  };

  const sortedItems = sortItems(names);

  useEffect(() => {
    console.log("Sorted Items", sortedItems);
  }, []);

  return (
    <div>
      <input value={input} onChange={handleChange} />
      <List names={names} />

      <AddButton text='Add Item' onClick={handleAddName} />
    </div>
  );
}

export default App;
