import axios from "axios";

export const fetchFunFact = async () => {
 try {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch fun fact:", error.message);

    throw new Error("Could not fetch fun fact");
  }
};