import React from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

const useStyles = {
   appBar: {
      position: "relative",
      backgroundColor: "transparent",
      color: "#000"
   },
   flex: {
      flex: 1
   },
   containerWrapper: {
      padding: 10
   },
   grow: {
      flexGrow: 1
   },
   between: {
      justifyContent: "space-between"
   }
};

function Transition(props) {
   return <Slide direction='up' {...props} />;
}

function FullScreenDialog({ open, handleClose, classes, children, save, send }) {
   return (
      <div>
         <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
               <Toolbar className={classes.between}>
                  <IconButton color='inherit' onClick={handleClose} aria-label='Close'>
                     <i className='material-icons'>close</i>
                  </IconButton>
                  <Typography variant='h6' color='inherit' className={classes.flex}>
                     Mail Editör
                  </Typography>

                  <Button color='inherit' onClick={save}>
                     <i className='material-icons mr-2'>save</i>
                     Kaydet
                  </Button>
                  <Button color='inherit' onClick={send}>
                     <i className='material-icons mr-2'>send</i>
                     Maili gönder
                  </Button>
               </Toolbar>
            </AppBar>
            {children}
         </Dialog>
      </div>
   );
}

export default withStyles(useStyles)(FullScreenDialog);
