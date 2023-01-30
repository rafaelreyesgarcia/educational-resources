export const initialState = {
  selectedId: 0,
  messages: {
    0: 'hello taylor',
    1: 'hello, alice',
    2: 'hello bob'
  }
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        message: action.message,
      };
    }
    case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message
        },
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
