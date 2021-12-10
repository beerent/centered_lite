interface Props {
    height: string,
}

export const Padding = ({ height }: Props) => {
    return <div style={{paddingTop: height}}/>
    
};