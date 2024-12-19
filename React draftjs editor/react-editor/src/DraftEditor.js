import React, { useState, useEffect } from 'react';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DraftEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    const contentState = editorState.getCurrentContent();
    const html = stateToHTML(contentState);
    setConvertedContent(html);
  }, [editorState]);

  console.log(convertedContent);

  return (
    <div className='editor'>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      <div dangerouslySetInnerHTML={{__html:convertedContent}}/>
    </div>
  );
}

export default DraftEditor;