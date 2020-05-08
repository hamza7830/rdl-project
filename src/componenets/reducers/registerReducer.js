import {
  GET_REGISTER_ENVIRONMENT_STARTED,
  GET_REGISTER_ENVIRONMENT_SUCCEEDED,
  GET_REGISTER_ENVIRONMENT_FAILED,
  REGISTER_ENTITY_METADATA_STARTED,
  REGISTER_ENTITY_METADATA_SUCCEEDED,
  REGISTER_ENTITY_METADATA_FAILED,
} from "../actions/ColumnsActions";

const defaultState = {
  isLoading: false,
  error: {},
  registerEnvironment: {},
  entityMetadata: {},
};
const registerReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case REGISTER_ENTITY_METADATA_STARTED:
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;

    case REGISTER_ENTITY_METADATA_FAILED:
      newState = {
        ...state,
        isLoading: false,
        error: action.error,
      };
      return newState;
    case REGISTER_ENTITY_METADATA_SUCCEEDED:
      newState = {
        ...state,
        entityMetadata: action.response.data,
      };
      return newState;

    case GET_REGISTER_ENVIRONMENT_STARTED:
      newState = {
        ...state,
        isLoading: true,
      };
      return newState;

    case GET_REGISTER_ENVIRONMENT_FAILED:
      newState = {
        ...state,
        isLoading: false,
        error: action.error,
      };
      return newState;
    case GET_REGISTER_ENVIRONMENT_SUCCEEDED:
      newState = {
        ...state,
        registerEnvironment: action.response.data,
      };
      return newState;

    default:
      return state;
  }
};

export default registerReducer;
