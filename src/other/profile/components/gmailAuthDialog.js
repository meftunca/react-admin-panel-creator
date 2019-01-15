import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function GmailAuthDialog(props) {
  const [open, setOpen] = React.useState(props.open);
  const [code, setCode] = React.useState("");

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    props.close();
    setOpen(false);
  }
  const save = () => {
    props.accessToken(code);
    setTimeout(handleClose, 500);
  };
  return (
    <div>
      <Dialog open={props.open || open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Api Bağlantısı</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <a href={props.link} target='_blank'>
              {" "}
              Linke tıklayarak Google Auth Code'unuzu alabilirsiniz.{" "}
            </a>
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Google Auth Code'
            type='text'
            fullWidth
            onChange={({ target }) => setCode(target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            İptal
          </Button>
          <Button onClick={save} color='primary'>
            Kaydet
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default GmailAuthDialog;
