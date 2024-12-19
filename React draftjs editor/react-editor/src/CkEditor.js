import { useState } from 'react';
import CKEditor from 'react-ckeditor-component';

const CkEditor = () => {
    const [content, setContent] = useState('content');
    const onBlur = (evt) => {
        console.log("onBlur event called with event info: ", evt);
    }
    const onChange = (evt) => {
        var newContent = evt.editor.getData();
        console.log(newContent.replace('#eeeeee;','#F5F5F5;font-style:italic;'));
        setContent(newContent.replace('#eeeeee;','#F5F5F5;font-style:italic;'));
    }
    const afterPaste = (evt) => {
        console.log("afterPaste event called with event info: ", evt);
    }
    return (
        <>
            <CKEditor
                activeClass="p10"
                content={content}
                events={{
                    "change": onChange
                }}
            />
            <div dangerouslySetInnerHTML={{ __html: content }} style={{ textAlign: 'left', padding: '12px', fontFamily: 'sans-serif', minHeight: '100px', backgroundColor: 'black', color: 'white' }} />
        </>
    );
}

export default CkEditor;