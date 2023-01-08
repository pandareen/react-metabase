import React, { useState, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { create } from 'jss'
import {
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles'
import {
  Button,
  Card,
  CssBaseline,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from '@material-ui/core'

export const WithMaterialUI = ({
  children,
  styleSelector,
  title,
  ...props
}) => {
  const [contentRef, setContentRef] = useState(null)
  const doc = contentRef?.contentWindow?.document
  const mountNode = doc?.body
  const insertionPoint = doc?.head
  const jss = useMemo(
    () =>
      insertionPoint &&
      create({
        ...jssPreset(),
        insertionPoint
      }),
    [insertionPoint]
  )

  return (
    <iframe title={title} {...props} ref={setContentRef}>
      {mountNode &&
        jss &&
        createPortal(
          <StylesProvider jss={jss}>
            <CssBaseline />
            {children}
          </StylesProvider>,
          mountNode
        )}
    </iframe>
  )
}

export const MaterialButton = ({ children }) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://upload.wikimedia.org/wikipedia/en/5/5c/Madonna_-_Material_Girl_%28single%29.png"
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Material Girl
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Madonna{' '}
            </Typography>
            <Button color="secondary" variant="outlined">
              Play
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}
