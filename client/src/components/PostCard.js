import React, { useContext } from 'react';
import { Button, Card, Icon, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { AuthContext } from '../context/auth';
import LikeButton from './LikeButton';
import DeleteButton from './DeleteButton';
import CustomButtonPopup from '../util/CustomButtonPopup';

function PostCard({ post: { body, createdAt, id, username, likeCount, likes, commentCount, comments } }) {
  const { user } = useContext(AuthContext);

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
        <LikeButton
          user={user}
          post={{ id, likes, likeCount }}
        />

        <CustomButtonPopup content='Comment on post'>
          <Button
            labelPosition='right'
            as={Link}
            to={`/posts/${id}`}
          >
            <Button basic color='blue'>
              <Icon name='comments' />
            </Button>
            <Label basic color='blue' pointing='left'>
              {commentCount}
            </Label>
          </Button>
        </CustomButtonPopup>

        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>

  )
}

export default PostCard;