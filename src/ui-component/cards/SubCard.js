import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

// material-ui
import { useTheme } from '@mui/material/styles'
import {
  Card, CardContent, CardHeader, Divider, Typography,
} from '@mui/material'

// ==============|| CUSTOM SUB CARD ||============== //

const SubCard = forwardRef(({
  children, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others
}, ref) => {
  const theme = useTheme()

  return (
    <Card
      ref={ref}
      sx={{
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? 'rgb(227, 242, 253)' : 'rgba(189, 200, 240, 0.082)',
        '&:hover': {
          boxShadow: theme.palette.mode === 'light' ? '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'rgb(33 150 243 / 10%) 0px 2px 14px 0px',
        },
        ...sx,
      }}
      {...others}
    >
      {/* card header and action */}
      {!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />}
      {darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h4">{title}</Typography>} action={secondary} />}

      {/* content & header divider */}
      {title && (
        <Divider
          sx={{
            opacity: 1,
            borderColor: theme.palette.mode === 'light' ? 'rgb(227, 242, 253)' : 'rgba(189, 200, 240, 0.082)',
          }}
        />
      )}

      {/* card content */}
      {content && (
        <CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
          {children}
        </CardContent>
      )}
      {!content && children}
    </Card>
  )
})

SubCard.propTypes = {
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  sx: PropTypes.node,
  contentSX: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
}

SubCard.defaultProps = {
  content: true,
}

export default SubCard
