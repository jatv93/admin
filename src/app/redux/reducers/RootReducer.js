import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import NavigationReducer from "./NavigationReducer";

const RootReducer = combineReducers({
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notifications: NotificationReducer,
  ecommerce: EcommerceReducer,
  navigations: NavigationReducer
});

export default RootReducer;
