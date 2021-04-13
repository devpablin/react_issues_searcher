import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { RootState } from "../store/reducers";
import { IssuesStateType } from "../types";
import * as actions from "../store/actions";

export const useIssuesState = () => {
  const { issues, total } = useSelector(
    (state: RootState) => state.issues
  ) as IssuesStateType;
  const { loading, message } = useSelector((state: RootState) => state.loader);

  return {
    issues,
    loading,
    hasMore: issues.length < total,
    message,
  };
};
export const useIssuesDispatch = () => {
  const dispatch = useDispatch();
  return {
    ...bindActionCreators({ ...actions }, dispatch),
  };
};
