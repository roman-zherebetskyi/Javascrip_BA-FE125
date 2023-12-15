function reduceDirections(route) {
  let obj = {
    'north': 1,
    'south': -1,
    'east': 2,
    'west': -2,
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  
  console.log(getKeyByValue(obj, -2))

  route.reduce((acc, dir, i, self) => {
    let x = 0;
    let y = 0;

    if (dir === 'north') {
      x += obj[dir];
    }

    if (dir === 'south') {
      x += obj[dir];
    }

    if (dir === 'east') {
      y += obj[dir]
    }

    if (dir === 'west') {
      y += obj[dir];
    }

    console.log(x, y)
  }, [])

}

reduceDirections(['north', 'east', 'west', 'south', 'west', 'west', 'north']);
