// https://pogolinks.hair/movies/oppenheimer-2023/

// const moviesDownloadLinks = async () => {
//   const results = await fetch(
//     "https://pogolinks.hair/movies/oppenheimer-2023/"
//   );
//   console.log(results);
// };

// moviesDownloadLinks();

const moviesDownloadLinks = async () => {
  try {
    const response = await fetch(
      "https://pogolinks.hair/movies/oppenheimer-2023/"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    // Depending on the type of response (JSON, text, etc.), you can use appropriate methods
    const responseData = await response.text(); // Change this based on the response type

    const parser = new DOMParser();
    const htmlDocument = parser.parseFromString(responseData, "text/html");

    const findingURL_fromDoc = htmlDocument.querySelectorAll(
      "tr.table-sub .maintb a"
    );
    Array.from(findingURL_fromDoc).forEach((val) => {
      console.log(val.href);
    });
    console.log(findingURL_fromDoc[0].innerHTML);
    // For example, if the response is JSON, you could use: await response.json();

    // Once you have the actual data, you can display it in the UI
    // displayDataInUI(responseData);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error - show a message or handle it in your UI
  }
};

moviesDownloadLinks();
