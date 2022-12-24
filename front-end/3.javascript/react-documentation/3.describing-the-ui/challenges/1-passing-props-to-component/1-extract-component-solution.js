// solution extract a component
/* 
profile receives a props object with 6 properties
*/
function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70
}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img 
        className="Avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li><b>Profession:</b>{profession}</li>
        <li>
          <b>Awards: {awards.length}</b>
          ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        imageId="szV5sdG"
        name="Maria Sklodowska-Curie"
        profession="physicists and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'nobel price in physics',
          'nobel prize in chemistry',
          'davy medal',
          'matteucci medal'
        ]}
      />
      <Profile 
        imageId='Yfe0qp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery='a method for measuring carbon dioxide in seaway'
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}