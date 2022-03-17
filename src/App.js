import MwebSelfie from './mweb-aelfie'
import { useState } from 'react'

export default function App(props) {
  const [isPreviewShown, setPreviewShown] = useState(false);
  const handlePreview=()=>{
    setPreviewShown(prevState => !prevState); // Here we change state
}
 
  return (
    <div>
    {/* <button type="submit" onClick={props.handleSubmit}>Submit</button><br/> */}
   
        <button type="submit" onClick={handlePreview}>Preview</button>
  
    {isPreviewShown && <MwebSelfie/>}
    </div>
  );
  
}
