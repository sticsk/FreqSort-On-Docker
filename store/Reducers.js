import  ACTIONS  from './Actions'
const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload
      };
    case ACTIONS.SETF:
      return {
        ...state,
        setfreq: action.payload
      };
      case ACTIONS.SETS:
        return {
          ...state,
          setsoffreq: action.payload,
        };
        case ACTIONS.ARMONICI:
        return {
          ...state,
          setarmonici: action.payload,
        };
    default:
      return state;
  }
};

export default reducers