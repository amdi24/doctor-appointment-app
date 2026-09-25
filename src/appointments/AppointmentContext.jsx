import {createContext,useContext,useMemo,useReducer,} from "react";
const AppointmentContext =createContext(null);
function appointmentReducer(state,action) {
  switch (action.type) {
    case "add":
      return [...state,action.appointment,];
      case "remove":
        return state.filter((appointment) =>appointment.id !==action.id);
        case "clear":
          return [];
          default:throw new Error(`Unknown appointment action: ${action.type}`);
  }
}
export function AppointmentProvider({children,}) 
{const [appointments,dispatch,] = useReducer(appointmentReducer,[]);
const value = useMemo(() => ({appointments,addAppointment:(appointment) =>dispatch({
            type: "add",
            appointment,
          }),

      removeAppointment:(id) =>dispatch({
            type: "remove",
            id,
          }),

      clearAppointments:() =>dispatch({
            type: "clear",
          }),    }),[appointments] );
        
        
  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
    );
}
export function useAppointments() {
  const context =useContext(AppointmentContext);
  if (!context) {throw new Error("useAppointments must be used inside AppointmentProvider");}
  return context;
}