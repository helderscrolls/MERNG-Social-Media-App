import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Card, Grid, Image } from 'semantic-ui-react';
import moment from 'moment';

function KojiMockPost(props) {
  const postId = props.match.params.postId;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticle = async () => {
    const fetchedPost = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const { data } = fetchedPost;

    setArticle(data);
    setLoading(false);
  };
  useEffect(() => {
    getArticle();
  }, []);

  let postMarkup;

  if (loading) {
    postMarkup = <p>Loading post..</p>;
  } else {
    const {
      body,
      title,
    } = article;

    postMarkup = (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Image
              floated='right'
              size='small'
              src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
            />
          </Grid.Column>

          <Grid.Column width={10}>
            <Card fluid>
              <Card.Content>
                <Card.Header>
                  {title}
                </Card.Header>

                <Card.Meta>
                  {moment(new Date(+(new Date()) - Math.floor(Math.random()*10000000000))).fromNow()}
                </Card.Meta>

                <Card.Description>
                  {body}
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

  return postMarkup;
}

export default KojiMockPost;