import { Machine } from '../../../web_modules/xstate.js';
export let TodoMachineStateValues;

(function (TodoMachineStateValues) {
  TodoMachineStateValues["IDLE"] = "idle";
  TodoMachineStateValues["PROCESSING"] = "processing";
  TodoMachineStateValues["ERROR"] = "error";
})(TodoMachineStateValues || (TodoMachineStateValues = {}));

export let TodoMachineActions;

(function (TodoMachineActions) {
  TodoMachineActions["IDLE"] = "IDLE";
  TodoMachineActions["PROCESSING"] = "PROCESSING";
  TodoMachineActions["SUCCESS"] = "SUCCESS";
  TodoMachineActions["DISMISS"] = "DISMISS";
  TodoMachineActions["ERROR"] = "ERROR";
})(TodoMachineActions || (TodoMachineActions = {}));

export const todoMachine = Machine({
  id: 'machine',
  initial: TodoMachineStateValues.IDLE,
  states: {
    idle: {
      on: {
        PROCESSING: {
          target: TodoMachineStateValues.PROCESSING
        }
      }
    },
    processing: {
      on: {
        ERROR: {
          target: TodoMachineStateValues.ERROR
        },
        SUCCESS: {
          target: TodoMachineStateValues.IDLE
        }
      }
    },
    error: {
      on: {
        DISMISS: {
          target: TodoMachineStateValues.IDLE
        }
      }
    }
  }
});