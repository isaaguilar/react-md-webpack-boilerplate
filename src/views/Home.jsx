import React from "react"
import Card from "react-md/lib/Cards/Card"
import CardTitle from "react-md/lib/Cards/CardTitle"
import CardActions from "react-md/lib/Cards/CardActions"
import CardText from "react-md/lib/Cards/CardText"
import Media, { MediaOverlay } from "react-md/lib/Media"
import Avatar from "react-md/lib/Avatars"
import Button from "react-md/lib/Buttons"

const ExpandableMediaCard = () => (
  <Card style={{ marginTop: 20, maxWidth: 600 }} className="md-block-centered">
    <Media>
      <img
        src="http://inspirationseek.com/wp-content/uploads/2014/06/Abstract-Painting-Ideas.jpg"
        role="presentation"
      />
      <MediaOverlay>
        <CardTitle title="Such nature" subtitle="Wow!">
          <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>
      </MediaOverlay>
    </Media>
    <CardTitle
      avatar={
        <Avatar
          src="http://wp.bakewithalma.com/wp-content/uploads/2017/04/bear_cake.jpg"
          role="presentation"
        />
      }
      title="Card Title"
      subtitle="Card Subtitle"
    />
    <CardActions expander>
      <Button flat label="Action 1" />
      <Button flat label="Action 2" />
    </CardActions>
    <CardText expandable>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>
        . Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
        massa. Vestibulum lacinia arcu eget nulla.
      </p>

      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim
        lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In
        scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem.
        Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
        vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
        lacinia aliquet. Mauris ipsum.
      </p>

      <p>
        Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
        Quisque volutpat condimentum velit.
        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>
        . Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt
        mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
        Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a
        tellus consequat imperdiet. Vestibulum sapien. Proin quam.
      </p>

      <p>
        Etiam ultrices.
        <b>
          Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh
        </b>
        . Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer
        euismod lacus luctus magna.
        <b>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos
        </b>
        . Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem,
        at interdum magna augue eget diam. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
        molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet
        augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet.
        <i>Ut fringilla</i>
        . Donec lacus nunc, viverra nec, blandit vel, egestas et, augue.
        Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim.
      </p>

      <p>
        Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper.
        Nulla facilisi.
        <i>Proin quam</i>
        . Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a
        tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis
        tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero
        eget ante. Nulla quam. Aenean laoreet.
        <b>Nulla facilisi</b>
        . Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede.
      </p>

    </CardText>
  </Card>
)

export default class Home extends React.Component {
  render() {
    return <ExpandableMediaCard />
  }
}
