import { createMachine, assign } from "xstate";

export const authMachine = createMachine(
  {
    id: "authentication",
    initial: "init",
    context: {
      user: {},
      error: {},
    },
    states: {
      init: {
        always: [
          {
            target: "visitor",
          },
        ],
      },
      visitor: {
        //Delete LocalStorage and Clear Cookies
        on: {
          LOGIN_STUDENT: [{ target: "student" }],
        },
        on: {
          LOGIN_ADMINISTRATOR: [{ target: "administrator" }],
        },
      },
      student: {
        on: {
          LOGOUT: { target: "visitor", actions: ["clearUserInfo"] },
        },
      },
      administrator: {
        on: {
          LOGOUT: { target: "visitor", actions: ["clearUserInfo"] },
        },
      },
    },
  },
  {
    actions: {
      clearUserInfo: (context) => {
        //Clear LocalStorage, Cookies etc
      },
    },
  }
);
