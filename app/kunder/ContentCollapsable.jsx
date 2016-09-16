import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const ContentCollapsable = ({title, fixedContent, children, cardActions, initiallyExpanded}) => {

  var renderCardActions = null;
  if(cardActions) {
    renderCardActions = <CardActions style={{backgroundColor:'#FFF', borderTop:"1px solid #DDD"}}>{cardActions}</CardActions>
  }

  var renderFixedContent = null;
  if(fixedContent) {
    renderFixedContent = <CardText expandable={false}>{fixedContent}</CardText>
  }

  return (
    <Card initiallyExpanded={initiallyExpanded} style={{marginBottom: 10}}>
      <CardHeader
        style={{backgroundColor:'#F5F5F5', borderBottom:"1px solid #DDD"}}
        title={title}
        actAsExpander
        showExpandableButton
        />
      {renderFixedContent}
      <CardText expandable>
        {children}
      </CardText>
      {renderCardActions}
    </Card>
  );
}

ContentCollapsable.defaultProps = {
  initiallyExpanded: true
}

export default ContentCollapsable;
