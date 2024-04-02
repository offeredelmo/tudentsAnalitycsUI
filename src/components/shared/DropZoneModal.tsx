import { Chip } from '@mui/material';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export const Dropzone = ({setFiles, files}) => {

    const handleDelete = (lastModified) => () => {
        // Filtra el archivo que se va a eliminar basado en lastModified
        setFiles(prevFiles => prevFiles.filter(file => file.lastModified !== lastModified));
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Actualiza el estado con los archivos subidos
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
        console.log(acceptedFiles)
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div style={{ width: '100%' }}>
<div
  {...getRootProps()}
  style={{
    border: '2px dashed #000000',
    width: '90%', 
    height: '300px',
    textAlign: 'center',
    padding: '150px 0', 
    marginTop: 20,
    marginBottom: 20,
    boxSizing: 'border-box',
    background: '#D9D9D9' 
  }}
>                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p style={{ margin: 0 }}>Suelta los archivos aquí...</p> :
                        <p style={{ margin: 0 }}>Selecciona archivos</p>
                }
            </div>
            <ul>
                {files.map((file, index) => (
                       <Chip
                       key={index}
                       label={file.name}
                       onDelete={handleDelete(file.lastModified)}
                       style={{ margin: '5px' }}
                   />                   
                ))}
            </ul>
        </div>
    );
};

export default Dropzone;
