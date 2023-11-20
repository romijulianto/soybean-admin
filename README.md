<div align="center">
	<img src="./public/favicon.svg" style="width: 160px;"/>
	<h1>Soybean Admin</h1>
</div>

- Running the Apps

```bash
pnpm i
```

```bash
pnpm dev
```

```bash
pnpm build
```

## Docker

- Docker Soybean

```bash
docker build -t soybean-admin-image -f docker/Dockerfile .
docker run -d -p 80:80 soybean-admin-image
```
