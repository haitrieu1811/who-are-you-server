import { ObjectId } from 'mongodb'

type ImageConstructor = {
  _id?: ObjectId
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export default class Image {
  _id: ObjectId
  name: string
  createdAt: Date
  updatedAt: Date

  constructor({ _id, name, createdAt, updatedAt }: ImageConstructor) {
    const date = new Date()
    this._id = _id ?? new ObjectId()
    this.name = name
    this.createdAt = createdAt ?? date
    this.updatedAt = updatedAt ?? date
  }
}
