export const populateList = async (collection: String) => {
    let list = [];
    switch (collection) {
      case 'Users': case 'Worlds':
        list = [
          'creations.characters',
        ];
        break;
  
      default:
        break;
    }
    return list;
  };
  