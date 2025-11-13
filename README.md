# 🏦 Invest-Stake  
Investment calculation & future income prediction system  

---

## 🧠 Overview  
**Invest-Stake** คือระบบสำหรับคำนวณการลงทุนและคาดการณ์รายได้ในอนาคต  
สร้างด้วยภาษา **Golang** โดยใช้แนวทาง **Hexagonal Architecture (Ports & Adapters)**  
เพื่อให้โครงสร้างสะอาด แยกความรับผิดชอบชัดเจน และขยายระบบได้ในอนาคต  

---

## 🧩 Architecture  
Hexagonal Architecture (Clean / Ports & Adapters)

---

BackEnd : Haxagonal Golang Structure 
---

[Client] → [Controller] → [Service] → [Repository] → [Database]
---
```
BackEnd/
│
├── config/                 # Configuration ของโปรเจกต์
│   ├── config.go
|   └── constant.go         # Constant ต่างๆเช่น สี ค่าคงที่
|
|
├── controllers/            #Https Request Handler
│   └── ..._controller.go
|
|
├── database/               # Database connection / migration
│   └── mongo.go
│   └── sql.go              (สำหรับ อนาคต)
│
|
├── dto/                    # Data Transfer Objects (Request/Response/Model structs)
│   └── model.go            # Model OF Collection 
│   ├── reg.go              # Request Body Query Parser
│   └── res.go              # Respone
│
|
|
├── repository/             # Repository layer (Port interfaces)
│   ├── port.go             # Secondary Port 
│   └── ..._repo.go         # Secondary Adapter
│
├── service/                # Business logic / Use Cases
│   ├── port.go             # Primary Port 
│   └── ..._service.go      # Primary Adapter
│
│
├── routes/                 # Route definitions
│   └── routes.go
│
├── main.go
├── go.mod
└── go.sum
```
