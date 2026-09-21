import { fetchFunFact } from "../services/funFactService.js";

export const getFunFact = async (req, res) => {
  try {
    const fact = await fetchFunFact();

    res.json({
      fact: fact
    });
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);

    res.status(500).json({
      error: "Could not fetch fun fact"
    });
  }
};