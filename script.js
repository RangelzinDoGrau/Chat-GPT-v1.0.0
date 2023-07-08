document.addEventListener("DOMContentLoaded", function() {
    const chatDisplay = document.getElementById("chat-display");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
  
    sendBtn.addEventListener("click", function() {
      sendMessage();
    });
  
    userInput.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const message = userInput.value.trim();
      if (message !== "") {
        appendMessage("Você: " + message);
        userInput.value = "";
        scrollToBottom();
        // Implemente aqui a lógica do chatbot
        // Você pode usar uma API de processamento de linguagem natural para responder às mensagens do usuário
      }
    }
  
    function appendMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.innerText = message;
      chatDisplay.appendChild(messageElement);
    }
  
    function scrollToBottom() {
      chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
  });
  