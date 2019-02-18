import {
  createStyles,
  IconButton,
  InputBase,
  Theme,
  Typography,
  WithStyles,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Send as SendIcon } from '@material-ui/icons';
import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';

const styles = (theme: Theme) =>
  createStyles({
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    textInput: {
      flexGrow: 1,
      padding: `0 ${theme.spacing.unit * 2}px`,
      backgroundColor: grey[200],
      borderRadius: theme.typography.pxToRem(16),
    },
    iconButton: {
      padding: theme.spacing.unit,
    },
    messages: {
      padding: `${theme.spacing.unit * 2}px 0`,
    },
  });

interface Props extends WithStyles<typeof styles> {
  message?: string;
}

const App = (props: Props): JSX.Element => {
  const [classes] = useState(props.classes);
  const [messages, setMessages] = useState([props.message]);
  const textInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Remove elements for server-side rendering
    ['init-styles', 'init-state'].forEach(id => {
      const elem = document.getElementById(id);
      if (elem && elem.parentNode) {
        elem.parentNode.removeChild(elem);
      }
    });
  });

  const onTextSend = () => {
    const elem = textInput.current;
    if (elem) {
      setMessages([elem.value, ...messages]);
      elem.value = '';
    }
  };

  const onInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onTextSend();
    }
  };

  return (
    <div>
      <div className={classes.inputContainer}>
        <InputBase
          className={classes.textInput}
          margin="none"
          inputRef={textInput}
          onKeyPress={onInputKeyPress}
        />
        <IconButton className={classes.iconButton} onClick={onTextSend}>
          <SendIcon />
        </IconButton>
      </div>
      <Typography className={classes.messages} component="div">
        {messages.map((message, i) => (
          <div key={i}>{message}</div>
        ))}
      </Typography>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(App);
