import { all, call, takeLatest, put, select } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import CartActionTypes from "./cart.types";
import { clearCart, setCart } from "./cart.actions";
import { getCart } from "../../firebase/firebase.utils";
import { selectCartItems } from "./cart.selectors";
import { selectCurrentUser } from "../user/user.selectors";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* checkCartFromFirebase({ payload: user }) {
  try {
    const cartRef = yield call(getCart, user.id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCart(cartSnapshot.data().cartItems));
  } catch (error) {
    console.error(error);
  }
}

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield call(getCart, currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.error(error);
    }
  }
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onUserCartChanged() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART
    ],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onUserSignIn),
    call(onUserCartChanged)
  ]);
}
