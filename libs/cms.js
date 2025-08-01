// addEventListener support for IE8
function bindEvent(element, eventName, eventHandler) {
  if (element.addEventListener) {
    element.addEventListener(eventName, eventHandler, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventName, eventHandler);
  }
}

// Send a message to the parent
var sendMessage = function (msg) {
  // Make sure you are sending a string, and to stringify JSON
  window.parent.postMessage(msg, "*");
};

var results = document.getElementById("results"),
  messageButton = document.getElementById("message_button");

// Listen to messages from parent window
// bindEvent(window, "message", function (e) {
//   if (e.data) {
//     console.log(`RUBIA => ${JSON.stringify(e)}`);
//     const data = JSON.parse(e.data);
//     if (data?.source === "stenners-cms") {
//       console.log(`RUBIA => ${JSON.stringify(data)}`);
//     }
//   } else {
//     console.log(`RUBIA => ${JSON.stringify(e)}`);
//   }
// });

// Send random message data on every button click
bindEvent(messageButton, "click", function (e) {
  var random = Math.random();
  sendMessage("" + random);
});

export const Editable = ({ children }) => {
  const marker = "<!-- stenners-cms -->";
  return <></>;
};
