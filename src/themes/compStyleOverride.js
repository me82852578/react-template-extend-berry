export default function componentStyleOverrides(theme) {
  const mode = theme?.customization?.layoutMode

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '4px',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
        title: {
          fontSize: '1.125rem',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          // color: theme.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: mode === 'light' ? theme.menuSelected : theme?.colors?.darkSecondaryMain,
            backgroundColor: mode === 'light' ? theme.menuSelectedBack : 'rgba(124, 77, 255, 0.082)',
            '& .MuiListItemIcon-root': {
              color: mode === 'light' ? theme.menuSelected : theme?.colors?.darkSecondaryMain,
            },
          },
          '&:hover': {
            fontWeight: 700,
            backgroundColor: mode === 'light' ? theme.menuSelectedBack : 'rgba(124, 77, 255, 0.082)',
            color: mode === 'light' ? theme.menuSelected : theme?.colors?.darkSecondaryMain,
            '& .MuiListItemIcon-root': {
              color: mode === 'light' ? theme.menuSelected : theme?.colors?.darkSecondaryMain,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '36px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: { },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: mode === 'light' ? theme.colors?.grey50 : theme.colors?.darkBackground,
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors?.grey400,
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors?.primaryLight,
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: mode === 'light' ? theme.colors?.grey50 : theme.colors?.darkBackground,
          padding: '15.5px 14px',
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `${theme?.customization?.borderRadius}px`,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors?.grey300,
          },
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px',
        },
        valueLabel: {
          color: theme?.colors?.primaryLight,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.darkSecondaryMain,
          background: mode === 'light' ? theme?.colors?.secondaryLight : theme?.colors?.darkLevel1,
          '&:hover': {
            background: theme?.colors?.secondaryDark,
            color: theme?.colors?.secondaryLight,
          },
          '&[aria-controls="menu-list-grow"],&:hover': {
            background: theme?.colors?.secondaryDark,
            color: theme?.colors?.secondaryLight,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700,
        },
      },
    },
  }
}
