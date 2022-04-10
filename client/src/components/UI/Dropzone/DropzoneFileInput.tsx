import Dropzone from 'react-dropzone';
import { Control, Controller } from 'react-hook-form';
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { CloudUpload, InsertDriveFile } from '@mui/icons-material';

export const DropzoneFileInput = ({ control, name }: { control: Control<any>; name: 'dropzone' }) => (
  <Controller
    control={control}
    name={name}
    defaultValue={[]}
    render={({ field: { onChange, onBlur, value } }) => (
      <>
        <Dropzone onDrop={onChange}>
          {({ getRootProps, getInputProps }) => (
            <Paper
              variant="outlined"
              sx={{
                backgroundColor: '#eee',
                textAlign: 'center',
                cursor: 'pointer',
                color: '#333',
                padding: '10px',
                marginTop: '20px',
                width: '80%',
              }}
              {...getRootProps()}
            >
              <CloudUpload sx={{ marginTop: '16px', color: '#888888', fontSize: '42px' }} />
              <input {...getInputProps()} name={name} onBlur={onBlur} />
              <p>Drag n drop files here, or click to select files</p>
            </Paper>
          )}
        </Dropzone>
        <List>
          {value.map((f: any) => (
            <ListItem key={f.name}>
              <ListItemIcon>
                <InsertDriveFile />
              </ListItemIcon>
              <ListItemText primary={f.name} secondary={f.size} />
            </ListItem>
          ))}
        </List>
      </>
    )}
  />
);
