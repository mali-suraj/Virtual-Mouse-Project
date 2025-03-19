const start = () => {
  console.log("running...");
  let start = document.getElementById("startButton");
  start.innerHTML = "Stop";
  let options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };
  let fetchResponse = fetch(
    "http://127.0.0.1:8000/start-virtual-mouse",
    options
  );
  fetchResponse
    .then((res) => res.json())
    .then((resData) => {
      console.log(resData);
    });
};
