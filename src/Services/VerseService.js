import { getDatabase, ref, child, get } from "firebase/database";
import database from "./FirebaseService";

export function fetchVerseTest(book, chapter, verse, verse2, callback) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `bible/${book}/${chapter}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let chapterObject = snapshot.val();
        let result = [];

        if (verse2 == 0) {
          result.push(verse + ". " + chapterObject[verse].text);
        } else {
          for (let i = parseInt(verse); i <= parseInt(verse2); i++) {
            result.push(i + ". " + chapterObject[i].text);
          }
        }
        console.log(result);

        callback(result);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
