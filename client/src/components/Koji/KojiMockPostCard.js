import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function KojiMockPostCard({ post: { body, title, id } }) {
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
        />
        <Card.Header
          style={{
            width: '250px',
            'white-space': 'nowrap',
            overflow: 'hidden',
            'text-overflow': 'ellipsis'
          }}
        >
          {title}
        </Card.Header>

        <Card.Description>
          {body}
        </Card.Description>
      </Card.Content>
      
      <Card.Content extra>
        <Card.Meta
          as={Link}
          to={`/koji/${id}`}
          style={{ color: 'teal' }}
        >
          Read more
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default KojiMockPostCard;