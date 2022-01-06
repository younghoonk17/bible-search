import database from "./FirebaseService";
import { getDatabase, ref, child, get } from "firebase/database";

export function fetchVerseTest(bible, callback){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `bible/${bible}/1/1/text`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        callback(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
