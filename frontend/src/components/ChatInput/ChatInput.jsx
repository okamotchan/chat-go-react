import React, { Component } from "react";
import "./ChatInput.scss";

class ChatInput extends Component{
    render() {
        return(
            <div className="ChatInput">
                <label>入力
                    <input onKeyDown={this.props.send}  />
                </label>
            </div>
        );
    }
}

export default ChatInput;
