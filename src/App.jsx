import { Box, Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

function App() {

  const { mode, setMode } = useColorScheme()

  function ModeSelect() {
    const handleChange = (event) => {
      setMode(event.target.value)
    }
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value='light'>Light</MenuItem>
          <MenuItem value='dark'>Dark</MenuItem>
          <MenuItem value='system'>System</MenuItem>
        </Select>
      </FormControl>
    )
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: theme => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>board bar</Box>
      <Box sx={{
        backgroundColor: 'primary.main',
        height: theme => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>board bar content</Box>
    </Container >
  )
}

export default App
