import React, { useEffect, useState } from 'react'
import Axios from "axios";
import { Grid, Transition } from 'semantic-ui-react'

import KojiMockPostCard from '../../components/Koji/KojiMockPostCard';

function Koji() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    const fetchedPosts = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    const { data } = fetchedPosts;

    setArticles(data);
    setLoading(false);
  };
  useEffect(() => {
    getArticles();
  }, []);


  return (
    <Grid columns={3}>
      <Grid.Row className="home-page-title">
        <h1>Mock Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
            <Transition.Group>
              {
                articles && articles.map(article => (
                  <Grid.Column key={article.id} style={{ marginBottom: 20 }}>
                    <KojiMockPostCard post={article} />
                  </Grid.Column>
                ))
              }
            </Transition.Group>
          )}
      </Grid.Row>
    </Grid>
  )
}

export default Koji;