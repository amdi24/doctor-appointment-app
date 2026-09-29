import { create } from "zustand";
function getInitialAppointments() {
  const saved = localStorage.getItem("appointments");
  return saved ? JSON.parse(saved) : [];
}
export const useAppointmentStore = create((set) => ({
  appointments: getInitialAppointments(),
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment],
    })),

  removeAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter(
        (appointment) => appointment.id !== id
      ),
    })),

  clearAppointments: () =>
    set({
      appointments: [],
    }),
}));