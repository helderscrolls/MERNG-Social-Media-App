import React from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';


function PostCard({ post: { body, createdAt, id, username, likeCount, likes, commentCount, comments } }) {
  function likePost() {
    console.log('POST LIKED');
  }

  function commentOnPost() {
    console.log('COMMENTED ON POST');
  }
  
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>
          {username}
        </Card.Header>

        <Card.Meta
          as={Link}
          to={`/posts/${id}`}
          style={{ color: 'teal' }}
        >
          {moment(createdAt).fromNow()}
        </Card.Meta>

        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as='div' labelPosition='right' onClick={likePost}>
          <Button basic color='teal'>
            <Icon name='heart' />
          </Button>
          <Label basic color='teal' pointing='left'>
            {likeCount}
          </Label>
        </Button>

        <Button as='div' labelPosition='right' onClick={commentOnPost}>
          <Button basic color='blue'>
            <Icon name='comments' />
          </Button>
          <Label basic color='blue' pointing='left'>
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>

  )
}

export default PostCard;