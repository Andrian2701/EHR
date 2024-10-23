import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
import { IAuthFormState } from "../types/auth.types";

class AuthService {
  async registerUser(data: IAuthFormState) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: data.name,
        email: user.email,
      });
      updateProfile(user, {
        displayName: data.name,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(data: IAuthFormState) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }
}

export const authService = new AuthService();
