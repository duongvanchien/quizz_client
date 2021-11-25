import {useEffect, useReducer, useRef} from "react";
import {getAllData, uploadData} from "../../firebase/until";
import firebase from "../../firebase/firebaseConfig";
import TextField from "@mui/material/TextField";
import {Button} from "@mui/material";
import {initState, loadUsersInRoom, mainReducer} from "./logic";

export const Main = () => {
  const nameRef = useRef(null);
  const [uiState, uiLogic] = useReducer(mainReducer, initState);

  useEffect(() => {
    loadUserInRoom();
  }, []);

  const loadUserInRoom = async () => {
    const database = firebase.database();

    await database.ref("/test/users").on("value", (dataSnapshot) => {
      uiLogic(loadUsersInRoom(Object.values(dataSnapshot.val())));
    });
  };

  const joinRoom = () => {
    nameRef.current.value && uploadData({name: nameRef.current.value});
  };

  return (
    <div style={{textAlign: "center"}}>
      <h3>Main</h3>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <TextField
          id='standard-basic'
          label='Name'
          variant='standard'
          size='small'
          variant='outlined'
          inputRef={nameRef}
        />
        <Button variant='contained' color='primary' style={{margin: "0.5rem"}} onClick={joinRoom}>
          Join
        </Button>
      </div>
      <hr />
      <div>
        {uiState.users.length > 0 ? (
          uiState.users.map((value, key) => <div key={key}>{value.name}</div>)
        ) : (
          <div>Chưa có ma nào trong phòng</div>
        )}
      </div>
    </div>
  );
};
