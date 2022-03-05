import CSS from 'csstype';
export const baseStyle:CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    margin: '10px 0',
    borderWidth: '3',
    borderRadius: '3',
    borderColor: '#B7B7B7',
    borderStyle: 'dashed',
    backgroundColor: '#D5DAE8',
    color: '#555',
    transition: 'border .3s ease-in-out'
};

export const activeStyle: CSS.Properties = {
  borderColor: '#2196f3'
};

export const acceptStyle: CSS.Properties = {
  borderColor: '#00e676'
};

export const rejectStyle: CSS.Properties = {
  borderColor: '#ff1744'
};

export const  lineStyle: CSS.Properties = {
  width: '30%',
  textAlign: 'center',
  borderBottom: '3px solid #777',
  lineHeight: '0.01em',
  margin: '10px 0 20px', 
}

export const textStyle: CSS.Properties = {
  backgroundColor: '#D5DAE8',
  color: '#777',
  padding: '0 10px' 
}

export const iconStyle: CSS.Properties = {
  maxWidth: '15%',
  height: 'auto',
  margin: '10px'
}