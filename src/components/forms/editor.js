import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

 const Editor = ({ onChange, defaultValue, ref }) => {
    defaultValue = defaultValue != undefined ? defaultValue : "";
    const [data, setData] = useState(defaultValue);
    return (
        <CKEditor
            ref={ref}
            editor={ClassicEditor}
            data={data}
            onChange={(event, editor) => {
                const editorContent = editor.getData();
                setData(editorContent);
                onChange(editorContent);
            }}
        />
    );
};
export default Editor
        // onInit={ editor => {
        //     // You can store the "editor" and use when it is needed.
        //     console.log( 'Editor is ready to use!', editor );
        // } }
        // onBlur={ editor => {
        //     console.log( 'Blur.', editor );
        // } }
        // onFocus={ editor => {
        //     console.log( 'Focus.', editor );
        // } }