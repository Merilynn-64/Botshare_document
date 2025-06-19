---
title: Human-Machine Interface (HMI) & Web UI for Robotics
nav_order: 5
has_children: false
---

# Human-Machine Interface (HMI) and Web UI for Robotics

In this lesson, students design and deploy a **web-based Human-Machine Interface (HMI)** to control and monitor a robot in real-time. The HMI is hosted on the robot's onboard computer (such as a Raspberry Pi 5) and communicates with the robot’s control software, typically powered by **ROS 2**, using **REST APIs** or **WebSockets**.

The goal is to build a professional-grade interface that mirrors real-world industrial and service robotics systems, with a strong focus on usability, feedback, and secure control.

---

## Technologies Covered

- **Flask** or **FastAPI** as the backend framework (Python-based)  
- **HTML/CSS** and **JavaScript** frontend (can be built with React or plain JS)  
- **WebSockets** for real-time telemetry (battery status, task updates, logs)  
- **RESTful API endpoints** for command execution (e.g., start, stop, dock)  
- **Basic UI authentication** (user login, secure command access)  

---

## Core Features of the HMI

| Feature                  | Description                                                   |
|--------------------------|---------------------------------------------------------------|
| Real-Time Dashboard      | Shows robot status: position, battery, task progress          |
| Control Panel            | Buttons for sending commands like move, dock, stop            |
| System Logs              | Display logs for debugging, task history, or errors           |
| Error Alerts             | Notification area for critical failures or disconnection      |
| Web UI Authentication    | Simple login system to secure the interface                   |
| Responsive Design        | Mobile/tablet-friendly layout for operators on the move       |

---

## System Architecture

1. The **frontend** is served from a local web server on the robot (e.g., Flask or FastAPI app).  
2. The **backend** exposes REST API endpoints and opens a WebSocket for continuous status updates.  
3. The **ROS 2 nodes** running on the robot publish telemetry and respond to service calls or messages.  
4. The HMI subscribes to updates and sends commands such as `start_mission`, `emergency_stop`, or `return_to_dock`.  
5. All data is displayed in real time via a browser-accessible UI hosted locally or on a LAN.

---

## Learning Outcomes

By completing this project, students will:

- Design a **user-friendly HMI** for robot control and feedback  
- Build **real-time Web UIs** using WebSockets and REST APIs  
- Deploy full-stack applications on **embedded Linux systems** like Raspberry Pi  
- Understand **secure interaction** between UI and robotic subsystems  
- Develop skills in **frontend/backend communication and full-stack robotics interfaces**

---

## Optional Extensions

- Add **data visualization** with charts (e.g., battery over time, navigation paths)  
- Integrate **ROS 2 Web Bridge** for deeper real-time ROS topic access  
- Use **JWT-based authentication** or OAuth for secure multi-user access  
- Create **custom themes** or mobile-specific controls for field deployment  
- Connect to a **cloud dashboard** for remote mission tracking

---

## Sample Project Folder

```plaintext
robot-hmi/
├── backend/
│   ├── app.py               # Flask or FastAPI server
│   ├── routes/
│   │   ├── status.py
│   │   └── control.py
├── frontend/
│   ├── index.html
│   ├── app.js               # WebSocket and API interaction
│   └── style.css
├── ros_interface/
│   ├── ros_control_bridge.py
│   └── telemetry_publisher.py
└── README.md
