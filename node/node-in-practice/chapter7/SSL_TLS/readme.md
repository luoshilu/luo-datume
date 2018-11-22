# 一个使用 TLS 来加密的 TCP服务器



## 创建公钥和私钥

```
openssl genrsa -out server.pem 1024
openssl req -new -key server.pem -out server-csr.pem
openssl x509 -req -in server-csr.pem -signkey server.pem -out server-cert.pem

openssl genrsa -out client.pem 1024
openssl req -new -key client.pem -out client-csr.pem
openssl x509 -req -in client-csr.pem -signkey client.pem -out client-cert.pem

```

运行加密的服务器后, 可使用
```
openssl s_client -connect 127.0.0.1:8000 -CAfile server-cert.pem
```
来测试你的安全证书是否正确.