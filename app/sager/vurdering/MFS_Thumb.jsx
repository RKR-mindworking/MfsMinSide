import React, {PropTypes} from 'react'
import Paper from 'material-ui/Paper'
import Popover from 'material-ui/Popover/Popover';

var showTimer;

class MFS_Thumb extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPreview: false,
            anchorEl: undefined
        }

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.doShowPreview = this.doShowPreview.bind(this);
    }

    handleMouseOver(e) {

        if (showTimer) {
            clearTimeout(showTimer);
        }

        showTimer = setTimeout(this.doShowPreview, 200, e.target);
    }

    handleRequestClose(e) {
        clearTimeout(showTimer);
        this.setState({showPreview: false})
    }

    doShowPreview(target) {
        this.setState({showPreview: true, anchorEl: target})
    }

    render() {
        return (
            <div>
                <img src={this.props.thumbnail} onMouseOver={this.handleMouseOver} onMouseOut={this.handleRequestClose} style={{
                    height: 50,
                    paddingTop: 5,
                    width: 73
                }}/>
                <Popover zDepth={5} animated={false} useLayerForClickAway={false} open={this.state.showPreview} onRequestClose={this.handleRequestClose} anchorOrigin={{
                    "horizontal": "right",
                    "vertical": "top"
                }} targetOrigin={{
                    "horizontal": "left",
                    "vertical": "center"
                }} anchorEl={this.state.anchorEl}>
                    <Paper style={{ padding: 10 }}>
                        <img src={this.props.preview} style={{height: 300}}/>
                    </Paper>
                </Popover>
            </div>
        );
    }
}

MFS_Thumb.propTypes = {
    thumbnail: React.PropTypes.string.isRequired,
    preview: React.PropTypes.string.isRequired
}

export default MFS_Thumb;
