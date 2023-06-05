import { randomUUID } from "node:crypto"
import { extname, resolve } from "node:path"
import { FastifyInstance } from "fastify"
import { createWriteStream, mkdirSync } from "node:fs"
import { pipeline } from "node:stream"
import { promisify } from "node:util"
import { URL } from "node:url"

const pump = promisify(pipeline)

export async function uploadRoutes(app: FastifyInstance) {
  app.post("/upload", async (request, reply) => {
    const upload = await request.file()

    if (!upload) {
      return reply.status(400).send()
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-z]+/
    const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

    if (!isValidFileFormat) {
      return reply.status(400).send()
    }

    const fileId = randomUUID()
    const extension = extname(upload.filename)
    const fileName = `${fileId}${extension}`

    const uploadDir = resolve(__dirname, "..", "..", "uploads")
    mkdirSync(uploadDir, { recursive: true }) // creates the directory if it doesn't exist

    const filePath = resolve(uploadDir, fileName)
    const writeStream = createWriteStream(filePath)

    await pump(upload.file, writeStream)

    const fullUrl = request.protocol.concat("://").concat(request.hostname)
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString()

    return { fileUrl }
  })
}
