import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

const styles = (theme: Theme) =>
  createStyles({
    snackbar: {
      margin: theme.spacing(1),
    },
  });

export type Props = WithStyles<typeof styles>;

function LongTextSnackbar(props: Props) {
  const { classes } = props;

  return (
    <div>
      <SnackbarContent className={classes.snackbar} message="I love snacks." action={action} />
      <SnackbarContent
        className={classes.snackbar}
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
      <SnackbarContent
        className={classes.snackbar}
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        className={classes.snackbar}
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
        action={action}
      />
    </div>
  );
}

LongTextSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(LongTextSnackbar);
