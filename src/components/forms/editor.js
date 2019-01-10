import React, { useState, Component } from "react";
import { Paper } from "@material-ui/core";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const TextEditor = ({ onChange, defaultValue, ref }) => {
  const [data, setData] = useState(EditorState.createEmpty());
  const get = editorState => {
    let getData = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    setData(editorState);
    onChange(getData);
  };
  return (
    <Paper elevation={1}>
      <Editor editorState={data} editorClassName='py-1 px-3' onEditorStateChange={get} />
    </Paper>
  );
};

export default TextEditor;
