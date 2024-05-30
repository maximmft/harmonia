const tables = require("../../database/tables");

const programs = [
    {
      id: 1,
      title: "Desperate Houswives",
      synopsis:"ouin ouin",
       poster:
        "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
      country: "USA",
      year: 2007,
      category_id: 3,
    },
    {
      id: 2,
      title: "American Horror Story",
      synopsis: "ca fé peur",
      poster:
        "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
      country: "USA",
      year: 2015,
      category_id:2,
    },
  ];
  
// Declare the action

const browse = async (req, res) => {
  const programsFromDB = await tables.program.readAll();

  res.json(programsFromDB);
};

  const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
  
    const program = programs.find((p) => p.id === parsedId);
  
    if (program != null) {
      res.json(program);
    } else {
      res.sendStatus(404);
    }
  };
  // Export it to import it somewhere else
  
  module.exports = { browse, read };