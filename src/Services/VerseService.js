import { getDatabase, ref, child, get } from "firebase/database";
import database from "./FirebaseService";

export function fetchVerseTest(book,chapter,verse,callback){
  const dbRef = ref(getDatabase());
  get(child(dbRef, `bible/${book}/${chapter}/${verse}/text`))
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
