function getImageUrl(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

function Avatar({ person, size }) {
  let thumbnailSize = 's';

  if (size > 90) {
    thumbnailSize = 'b';
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
      <Avatar
        person={{ 
          name: 'Gregorio Y. Zara', 
          imageId: '7vQD0fP'
        }}
        size={40}
      />
      <Avatar 
        person={{
          name: 'gregorio y. zara',
          imageId: '7vQD0fp'
        }}
        size={120}
      />
    </>
    
  );
}
