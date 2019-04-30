import React, { Component, Fragment } from "react"
import CKEditor from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import InlineEditor from "@ckeditor/ckeditor5-build-inline"
import { Paper } from "@material-ui/core"

class TextEditor extends Component {
    constructor(props) {
        super(props)
        this.state = { data: this.props.defaultValue || "", mode: "classic", show: false }
    }
    shouldComponentUpdate(nextProps, prevState) {
        if (nextProps.defaultValue != this.props.defaultValue) {
            this.setState({ data: nextProps.defaultValue })
            return false
        }
        return true
    }

    change = (event, editor) => {
        const data = editor.getData()
        this.props.onChange(data)
        this.setState({ data })
    }
    render() {
        const { data, mode, show } = this.state
        return (
            <Paper>
                <CKEditor
                    editor={mode == "classic" ? ClassicEditor : InlineEditor}
                    data={show ? data : ""}
                    onInit={(editor) => {
                        this.setState({ show: true })
                    }}
                    onChange={this.change}
                    onBlur={(editor) => {
                        //  console.log("Blur.", editor);
                    }}
                    onFocus={(editor) => {
                        //  console.log("Focus.", editor);
                    }}
                />
            </Paper>
        )
    }
}

export default TextEditor
