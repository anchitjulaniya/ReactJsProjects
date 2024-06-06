import { useReducer, useContext } from "react";

export let initialState = { taskList: [] };
  const [inputTask, setinputTask] = useState("");
  const reducer = (rState, action) => {
    switch (action.type) {
      case "ADD":
        return { taskList: [...rState, inputTask] };

      case "DELETE":
        return {
          taskList: rState.taskList.filter(
            (task, index) => index != action.index
          ),
        };

      case "EDIT":
        return {
          taskList: rState.taskList.map((task, index) =>
            index == action.index ? inputTask : task
          ),
        };
    }
  };
  const [rState, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("taskList")) || initialState);



  