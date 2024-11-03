// RESPONSIVE IMAGES

export const responsiveImg = {
  maxWidth: '100%',
  height: 'auto',
}

// HIDE & CHANGE FOR THE MOBILE

export const hideOnMobile = {
  display: {
    xs: 'none',
    md: 'block',
  },
}

export const hideOnMobileFlex = {
  display: {
    xs: 'none',
    md: 'flex',
  },
}

export const showOnMobile = {
  display: {
    xs: 'block',
    md: 'none',
  },
}

// CENTERING UTILS

export const displayFlexCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const displayFlexSpaceBetween = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const displayFlexEnd = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}

export const displayFlexCenterColumnLeft = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

export const displayFlexCenterColumn = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

export const displayFlexTopColumn = {
  display: 'flex',
  flexDirection: 'column',
}

export const absoluteHorizontalCenter = {
  position: 'absolute',
  left: '50%',
  bottom: 10,
  transform: 'translateX(-50%)',
}

// COLORS & SELECTIONS

export const noSelect = { userSelect: 'none' }

export const textSelection = {
  '&::selection': { backgroundColor: '#008FD5', color: 'black' },
}

export const noDragImg = { pointerEvents: 'none' }

// OTHER

export const relative = {
  position: 'relative',
}

export const absolute = {
  position: 'absolute',
}
