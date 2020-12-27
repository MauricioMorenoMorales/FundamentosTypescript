export {}
console.clear()

enum PhotoOrientation {
	Landscape = 'Landscape',
	Portrait = 'Portrait',
	Square = 'Square',
	Panorama = 'Panorama',
}

// interface Entity {
//   id: number;
//   title: string;
// }

// class Entity {
//     id: number;
//     title: string;
//   }

class Picture {
	#id: number
	title: string
	orientation: PhotoOrientation

	private constructor(
		id: number,
		title: string,
		orientation: PhotoOrientation,
	) {
		this.#id = id
		this.title = title
		this.orientation = orientation
	}

	// Comportamiento
	toString() {
		return `[id: ${this.#id}, title: ${this.title}, orientation: ${
			this.orientation
		}]`
	}
}

class Album {
	#id: number
	title: string
	pictures: Picture[] = []

	public constructor(id: number, title: string) {
		this.#id = id
		this.title = title
		// this.pictures = [];
	}

	addPicture(picture: Picture) {
		this.pictures.push(picture)
	}
}

//const picture: Picture = new Picture(100, 'cool', PhotoOrientation.Square) //SOlo es accesible dentro de la declaracion de la clase
//const picture1 = new Picture(201, 'korn', PhotoOrientation.Square)
// const album: Album = new Album(534, 'Family')
// console.log(picture)
// console.log(picture1)
// album.addPicture(picture)
// album.addPicture(picture1)

// console.log('album', album)

//picture.id = 100
// picture.title = 'Another title'
// album.title = 'Personal Activities'
// console.log('album', album)
// console.log('xd')
